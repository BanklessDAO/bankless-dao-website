import Web3Modal from 'web3modal'
import React, { useState, useEffect, useRef } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import NextLink from 'next/link'

import Button from 'src/components/parts/Button'
import ENSName from 'src/components/parts/ENSName'
import { useWalletWeb3React } from 'src/hooks'
import { useDetectOutsideClick } from 'src/hooks/useDetectOutsideClick'
import {
  walletConnect,
  injected,
  shortenAddress,
  obscureAddress,
  trimCurrencyForWhales,
} from 'src/utils'
import { useTokenBalance } from 'src/hooks/token/useTokenBalance'
import { useUserClaimData } from 'src/hooks/useClaim'

import { TokenModal } from './ConnectWalletModal/style'
import { INFURA_ID } from 'src/constants'

let web3Modal: Web3Modal

const WalletButton = () => {
  const [web3Provider, setWeb3Provider] = useState()
  const walletWeb3ReactContext = useWalletWeb3React()
  const isConnected = walletWeb3ReactContext.active
  const walletAddress = walletWeb3ReactContext.account
  const [connectClick, setConnectClick] = useState(false)
  const [addressHidden, setAddressHidden] = useState(true)
  const [copiedAddress, setCopiedAddress] = useState(false)
  const [tokenEffect, setTokenEffect] = useState(false)
  const [unclaimedTokens, setUnclaimedTokens] = useState(false)

  const modalRef = useRef(null)
  const [modalOpen, setModalOpen] = useDetectOutsideClick(modalRef, false)

  useEffect(() => {
    if (connectClick) {
      setModalOpen(false)
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
          setWeb3Provider(provider)
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
  claimData.forEach((individualClaimData) => {
    if (individualClaimData && !(individualClaimData as any).claimed)
      setUnclaimedTokens(true)
  })

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
          ? <ENSName
              provider={web3Provider}
              address={walletAddress}
              fallback={shortenAddress(walletAddress)}
            />
          : 'Connect a Wallet'}
      </Button>
      {isConnected && (
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
          <TokenModal.AddressRow>
            <TokenModal.Identicon src="/images/identicon.png" alt="identicon" />
            <TokenModal.AddressName>
              {addressHidden
                ? obscureAddress(walletWeb3ReactContext.account)
                : walletWeb3ReactContext.account}
            </TokenModal.AddressName>
            <TokenModal.ToggleAddress
              onClick={() => setAddressHidden(!addressHidden)}
              src={
                addressHidden
                  ? '/images/icon-eye-hide.png'
                  : '/images/icon-eye-show.png'
              }
              alt={addressHidden ? 'Show Address' : 'Hide Address'}
            />
          </TokenModal.AddressRow>
          <TokenModal.WalletActionsRow>
            <TokenModal.WalletAction
              onClick={() => {
                navigator.clipboard.writeText(walletWeb3ReactContext.account)
                setCopiedAddress(true)
                setTimeout(() => setCopiedAddress(false), 2000)
              }}
            >
              <img
                src="/images/icon-copy.svg"
                height="15px"
                width="16px"
                alt="Copy Address"
              />
              {copiedAddress ? `Copied!` : `Copy Address`}
            </TokenModal.WalletAction>
            <NextLink
              href={`https://etherscan.io/address/${walletWeb3ReactContext.account}`}
            >
              <TokenModal.WalletAction>
                <img
                  src="/images/icon-export.svg"
                  height="15px"
                  width="15px"
                  alt="Etherscan"
                />
                Etherscan
              </TokenModal.WalletAction>
            </NextLink>
            <TokenModal.WalletAction onClick={() => setConnectClick(true)}>
              <img
                src="/images/icon-wallet.svg"
                height="15px"
                width="15px"
                alt="Change Wallet"
              />
              Change Wallet
            </TokenModal.WalletAction>
          </TokenModal.WalletActionsRow>
          <TokenModal.BigRow>
            <div>Bankless DAO / $BANK</div>
            <TokenModal.BigBank>
              <strong>{whaleBalance}</strong>
              <img
                onMouseEnter={() => {
                  setTokenEffect(true)
                }}
                onMouseLeave={() => {
                  setTokenEffect(false)
                }}
                src={
                  tokenEffect
                    ? '/images/token-3d-animated.gif'
                    : '/images/token-3d.png'
                }
                height="85px"
                width="85px"
                alt="3d token icon"
              />
            </TokenModal.BigBank>
            <TokenModal.BankBalance>
              {commaBalance} <strong>BANK</strong>
            </TokenModal.BankBalance>
            {unclaimedTokens ? (
              <TokenModal.UnclaimedNotice>
                <img
                  src="/images/icon-warning.svg"
                  height="15px"
                  width="15px"
                  alt="warning"
                />
                <span>Unclaimed Tokens Now Available</span>
                <img
                  src="/images/icon-warning.svg"
                  height="15px"
                  width="15px"
                  alt="warning"
                />
              </TokenModal.UnclaimedNotice>
            ) : null}
          </TokenModal.BigRow>
          <TokenModal.BottomRow>Add BANK to MetaMask</TokenModal.BottomRow>
        </TokenModal>
      )}
    </React.Fragment>
  )
}

export default WalletButton
