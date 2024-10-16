import { useTranslation } from 'next-export-i18n'
import React from 'react'
const Partners = ({ darkM, language }) => {
  const { t } = useTranslation()
  const content = t('partners')
  return (
    <>
      <div className="my-5 partner max-w-6xl mx-auto border-t border-gray-700">
        <h2 className="!font-normal dark-here font-header text-4xl !mb-8">
          {' '}
          {content.heading}{' '}
        </h2>

        {/* <img className='part' src = {'https://res.cloudinary.com/dhkccnvyn/image/upload/v4658828293/Logos_hm2qbw.svg'}
                width='700%' height='100%'/> */}

        <div className="images flex gap-[10px]">
          <a
            className="w-full"
            target="_blank"
            href="https://ariob.io/startups/"
            rel="noreferrer"
          >
            <img
              className="hover:opacity-80"
              src={`/partner/${darkM ? 'dark' : 'light'}/1.png`}
              alt="1"
              width="100%"
            />
          </a>
          <a
            className="w-full"
            target="_blank"
            href="https://coti.io/"
            rel="noreferrer"
          >
            <img
              className="hover:opacity-80"
              src={`/partner/${darkM ? 'dark' : 'light'}/2.png`}
              alt="2"
              width="100%"
            />
          </a>
          <a
            className="w-full"
            target="_blank"
            href="https://mlabs.city/"
            rel="noreferrer"
          >
            <img
              className="hover:opacity-80"
              src={`/partner/${darkM ? 'dark' : 'light'}/3.png`}
              alt="3"
              width="100%"
            />
          </a>
          <a
            className="w-full"
            target="_blank"
            href="https://cardano.ideascale.com/"
            rel="noreferrer"
          >
            <img
              className="hover:opacity-80"
              src={`/partner/${darkM ? 'dark' : 'light'}/4.png`}
              alt="4"
              width="100%"
            />
          </a>
        </div>
        <a
          style={{ width: 'calc(25% - 7.5px)' }}
          className="block mt-6"
          target="_blank"
          href="https://www.microsoft.com/en-us/startups?rtc=1"
          rel="noreferrer"
        >
          <img
            className="hover:opacity-80"
            src={`/partner/${darkM ? 'dark' : 'light'}/microsoft.png`}
            alt="1"
            width="100%"
          />
        </a>
      </div>
    </>
  )
}

export default Partners
