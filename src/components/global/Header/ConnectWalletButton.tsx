import Web3Modal from 'web3modal'
import React, { useState, useEffect, useRef } from 'react'

import Button from 'src/components/parts/Button'
import { useWalletWeb3React } from 'src/hooks'
import { useDetectOutsideClick } from 'src/hooks/useDetectOutsideClick'
import { injected, shortenAddress, trimCurrencyForWhales } from 'src/utils'

import { TokenModal } from './ConnectWalletModal/style'

const WalletButton = () => {
  const walletWeb3ReactContext = useWalletWeb3React()
  const isConnected = walletWeb3ReactContext.active
  const [connectClick, setConnectClick] = useState(false)

  const modalRef = useRef(null)
  const [modalOpen, setModalOpen] = useDetectOutsideClick(modalRef, false)

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

  // useEffect(() => {
  //   console.log(modalOpen)
  // }, [modalOpen])
  const rawBalance = 1231312300
  const commaBalance = Number(rawBalance).toLocaleString('en')
  const whaleBalance = trimCurrencyForWhales(rawBalance)

  return (
    <React.Fragment>
      <Button
        theme={isConnected ? 'green' : 'pink'}
        thin={true}
        uppercase={false}
        onClick={() => {
          isConnected ? setModalOpen(!modalOpen) : setConnectClick(true)
        }}
      >
        {isConnected
          ? shortenAddress(walletWeb3ReactContext.account)
          : 'Connect a Wallet'}
      </Button>
      <TokenModal ref={modalRef} active={modalOpen}>
        <TokenModal.TitleRow>
          <TokenModal.Title>Your BANK Breakdown</TokenModal.Title>
          <TokenModal.Close
            onClick={() => setModalOpen(!modalOpen)}
            src="/images/icon-close.svg"
            height="30px"
            width="30px"
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
            Unclaimed: <span>0 BANK</span>
          </TokenModal.StatLine>
        </TokenModal.BalanceRow>
        <TokenModal.SupplyRow>
          <TokenModal.StatLine>
            Total supply: <span>1B BANK</span>
          </TokenModal.StatLine>
        </TokenModal.SupplyRow>
      </TokenModal>
    </React.Fragment>
  )
}

export default WalletButton
