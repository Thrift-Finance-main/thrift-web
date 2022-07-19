import React, { useEffect, useRef } from 'react'

import { DelegateButton } from '@features/wallet'
import Head from 'next/head'
import Homepage from './Homepage/Homepage';

export const Home: React.FC = (props) => {

  useEffect(() => {
  }, [])

  return (
    <div>
      <Head>
        <title>Thrift Finance</title>
      </Head>
      
      <Homepage/>

    </div>
  )
}
