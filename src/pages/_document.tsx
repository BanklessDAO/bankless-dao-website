import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

class BanklessDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const stylesheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            stylesheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {stylesheet.getStyleElement()}
          </React.Fragment>
        ),
      }
    } finally {
      stylesheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" type="text/css" href="/fonts/fonts.css" />
        </Head>
        <body>
          <noscript>Oops, you need Javascript to run this site.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default BanklessDocument
