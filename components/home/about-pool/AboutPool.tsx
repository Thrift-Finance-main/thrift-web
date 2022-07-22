import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper core and required modules
import SwiperCore, { EffectCreative, Pagination, Navigation } from 'swiper'

import { Slide } from './Slide'
import { Delegation } from './Delegation'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import React from 'react'

// install Swiper modules
SwiperCore.use([EffectCreative, Pagination, Navigation])

export const AboutPool: React.FC = () => {
  return (
    <section id="about" className="about py-36 bg-white">
      <div className="container mx-auto pl-6 sm:pl-0 pr-6 sm:pr-0 ">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img alt="feature" className="object-cover object-center h-full w-full"
                   src="/appDevice.png"/>
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div
                  className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                       className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-800 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                  <p className="leading-relaxed text-gray-900 text-base">Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div><div className="flex flex-col mb-10 lg:items-start items-center">
                <div
                  className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                       className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-800 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                  <p className="leading-relaxed text-gray-900 text-base">Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div><div className="flex flex-col mb-10 lg:items-start items-center">
                <div
                  className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                       className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-800 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                  <p className="leading-relaxed text-gray-900 text-base">Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div><div className="flex flex-col mb-10 lg:items-start items-center">
                <div
                  className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                       className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-800 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                  <p className="leading-relaxed text-gray-900 text-base">Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </section>
  )
}
