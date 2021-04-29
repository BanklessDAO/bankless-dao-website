import type { AppProps } from 'next/app'
import SiteLayout from '../components/global/SiteLayout'
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
import { ethers } from 'ethers'
import { DefaultProviderName } from 'src/constants'
const defaultPageMeta = {
  title: 'Bankless Community',
}

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

const Web3ReactProviderDefault = createWeb3ReactRoot(DefaultProviderName)

const BanklessApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProviderDefault getLibrary={getLibrary}>
        <SiteLayout pageMeta={pageProps.pageMeta || { defaultPageMeta }}>
          <Component {...pageProps} />
        </SiteLayout>
      </Web3ReactProviderDefault>
    </Web3ReactProvider>
  )
}

export default BanklessApp
