// import { BANK } from '../constants/index'
// import { TransactionResponse } from '@ethersproject/providers'
import { useEffect, useState } from 'react'
import { useActiveWeb3React, useDefaultWeb3React } from './'
import { useMerkleDistributorContract } from './contracts'
import { isAddress } from '../utils'

interface UserClaimData {
  index: number
  amount: string
  proof: string[]
}

const CLAIM_PROMISES: { [key: string]: Promise<UserClaimData | null> } = {}

// returns the claim for the given address, or null if not valid
function fetchClaim(
  account: string,
  chainId: number
): Promise<UserClaimData | null> {
  const formatted = isAddress(account)
  if (!formatted) return Promise.resolve(undefined)
  const key = `${chainId}:${account}`

  return (CLAIM_PROMISES[key] =
    CLAIM_PROMISES[key] ??
    fetch('/api/claim', {
      body: JSON.stringify({ chainId, address: formatted }),
      headers: {
        'Content-Type': 'application/json',
        'Referrer-Policy': 'no-referrer',
      },
      method: 'POST',
    })
      .then(async (res) => {
        if (res.ok) {
          const claimData = await res.json()
          claimData.account = account
          return claimData
        } else {
          return undefined
        }
      })
      .catch((error) => console.error('Failed to get claim data', error)))
}

// parse distributorContract blob and detect if user has claim data
// null means we know it does not
export function useUserClaimData(
  rawAccount: string
): UserClaimData | null | undefined {
  const { chainId } = useActiveWeb3React()
  const ensLibrary = useDefaultWeb3React().library
  const distributorContract = useMerkleDistributorContract()

  const [account, setAccount] = useState('')
  useEffect(() => {
    if (rawAccount.endsWith('.eth')) {
      ensLibrary
        .resolveName(rawAccount.toLowerCase())
        .then((resolvedAccount) => {
          setAccount(resolvedAccount)
        })
        .catch()
    } else {
      setAccount(rawAccount)
    }
  }, [rawAccount])

  const key = `${chainId}:${account}`
  const [claimInfo, setClaimInfo] = useState<{
    [key: string]: UserClaimData | null
  }>({})
  const claimed = useIsClaimed(claimInfo[key], distributorContract)

  useEffect(() => {
    if (!account || !chainId) return
    fetchClaim(account, chainId).then((accountClaimInfo) =>
      setClaimInfo((claimInfo) => {
        return {
          ...claimInfo,
          [key]: accountClaimInfo,
        }
      })
    )
  }, [claimed, account, chainId, key])

  return !claimed && claimInfo[key] ? claimInfo[key] : undefined
}

export function useIsClaimed(claimInfo, distributorContract): boolean {
  const [claimed, setClaimed] = useState(true)

  useEffect(() => {
    if (claimInfo) {
      distributorContract
        .isClaimed(claimInfo.index)
        .then((response) => {
          setClaimed(response)
        })
        .catch(() => {
          //swallow error, user probably on wrong network
        })
    } else {
      setClaimed(false)
    }
  }, [distributorContract, claimInfo])

  return claimed
}

export function useClaim(claimData, pending, setPending, setDone): void {
  const distributorContract = useMerkleDistributorContract()

  useEffect(() => {
    if (pending) {
      const args = [
        claimData.index,
        claimData.account,
        claimData.amount,
        claimData.proof,
      ]

      distributorContract.estimateGas['claim'](...args, {}).then(
        (estimatedGasLimit) => {
          distributorContract
            .claim(...args, { value: null, gasLimit: estimatedGasLimit })
            .then((tx) => {
              setPending(true)

              tx.wait(1).then(() => {
                setDone(true)
                setPending(false)
              })
            })
            .catch(() => {
              setPending(false)
            })
        }
      )
    }
  }, [distributorContract, pending])
}
