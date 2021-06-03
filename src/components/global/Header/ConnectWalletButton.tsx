import Web3Modal from 'web3modal'
import React, { useState, useEffect, useRef } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

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
import { INFURA_ID, TOKEN_ADDRESS } from 'src/constants'

let web3Modal: Web3Modal

const WalletButton = () => {
  const [web3Provider, setWeb3Provider] = useState()
  const walletWeb3ReactContext = useWalletWeb3React()
  const isConnected = walletWeb3ReactContext.active
  const walletAddress = walletWeb3ReactContext.account
  const [connectClick, setConnectClick] = useState(false)
  const [addressHidden, setAddressHidden] = useState(true)
  const [copiedAddress, setCopiedAddress] = useState(false)
  const [animateToken, setAnimateToken] = useState(false)
  const [unclaimedTokens, setUnclaimedTokens] = useState(false)

  const router = useRouter()
  const modalRef = useRef(null)
  const [modalOpen, setModalOpen] = useDetectOutsideClick(modalRef, false)

  useEffect(() => {
    if (connectClick) {
      setModalOpen(false)
      if (!web3Modal) {
        web3Modal = new Web3Modal({
          network: 'mainnet',
          cacheProvider: true,
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
      } else {
        web3Modal.clearCachedProvider()
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

  const tokenBase64 =
    'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOiMyMzFmMjA7fS5jbHMtMntzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6Ni41M3B4O30uY2xzLTN7ZmlsbDojZmZmO30uY2xzLTR7ZmlsbDojZWQxYzI0O308L3N0eWxlPjwvZGVmcz48cmVjdCBjbGFzcz0iY2xzLTEiIHk9Ii0xLjM1IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMS4zNSIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iMTAxLjI3IiBjeT0iMTAwIiByPSI4Ni43NyIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTY5LjI1LDQ4LjczaDMyLjIzYTkzLjQxLDkzLjQxLDAsMCwxLDE0LjI4LjgsMjAuODgsMjAuODgsMCwwLDEsOC40MSwzLjMzLDIwLjY0LDIwLjY0LDAsMCwxLDYuMTksNi43NEExOC4yNCwxOC4yNCwwLDAsMSwxMzIuODQsNjlhMTkuMDksMTkuMDksMCwwLDEtMTEuMzMsMTcuNDksMjEuMjIsMjEuMjIsMCwwLDEsMTEuMzMsNy4zMiwxOS40MywxOS40MywwLDAsMSw0LDEyLjE2LDI0LDI0LDAsMCwxLTIuNTYsMTAuNywyMS41MiwyMS41MiwwLDAsMS03LDguMywyMy4yLDIzLjIsMCwwLDEtMTAuOTIsMy44M3EtNC4wOC40My0xOS42NC41NUg2OS4yNVpNODUuNTMsNjIuMTZWODAuOEg5Ni4ycTkuNTIsMCwxMS44My0uMjdhMTAuNzEsMTAuNzEsMCwwLDAsNi41Ny0yLjg5LDguNSw4LjUsMCwwLDAsMi40LTYuMyw4Ljg0LDguODQsMCwwLDAtMi4wNy02LjA4LDkuMzIsOS4zMiwwLDAsMC02LjEzLTIuODNxLTIuNDItLjI3LTEzLjkyLS4yN1ptMCwzMi4wN3YyMS41NkgxMDAuNnE4LjgxLDAsMTEuMTctLjVhMTAuMSwxMC4xLDAsMCwwLDUuOTEtMy4yMSw5Ljg4LDkuODgsMCwwLDAsMi4yOS02Ljg1LDEwLjUzLDEwLjUzLDAsMCwwLTEuNzYtNi4xNiwxMCwxMCwwLDAsMC01LjA5LTMuNjlxLTMuMzMtMS4xNi0xNC40NC0xLjE1WiIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iNjkuMjUiIHk9IjEzOC40NyIgd2lkdGg9IjY3LjU1IiBoZWlnaHQ9IjEzLjU5Ii8+PC9zdmc+'
  function addToMetaMask() {
    web3Modal.connect().then((provider) => {
      if (!provider.isMetaMask) {
        alert('Please install MetaMask and try again!')
      } else {
        provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: TOKEN_ADDRESS[1],
              decimals: 18,
              symbol: 'BANK',
              image: tokenBase64,
            },
          },
        })
      }
    })
  }

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
        <TokenModal
          ref={modalRef}
          active={modalOpen}
          claimNotice={unclaimedTokens}
        >
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
            <TokenModal.WalletIcon>
              <Jazzicon
                diameter={25}
                seed={jsNumberForAddress(walletWeb3ReactContext.account)}
              />
            </TokenModal.WalletIcon>
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
                  alt="Open in Etherscan"
                />
                Etherscan
              </TokenModal.WalletAction>
            </NextLink>
            <TokenModal.WalletAction
              onClick={() => walletWeb3ReactContext.deactivate()}
            >
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
            <TokenModal.BankTitle>Bankless DAO / $BANK</TokenModal.BankTitle>
            <TokenModal.BigBank>
              <strong>{whaleBalance}</strong>
              <img
                onMouseEnter={() => {
                  setAnimateToken(true)
                }}
                onMouseLeave={() => {
                  setAnimateToken(false)
                }}
                src={
                  animateToken
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
              <TokenModal.UnclaimedNotice
                onClick={() => {
                  setModalOpen(false)
                  router.push('/claim')
                }}
              >
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
          <TokenModal.ToolRow>
            <TokenModal.ToolItem onClick={() => addToMetaMask()}>
              Add BANK to MetaMask
            </TokenModal.ToolItem>
          </TokenModal.ToolRow>
        </TokenModal>
      )}
    </React.Fragment>
  )
}

export default WalletButton
