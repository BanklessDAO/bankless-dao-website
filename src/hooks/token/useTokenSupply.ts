import { useState } from 'react'

import { useTokenContract } from './useToken'

export function useTokenSupply(): number | undefined {
  const tokenContract = useTokenContract()
  const [supply, setSupply] = useState(undefined)
  if (tokenContract) {
    tokenContract
      .totalSupply()
      .then((supply) => {
        setSupply(Number(supply) / 10 ** 18)
      })
      .catch((e) => {
        console.error(e)
      })
  }
  return supply
}
