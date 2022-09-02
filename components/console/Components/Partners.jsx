import Image from 'next/image'
import React, { useState, useEffect } from 'react'
// import partners_json from '../../../public/data/Hero/english/partners.json';

const Partners = ({ darkM, language }) => {
  const [partners_json, setPartners_json] = useState(null)

  useEffect(() => {
    fetch(`/data/Hero/${language}/partners.json`)
      .then((res) => res.json())
      .then((data) => setPartners_json(data))
      .catch((err) => console.log(err))
  }, [language])
  return (
    <>
      <div className="my-5 partner max-w-6xl mx-auto border-t border-gray-700">
        <h2 className="!font-normal dark-here font-header text-4xl !mb-8">
          {' '}
          {partners_json?.heading}{' '}
        </h2>

        {/* <img className='part' src = {'https://res.cloudinary.com/dhkccnvyn/image/upload/v4658828293/Logos_hm2qbw.svg'}
                width='700%' height='100%'/> */}

        <div className="images flex justify-around">
          <a href="https://ariob.io/startups/">
            <img
              className="hover:opacity-80"
              src={`/partner/${darkM ? 'dark' : 'light'}/1.png`}
              alt="1"
              width="100%"
            />
          </a>
          <a href="https://coti.io/">
            <img
              className="hover:opacity-80"
              src={`/partner/${darkM ? 'dark' : 'light'}/2.png`}
              alt="2"
              width="100%"
            />
          </a>
          <a href="https://mlabs.city/">
            <img
              className="hover:opacity-80"
              src={`/partner/${darkM ? 'dark' : 'light'}/3.png`}
              alt="3"
              width="100%"
            />
          </a>
          <a href="https://cardano.ideascale.com/">
            <img
              className="hover:opacity-80"
              src={`/partner/${darkM ? 'dark' : 'light'}/4.png`}
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
