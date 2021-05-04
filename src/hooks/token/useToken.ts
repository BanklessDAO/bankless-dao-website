import { Contract } from '@ethersproject/contracts'

import { useActiveWeb3React } from 'src/hooks'
import { TOKEN_ADDRESS, TOKEN_ABI } from 'src/constants'
import { useContract } from 'src/hooks/useContract'

export function useTokenContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(
    chainId ? TOKEN_ADDRESS[chainId] : undefined,
    TOKEN_ABI,
    true
  )
}
