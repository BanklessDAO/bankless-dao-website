// import { BANK } from '../constants/index'
// import { TransactionResponse } from '@ethersproject/providers'
import { useEffect, useState } from 'react'
import { stringify } from 'flatted'
import { useActiveWeb3React, useDefaultWeb3React } from '.'
import { useMerkleDistributorContracts } from './useMerkleDistributorContracts'
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
): Promise<Array<UserClaimData | null>> {
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
          claimData.forEach((individualClaim) => {
            if (individualClaim !== null && individualClaim != undefined)
              individualClaim.account = account
          })
          return claimData
        } else {
          return [undefined, undefined]
        }
      })
      .catch((error) => console.error('Failed to get claim data', error)))
}

// parse distributorContract blob and detect if user has claim data
// null means we know it does not
export function useUserClaimData(
  rawAccount: string
): Array<UserClaimData | null | undefined> {
  const { chainId } = useActiveWeb3React()
  const distributorContracts = useMerkleDistributorContracts()

  const account = useAccount(rawAccount)

  const key = `${chainId}:${account}`

  const [claimInfo, setClaimInfo] = useState<{
    [key: string]: Array<UserClaimData | null>
  }>({})
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
  }, [account, chainId, key])

  const claimed = useIsClaimed(claimInfo, key, distributorContracts)

  const [finalClaims, setFinalClaims] = useState([])
  try {
    useEffect(() => {
      try {
        setFinalClaims(
          claimInfo[key]
            ? claimInfo[key].map((info, index) => {
                return !claimed[index] && info ? info : undefined
              })
            : []
        )
      } catch (error) {
        alert(error)
      }
    }, [account, JSON.stringify(claimed), JSON.stringify(claimInfo)])
  } catch (error) {
    alert(error)
  }

  return finalClaims
}

function useAccount(rawAccount): string {
  const ensLibrary = useDefaultWeb3React().library
  const [account, setAccount] = useState('')
  useEffect(() => {
    if (rawAccount.endsWith('.eth')) {
      ensLibrary
        .resolveName(rawAccount.toLowerCase())
        .then((resolvedAccount) => {
          setAccount(resolvedAccount)
        })
        .catch((e) => {
          console.error(e)
        })
    } else {
      setAccount(rawAccount)
    }
  }, [rawAccount])

  return account
}

export function useIsClaimed(
  claimInfo,
  key,
  distributorContracts
): Array<boolean> {
  const [claimed, setClaimed] = useState(Array(2).fill(true))

  useEffect(() => {
    if (claimInfo[key] === undefined) {
      return
    }
    Promise.all(
      claimInfo[key].map(async (claim, index) => {
        if (claim) {
          const distributorContract = distributorContracts[index]
          let response
          try {
            response = await distributorContract.isClaimed(claim.index)
          } catch (e) {
            console.error(e)
            response = true
          }
          return response
        } else {
          return true
        }
      })
    ).then((response) => {
      setClaimed(response)
    })
  }, [stringify(distributorContracts), stringify(claimInfo[key])])

  return claimed
}

export function useClaim(claimData, pending, setPending, setDone): void {
  const distributorContracts = useMerkleDistributorContracts()
  useEffect(() => {
    if (pending) {
      if (claimData.length !== 2) return
      const oldClaim = claimData[0]
      const newClaim = claimData[1]

      if (newClaim && Number(newClaim.amount) > 0) {
        if (oldClaim && Number(oldClaim.amount) > 0) {
          const args = [
            newClaim.account,
            newClaim.index,
            newClaim.amount,
            newClaim.proof,
            oldClaim.index,
            oldClaim.amount,
            oldClaim.proof,
          ]

          distributorContracts[1].estimateGas['claimBoth'](...args, {})
            .then((estimatedGasLimit) => {
              distributorContracts[1]
                .claimBoth(...args, {
                  value: null,
                  gasLimit: estimatedGasLimit,
                })
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
            })
            .catch(() => {
              console.error('FAILED TO ESTIMATE')
            })
        } else {
          const args = [
            newClaim.index,
            newClaim.account,
            newClaim.amount,
            newClaim.proof,
          ]
          distributorContracts[1].estimateGas['claim'](...args, {})
            .then((estimatedGasLimit) => {
              distributorContracts[1]
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
            })
            .catch(() => {
              console.error('FAILED TO ESTIMATE')
            })
        }
      } else if (oldClaim && Number(oldClaim.amount) > 0) {
        const args = [
          oldClaim.index,
          oldClaim.account,
          oldClaim.amount,
          oldClaim.proof,
        ]
        distributorContracts[0].estimateGas['claim'](...args, {})
          .then((estimatedGasLimit) => {
            distributorContracts[0]
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
          })
          .catch(() => {
            console.error('FAILED TO ESTIMATE')
          })
      }
    }
  }, [distributorContracts, pending])
}
