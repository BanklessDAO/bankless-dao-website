import Web3Modal from 'web3modal'
import { useState, useEffect } from 'react'

import Button from 'src/components/parts/Button'
import { useWalletWeb3React } from 'src/hooks'
import { injected } from 'src/utils'

const WalletButton = () => {
  const walletWeb3ReactContext = useWalletWeb3React()
  const isConnected = walletWeb3ReactContext.active
  const [connectClick, setConnectClick] = useState(false)

  useEffect(() => {
    if (connectClick) {
      const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: false,
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
  return (
    <Button
      theme={isConnected ? 'lime' : 'pink'}
      thin={true}
      onClick={() => {
        isConnected ? undefined : setConnectClick(true)
      }}
    >
      {isConnected ? 'Connected' : 'Connect a Wallet'}
    </Button>
  )
}

export default WalletButton
