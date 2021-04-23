import type { AppProps } from 'next/app'
import SiteLayout from '../components/global/SiteLayout'

const defaultPageMeta = {
  title: 'Bankless Community',
}

const BanklessApp = ({ Component, pageProps }: AppProps) => (
  <SiteLayout pageMeta={pageProps.pageMeta || { defaultPageMeta }}>
    <Component {...pageProps} />
  </SiteLayout>
)

export default BanklessApp
