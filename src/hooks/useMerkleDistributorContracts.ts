import { Contract } from '@ethersproject/contracts'

import { useActiveWeb3React } from './index'
import {
  MERKLE_DISTRIBUTOR_ADDRESS,
  MERKLE_DISTRIBUTOR_ABI,
} from '../constants'
import { useContracts } from './useContract'

export function useMerkleDistributorContracts(): Array<Contract | null> {
  const { chainId, library, account } = useActiveWeb3React()
  if (chainId === undefined) return []
  return useContracts(
    MERKLE_DISTRIBUTOR_ADDRESS[chainId],
    MERKLE_DISTRIBUTOR_ABI,
    true,
    library,
    account
  )
}
