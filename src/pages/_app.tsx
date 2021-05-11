import type { AppProps } from 'next/app'
import SiteLayout from '../components/global/SiteLayout'
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
import { ethers } from 'ethers'
import { DefaultProviderName } from 'src/constants'
import { isProduction } from 'src/utils'

// yarn dev issue seems due to web3react provider trying to run on the server due to next's SSR
// typeof window !== 'undefined' checks if code is on the browser or server
// ternary checks to see if on browser or server and returns null if on server
// TODO instead of disabling SSR locally, create a flow that serves a basic static site
// and hydrates Web3 client side; otherwise we get stuck with the hydration issue `Warning: Expected server HTML to contain a matching...`
const useSSR = isProduction() || typeof window !== 'undefined'

const defaultPageMeta = {
  title: 'Bankless Community',
}

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

const Web3ReactProviderDefault =
  useSSR && createWeb3ReactRoot(DefaultProviderName)

const BanklessApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {useSSR ? (
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
