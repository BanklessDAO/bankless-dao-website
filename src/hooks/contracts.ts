import { Contract } from '@ethersproject/contracts'
import { useMemo } from 'react'

import { useActiveWeb3React } from './index'
import {
  MERKLE_DISTRIBUTOR_ADDRESS,
  MERKLE_DISTRIBUTOR_ABI,
} from '../constants'
import { getContract } from '../utils'

export function useMerkleDistributorContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(
    chainId ? MERKLE_DISTRIBUTOR_ADDRESS[chainId] : undefined,
    MERKLE_DISTRIBUTOR_ABI,
    true
  )
}

// returns null on errors
function useContract(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null {
  const { library, account } = useActiveWeb3React()
  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      )
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}
