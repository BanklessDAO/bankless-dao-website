import * as React from 'react'
import { normalize } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

import Head from '../Head'
import Header from '../Header'

// TODO add fonts

const styles = css`
  ${normalize()}
`

const GlobalStyle = createGlobalStyle`
  ${styles}
`
const SiteLayout = ({ pageMeta, children }) => (
  <main>
    <GlobalStyle />
    <Head {...pageMeta} />
    <Header />
    {children}
  </main>
)

export default SiteLayout
