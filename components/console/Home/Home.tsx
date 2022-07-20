import React, { useEffect, useRef } from 'react'

import { DelegateButton } from '@features/wallet'
import Head from 'next/head'
import Homepage from './Homepage';
import { Routes , Route , BrowserRouter as Router  } from 'react-router-dom';

export const Home: React.FC = (props) => {

  useEffect(() => {
  }, [])

  return (
    <div>
      <Head>
        <title>Thrift Finance</title>
      </Head>

      <div>
       
       <Homepage />
       
      </div>
    </div>
  )
}
