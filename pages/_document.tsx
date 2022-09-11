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
          <meta property="og:url" content="thrift.finance" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={"/favicon.ico"} />
          <meta name="twitter:card" content="summary" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

          <link rel="icon" href="/favicon.ico" sizes="32x32" />
          <link
            rel="icon"
            type="image/png"
            href="/favicon.ico"
            sizes="192x192"
          />
          <link rel="shortcut icon" href="favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />

          <meta name="msapplication-TileImage" content="/favicon.ico" />

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
          <title>Thrift Finance</title>
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
