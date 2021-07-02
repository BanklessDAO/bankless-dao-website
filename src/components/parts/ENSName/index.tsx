import React, { useState, useEffect } from 'react'
import ENS, { getEnsAddress } from '@ensdomains/ensjs'

async function getNameForAddress(address, provider) {
  if (!provider || !address) {
    return null
  }
  const ens = new ENS({ provider, ensAddress: getEnsAddress('1') })
  const response = await ens.getName(address)
  return response && response.name
}

function useENSName(address, provider) {
  const [name, setName] = useState<string>()
  useEffect(() => {
    getNameForAddress(address, provider).then(setName)
  }, [address, provider])
  return name
}

export default function ENSName({
  address,
  fallback = null,
  provider = window.web3 ? window.web3.currentProvider : window.ethereum,
}: {
  address: string
  fallback?: string
  provider?: any
}) {
  const name = useENSName(address, provider)
  return <>{name || fallback}</>
}
