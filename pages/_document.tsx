/* eslint-disable @next/next/no-title-in-document-head */
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

// @ts-ignore
class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="canonical" href="https://thrift.finance/" />
          <link rel="shortlink" href="https://thrift.finance/" />

          <meta name="robots" content="max-image-preview:large" />

          <link rel="icon" href="/favicon.png" sizes="32x32" />
          <link
            rel="icon"
            type="image/png"
            href="/favicon.png"
            sizes="192x192"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />

          <meta name="msapplication-TileImage" content="/favicon.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap;ver=5.8.2"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
