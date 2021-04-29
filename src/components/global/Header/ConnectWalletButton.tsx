import Web3Modal from 'web3modal'
import { useState, useEffect } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'

import Button from 'src/components/parts/Button'
import { useWalletWeb3React } from 'src/hooks'
import { INFURA_ID } from 'src/constants'
import { walletconnect, injected } from 'src/utils'

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
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: INFURA_ID,
            },
            connector: async () => {
              return 'walletconnect'
            },
          },
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
        .then((provider) => {
          if (provider === 'walletconnect') {
            return walletWeb3ReactContext.activate(walletconnect)
          } else {
            return walletWeb3ReactContext.activate(injected)
          }
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
