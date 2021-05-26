import Web3Modal from 'web3modal'
import React, { useState, useEffect, useRef } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'

import Button from 'src/components/parts/Button'
import { useWalletWeb3React } from 'src/hooks'
import { useDetectOutsideClick } from 'src/hooks/useDetectOutsideClick'
import {
  walletConnect,
  injected,
  shortenAddress,
  trimCurrencyForWhales,
} from 'src/utils'
import { useTokenBalance } from 'src/hooks/token/useTokenBalance'
import { useUserClaimData } from 'src/hooks/useClaim'
import { useTokenSupply } from 'src/hooks/token/useTokenSupply'

import { TokenModal } from './ConnectWalletModal/style'
import { INFURA_ID } from 'src/constants'

let web3Modal: Web3Modal

const WalletButton = () => {
  const walletWeb3ReactContext = useWalletWeb3React()
  const isConnected = walletWeb3ReactContext.active
  const [connectClick, setConnectClick] = useState(false)

  const modalRef = useRef(null)
  const [modalOpen, setModalOpen] = useDetectOutsideClick(modalRef, false)

  useEffect(() => {
    if (connectClick) {
      if (!web3Modal) {
        web3Modal = new Web3Modal({
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
      }
      web3Modal
        .connect()

        .then((provider) => {
          if (provider.isMetaMask) {
            return walletWeb3ReactContext.activate(injected)
          } else {
            return walletWeb3ReactContext.activate(walletConnect)
          }
        })
        .then(() => {
          setConnectClick(false)
        })
        .catch(() => {
          setConnectClick(false)
        })
    }
  }, [connectClick])

  const rawBalance = useTokenBalance(walletWeb3ReactContext.account) ?? 0
  const commaBalance = Number(rawBalance).toLocaleString('en')
  const whaleBalance = trimCurrencyForWhales(rawBalance)

  const claimData = useUserClaimData(walletWeb3ReactContext.account ?? '')
  let total = 0
  claimData.forEach((individualClaimData) => {
    if (individualClaimData && !(individualClaimData as any).claimed)
      total += Number(individualClaimData.amount)
  })
  const commaClaim = claimData
    ? Number(Number(total) / 10 ** 18).toLocaleString('en')
    : 0

  const rawSupply = useTokenSupply()
  const commaSupply = Number(rawSupply).toLocaleString('en')

  return (
    <React.Fragment>
      {isConnected && (
        <Button
          theme="gradient"
          thin={true}
          css={`
            margin-right: 5px;
          `}
          onClick={() => {
            isConnected && setModalOpen(!modalOpen)
          }}
        >
          {whaleBalance} BANK
        </Button>
      )}
      <Button
        theme={isConnected ? 'green' : 'pink'}
        thin={true}
        uppercase={false}
        disabled={isConnected}
        onClick={() => {
          !isConnected ? setConnectClick(true) : null
        }}
      >
        {isConnected
          ? shortenAddress(walletWeb3ReactContext.account)
          : 'Connect a Wallet'}
      </Button>
      <TokenModal ref={modalRef} active={modalOpen}>
        <TokenModal.TitleRow>
          <TokenModal.Title>BANK Account</TokenModal.Title>
          <TokenModal.Close
            onClick={() => setModalOpen(!modalOpen)}
            src="/images/icon-close.svg"
            height="25px"
            width="25px"
            alt="close modal"
          />
        </TokenModal.TitleRow>
        <TokenModal.BigRow>
          <img
            src="/images/token-3d.png"
            height="90px"
            width="90px"
            alt="3d token icon"
          />
          <strong>{whaleBalance}</strong>
        </TokenModal.BigRow>
        <TokenModal.BalanceRow>
          <TokenModal.StatLine>
            Balance: <span>{commaBalance} BANK</span>
          </TokenModal.StatLine>
          <TokenModal.StatLine>
            Unclaimed: <span>{commaClaim} BANK</span>
          </TokenModal.StatLine>
        </TokenModal.BalanceRow>
        <TokenModal.SupplyRow>
          <TokenModal.StatLine>
            Total supply: <span>{commaSupply} BANK</span>
          </TokenModal.StatLine>
        </TokenModal.SupplyRow>
      </TokenModal>
    </React.Fragment>
  )
}

export default WalletButton
