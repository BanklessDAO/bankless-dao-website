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

// issue seems due to web3react provider trying to run on the server due to next's SSR
// typeof window !== 'undefined' checks if code is on the browser or server
// ternary checks to see if on browser or server and returns null if on server

const Web3ReactProviderDefault =
  typeof window !== 'undefined' && createWeb3ReactRoot(DefaultProviderName)

const BanklessApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {typeof window !== 'undefined' ? (
        <Web3ReactProviderDefault getLibrary={getLibrary}>
          <SiteLayout pageMeta={pageProps.pageMeta || { defaultPageMeta }}>
            <Component {...pageProps} />
          </SiteLayout>
        </Web3ReactProviderDefault>
      ) : null}
    </Web3ReactProvider>
  )
}

export default BanklessApp
