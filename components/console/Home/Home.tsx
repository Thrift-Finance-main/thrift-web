import React, { useEffect, useRef } from 'react'

import Head from 'next/head'
import Homepage from './Homepage';

export const Home: React.FC = (props) => {

  useEffect(() => {
  }, [])

  return (
    <div>
      <Head>
        <title>Thrift Finance</title>
      </Head>

      <div className='dark-here'>

       <Homepage />

      </div>
    </div>
  )
}
