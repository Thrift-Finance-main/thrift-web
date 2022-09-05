import React, { useState, useRef, useEffect } from 'react'
import Transition from '../shared/Transition'
import { useSelector } from 'react-redux'
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from 'next-export-i18n'

function How({ darkM, language }) {
  const { t } = useTranslation()
  const content = t('how')

  const storeState = useSelector((state) => state.reduxData)
  const [darken, _] = useState(storeState.config.darkMode)

  const [tab, setTab] = useState(1)

  const tabs = useRef(null)

  const heightFix = () => {
    if (tabs.current.children[tab - 1]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section
      id="features"
      className={
        !darkM
          ? "relative bg-[url('/bg/Rectangle.png')] bg-no-repeat bg-cover"
          : 'relative'
      }
    >
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute dark-here inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div> */}
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 font-header ">{content.heading}</h1>
            <p className="text-gray-600 black-text">{content.info}</p>
          </div>

          {/* Top image */}
          <div className="pb-12 md:pb-16">
            {/* <Image src={'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658349986/Group_18_xkayht.svg'} width="1104" height="325" alt="Features top" /> */}
            <img
              src={
                'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658770646/Illustration_xpjge3.svg'
              }
              width="1104"
              height="325"
              alt="Features top"
            />
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6 ">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 font-header  left">
                  {content.list.heading}
                </h3>
                <p className="left text-gray-600 black-text">
                  {content.list.info}
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {content.list.items.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={
                        'flex black-text items-center  text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ' +
                        (tab === index + 1
                          ? 'bg-gray-200 shadow-md border-gray-200 hover:shadow-lg'
                          : 'other-here bg-gray-200 border-transparent' +
                            (darkM ? null : ' !bg-white'))
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setTab(index + 1)
                      }}
                    >
                      <div
                        className={
                          ' ' +
                          (tab === index + 1
                            ? 'text-gray-900'
                            : darkM
                            ? 'text-gray-200'
                            : 'text-gray-900')
                        }
                      >
                        <div className="font-bold leading-snug text-left tracking-tight mb-1">
                          {item.heading}
                        </div>
                        <div className="text-left">{item.info}</div>
                      </div>
                      <div className="flex justify-center items-center w-8 h-8  bg-white rounded-full shadow shrink-0 ml-3">
                        <svg
                          color="gray"
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d={item.path} />
                        </svg>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="lg:max-w-none mx-auto rounded"
                      src={
                        darkM
                          ? 'https://res.cloudinary.com/thrift-labs-team/image/upload/v1659087983/Thrift%20images/Base_2_fhzh6m.svg'
                          : '/base/Base2.png'
                      }
                      width="500"
                      height="375"
                      alt="Features bg"
                    />
                    {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement01} width="500" height="147" alt="Element 01" style={{ top: '22%' }} /> */}
                    {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500" src={FeaturesElement02} width="500" height="158" alt="Element 02" style={{ top: '39%' }} />
                    <Image className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000" src={FeaturesElement03} width="500" height="167" alt="Element 03" style={{ top: '77%' }} /> */}
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="lg:max-w-none mx-auto rounded"
                      src={
                        darkM
                          ? 'https://res.cloudinary.com/thrift-labs-team/image/upload/v1659019350/Thrift%20images/Base_pmgv7g.svg'
                          : '/base/Base1.png'
                      }
                      width="500"
                      height="375"
                      alt="Features bg"
                    />
                    {/* <Image className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000" src={FeaturesElement03} width="500" height="167" alt="Element 03" style={{ top: '18%' }} />
                    // <Image className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500" src={FeaturesElement02} width="500" height="158" alt="Element 02" style={{ top: '40%' }} /> */}
                    {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={'https://res.cloudinary.com/thrift-labs-team/image/upload/v1659019778/Thrift%20images/Base_1_qcyybc.svg'} width="500" height="147" alt="Element 01" style={{ top: '79%' }} /> */}
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="lg:max-w-none mx-auto rounded"
                      src={
                        darkM
                          ? 'https://res.cloudinary.com/thrift-labs-team/image/upload/v1659019778/Thrift%20images/Base_1_qcyybc.svg'
                          : '/base/Base3.png'
                      }
                      width="500"
                      height="375"
                      alt="Features bg"
                    />
                    {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement01} width="500" height="147" alt="Element 01" style={{ top: '22%' }} />
                    <Image className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500" src={FeaturesElement02} width="500" height="158" alt="Element 02" style={{ top: '39%' }} />
                    <Image className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000" src={FeaturesElement03} width="500" height="167" alt="Element 03" style={{ top: '77%' }} /> */}
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default How
