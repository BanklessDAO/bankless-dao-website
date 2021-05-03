import { Contract } from '@ethersproject/contracts'

import { useActiveWeb3React } from './index'
import {
  MERKLE_DISTRIBUTOR_ADDRESS,
  MERKLE_DISTRIBUTOR_ABI,
} from '../constants'
import { useContract } from './useContract'

export function useMerkleDistributorContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(
    chainId ? MERKLE_DISTRIBUTOR_ADDRESS[chainId] : undefined,
    MERKLE_DISTRIBUTOR_ABI,
    true
  )
}
