import Web3Modal from 'web3modal'
import { useState, useEffect } from 'react'

import Button from 'src/components/parts/Button'
import { useWalletWeb3React } from 'src/hooks'
import { injected, shortenAddress } from 'src/utils'

const WalletButton = () => {
  const walletWeb3ReactContext = useWalletWeb3React()
  const isConnected = walletWeb3ReactContext.active
  const [connectClick, setConnectClick] = useState(false)

  useEffect(() => {
    if (connectClick) {
      const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions: {
          injected: {
            package: null,
            connector: async () => {
              return 'injected'
            },
          },
        },
      })
      web3Modal
        .connect()
        .then(() => {
          return walletWeb3ReactContext.activate(injected)
        })
        .then(() => {
          setConnectClick(false)
        })
        .catch()
    }
  }, [connectClick])
  console.log(walletWeb3ReactContext)
  return (
    <Button
      theme={isConnected ? 'green' : 'pink'}
      thin={true}
      uppercase={false}
      onClick={() => {
        isConnected ? undefined : setConnectClick(true)
      }}
    >
      {isConnected
        ? shortenAddress(walletWeb3ReactContext.account)
        : 'Connect a Wallet'}
    </Button>
  )
}

export default WalletButton
