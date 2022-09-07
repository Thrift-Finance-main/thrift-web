import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { useTranslation } from 'next-export-i18n'

function TheFooter({ darkM, language }) {
  const { t } = useTranslation()
  const content = t('footer')
  return (
    <footer>
      <div className="max-w-6xl text-left dark-here mx-auto px-16">
        {/* Top area: Blocks */}
        <div className="md:flex justify-between mb-5 footer-foot">
          {/* <div className="grid sm:grid-cols-12 gap-10 py-8 md:py-12 border-t border-gray-200"> */}
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3 mr-auto">
            <div className="mb-2">
              {/* Logo */}
              <div to="/" className="inline-block" aria-label="Cruip">
                <img
                  src={
                    darkM === true
                      ? '/bg/Logo_Thrift Finance_white.png'
                      : '/bg/Logo_Thrift Finance.png'
                  }
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            {/* <div className="text-sm text-gray-600">
              <div to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</div> · <div to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</div>
            </div> */}
          </div>

          {/* 2nd block */}
          <div className="flex justify-between md:gap-[150px]">
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 mr-0">
              <h6 className="text-gray-800 font-medium mb-2 dark-here">
                Quick links{' '}
              </h6>
              <ul className="text-sm">
                {content.quick_links.map((item, index) => (
                  <li key={index} className="mb-2">
                    <div
                      to="#"
                      className="text-gray-300 hover:text-gray-900 shade transition duration-150 ease-in-out"
                    >
                      <a
                        className="text-gray-400"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.title}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 mr-0">
              <h6 className="text-gray-800 font-medium mb-2 dark-here">
                About
              </h6>
              <ul className="text-sm">
                {content.about_links.map((item, index) => (
                  <li key={index} className="mb-2">
                    <a target="_blank" href={`${item.link.toLowerCase()}`}>
                      <div
                        to="#"
                        className="text-gray-400 hover:text-gray-900 shade transition duration-150 ease-in-out cursor-pointer dark-here"
                      >
                        {item.title}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom area: Copyright */}
        <div
          className={'flex-bottom black-text py-8'}
          style={{ alignItems: 'center' }}
        >
          <div className="alrights">
            <p>© 2021 Thrift Labs. </p>
            <p> All rights reserved.</p>
          </div>
          {/* 
          <div>
            <p>Privacy Policy · Terms</p>
          </div> */}

          <div>
            <ul className="flex white-text gap-4 justifyContent-right">
              {content.social_links.map((item, index) => (
                <li className="cursor-pointer" key={index}>
                  <a href={item.link}>
                    <img
                      src={`/bottom_icon/${darkM ? 'dark' : 'light'}/${
                        item.icon
                      }.png`}
                      alt="icon"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default TheFooter
