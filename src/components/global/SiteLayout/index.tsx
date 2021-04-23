import * as React from 'react'
import { normalize } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

import Head from '../Head'
import Header from '../Header'
import Footer from '../Footer'

// TODO add fonts

const styles = css`
  ${normalize()}
  * {
    box-sizing: border-box;
  }
`

const GlobalStyle = createGlobalStyle`
  ${styles}
`
const SiteLayout = ({ pageMeta, children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Head {...pageMeta} />
    <Header />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
)

export default SiteLayout
