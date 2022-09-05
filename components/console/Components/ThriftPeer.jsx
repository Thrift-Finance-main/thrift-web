import { useTranslation } from 'next-export-i18n'
import React from 'react'

const ThriftPeer = ({ darkM }) => {
  const { t } = useTranslation()
  const content = t('thrift_peer')

  return (
    <>
      <div className="my-20">
        <div className=" p2p bg-primary peer p-4 ">
          <div className="w-full mt-[-110px] dangle">
            <img
              src={
                'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658793063/data_management_9_1_2_uw28j8.svg'
              }
              width="235px"
            />
          </div>
          <div className="peerText">
            <h3 className="!text-[2em] mt-[18px] mb-[37px]">
              {content.heading}
            </h3>
            <p>{content.info} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThriftPeer
