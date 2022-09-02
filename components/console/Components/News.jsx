import Image from 'next/image'
import React, { useState, useEffect } from 'react'
// import news_json from '../../../public/data/Hero/english/news.json';

const Partners = ({ darkM, language }) => {
  const [news_json, setNews_json] = useState(null)

  useEffect(() => {
    fetch(`/data/Hero/${language}/news.json`)
      .then((res) => res.json())
      .then((data) => setNews_json(data))
      .catch((err) => console.log(err))
  }, [language])
  return (
    <>
      <div className="my-5 partner max-w-6xl mx-auto">
        <h2 className="!font-normal dark-here font-header text-4xl !mb-8">
          {' '}
          {news_json?.heading}{' '}
        </h2>

        {/* <img className='part' src = {'https://res.cloudinary.com/dhkccnvyn/image/upload/v4658828293/Logos_hm2qbw.svg'}
                width='700%' height='100%'/> */}

        <div className="images flex justify-around">
          <a href="https://u.today/cardano-network-expands-further-with-djed-becoming-official-stablecoin-of-iohks-realfi-start-up">
            <img
              className="hover:opacity-80"
              src={`/news/${darkM ? 'dark' : 'light'}/1.png`}
              alt="1"
              width="100%"
            />
          </a>
          <a href="https://cardanofeed.com/thrift-partners-with-coti-to-integrate-djed-stablecoin-to-its-realfi-wallet-107350.html">
            <img
              className="hover:opacity-80"
              src={`/news/${darkM ? 'dark' : 'light'}/2.png`}
              alt="2"
              width="100%"
            />
          </a>
          <a href="https://cardanofeed.com/thrift-partners-with-coti-to-integrate-djed-stablecoin-to-its-realfi-wallet-107350.html">
            <img
              className="hover:opacity-80"
              src={`/news/${darkM ? 'dark' : 'light'}/3.png`}
              alt="3"
              width="100%"
            />
          </a>
          <a href="https://cardanofeed.com/thrift-partners-with-coti-to-integrate-djed-stablecoin-to-its-realfi-wallet-107350.html">
            <img
              className="hover:opacity-80"
              src={`/news/${darkM ? 'dark' : 'light'}/4.png`}
              alt="4"
              width="100%"
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default Partners
