import * as React from 'react'
import { normalize } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

import { fontStyles } from 'src/theme'

import Head from '../Head'
import Header from '../Header'
import Footer from '../Footer'

const styles = css`
  ${normalize()}

  * {
    box-sizing: border-box;
    font-family: 'ClearSans', Helvetica, sans-serif;
    ${fontStyles.P};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol {
    margin: 0;
    padding: 0;
  }
`

const GlobalStyle = createGlobalStyle`
  ${styles}
`

const SiteLayout = ({ pageMeta, children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Head {...pageMeta} />
    <Header currentPage={pageMeta.url} />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
)

export default SiteLayout
