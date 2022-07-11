import React, { useEffect, useRef } from 'react'

import { DelegateButton } from '@features/wallet'
import Head from 'next/head'

export const Home: React.FC = (props) => {

  useEffect(() => {
  }, [])

  return (
    <div>
      <Head>
        <title>Thrift Finance</title>
      </Head>

      <div>
        <h1 className="text-4xl sm:text-5xl text-black font-extrabold tracking-tight">
          Hello Thrift
        </h1>
      </div>
    </div>
  )
}
