import React, { useEffect, useRef, useState } from 'react'

import Head from 'next/head'
import { useSelector } from 'react-redux'
interface IProps {
  navigateTo(route: string): void;
}

export const Layout: React.FC<IProps> = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  // @ts-ignore
  const storeState = useSelector((state) => state.reduxData);
  const { currentAccount } = storeState;

  useEffect(() => {
  }, [])

  return (
    <div>
      <Head>
        <title>Thrift</title>
      </Head>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black dark:text-white">
        <div >
          {props.children}
        </div>
      </div>
    </div>
  )
}
