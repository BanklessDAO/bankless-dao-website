import Web3Modal from 'web3modal'
import React, { useState, useEffect, useRef } from 'react'

import Button from 'src/components/parts/Button'
import { useWalletWeb3React } from 'src/hooks'
import { useDetectOutsideClick } from 'src/hooks/useDetectOutsideClick'
import { injected, shortenAddress, trimCurrencyForWhales } from 'src/utils'

import { TokenModal } from './ConnectWalletModal/style'
import { useTokenBalance } from 'src/hooks/token/useTokenBalance'
import { useUserClaimData } from 'src/hooks/useClaim'
import { useTokenSupply } from 'src/hooks/token/useTokenSupply'

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

  const rawBalance = useTokenBalance(walletWeb3ReactContext.account) ?? 0
  const commaBalance = Number(rawBalance).toLocaleString('en')
  const whaleBalance = trimCurrencyForWhales(rawBalance)

  const rawClaim = useUserClaimData(walletWeb3ReactContext.account ?? '')
  const commaClaim = rawClaim
    ? Number(Number(rawClaim.amount) / 10 ** 18).toLocaleString('en')
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
          isConnected ? null : setConnectClick(true)
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
