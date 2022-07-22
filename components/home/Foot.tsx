import Link from 'next/link'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import Accordion from '../utils/Accordion';

export const Foot: React.FC = () => {

  return (
    <section id="news" className=" mx-auto bg-white">
      <section className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

            {/* Social icons illustrations */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-20 pointer-events-none" aria-hidden="true">
              <svg width="1360" height="365" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <filter x="-50%" y="-25%" width="200%" height="200%" filterUnits="objectBoundingBox" id="scill-sh">
                    <feMorphology radius="2.5" in="SourceAlpha" result="shadowSpreadOuter1" />
                    <feOffset dy="20" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="12.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.0980392157 0 0 0 0 0.0980392157 0 0 0 0 0.0980392157 0 0 0 0.16 0" in="shadowBlurOuter1" />
                  </filter>
                  <circle id="scill-bc" cx="40" cy="40" r="40" />
                  <circle id="scill-sc" cx="32" cy="32" r="32" />
                  <circle id="scill-xsc" cx="28" cy="28" r="28" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g transform="rotate(-19 110.5 -381.291)">
                    <use fill="#000" filter="url(#scill-sh)" xlinkHref="#scill-bc" />
                    <use fill="#1977F2" xlinkHref="#scill-bc" />
                  </g>
                  <path d="M182.538 55.335l-4.232-12.292-4.219 1.453-1.953-5.674 4.219-1.452-1.364-3.962c-1.486-4.316.514-7.38 4.364-8.705 1.844-.635 3.476-1.044 3.96-1.141l1.552 4.51-2.67.92c-2.093.721-2.223 1.879-1.72 3.339l1.114 3.236 5.673-1.954.062 6.325-3.782 1.302 4.233 12.292-5.237 1.803z" fill="#FFF" fillRule="nonzero" />
                  <g transform="rotate(20 -85.403 3424.487)">
                    <use fill="#000" filter="url(#scill-sh)" xlinkHref="#scill-bc" />
                    <use fill="#333" xlinkHref="#scill-bc" />
                  </g>
                  <path d="M1195.472 271.965c-8.269-3.01-17.497 1.293-20.507 9.563-2.428 6.671-.158 13.883 5.044 18.011.717.368 1.136.094 1.307-.376l.924-2.537c-4.571-.6-4.357-3.82-4.357-3.82-.042-1.93-.904-2.777-.904-2.777-1.068-1.453.436-.905.436-.905 1.469.64 1.802 2.358 1.802 2.358.494 2.734 2.895 2.863 3.972 2.83a3.452 3.452 0 011.658-1.632c-3.247-1.607-6.245-4.188-4.158-9.92.581-1.598 1.658-2.802 2.974-3.494-.051-.444.026-2.119 1.624-3.878 0 0 1.359.069 3.588 3.008 1.358.069 2.614.42 3.93.899 1.315.478 2.468 1.11 3.587 1.837 3.632-.913 4.716-.092 4.716-.092.094 2.375-1.017 3.673-1.248 4.015.563 1.376.648 2.896.033 4.588-2.087 5.732-6.042 5.782-9.562 4.927.393.675.52 1.785.008 3.195l-1.505 4.135c-.137.376-.026.948.76 1.128 6.638.181 13.013-3.884 15.441-10.556 3.01-8.269-1.293-17.497-9.563-20.507z" fill="#FFF" />
                  <g transform="rotate(29 -350.439 475.37)">
                    <use fill="#000" filter="url(#scill-sh)" xlinkHref="#scill-sc" />
                    <use fill="#E60123" xlinkHref="#scill-sc" />
                  </g>
                  <path d="M204.818 262.505c-5.773-3.2-13.114-1.095-16.313 4.677-2.473 4.46-1.759 9.773 1.217 13.48.349-.835.988-2.195 1.648-2.973.611-.69 4.133-4.57 4.133-4.57s.126-.844.61-1.719c.825-1.487 2.281-2.051 3.33-1.47.875.485.925 1.427.489 2.214-.485.875-1.873 1.935-2.814 3.014-.844.904-.542 2.215.507 2.797 1.837 1.018 4.39-.082 5.99-2.968 1.406-2.537.54-5.304-1.997-6.71-2.974-1.648-5.983-.344-7.244 1.93-.485.875-.668 2.03-.522 2.798.04.136-.01.223-.058.31-.281.302-.844.905-.94 1.08-.185.126-.321.165-.448-.02-.972-1.339-.693-3.7.131-5.186 1.843-3.324 5.988-5.027 10.449-2.555 3.673 2.036 5.018 6.212 3.127 9.623-1.988 3.586-5.91 5.299-9.059 3.554-1.05-.582-1.808-1.689-1.77-2.582 0 0-1.64 1.72-2.018 2.197-.747.729-1.99 1.526-2.815 1.984.73.747 1.682 1.504 2.731 2.085 5.773 3.2 13.114 1.095 16.313-4.677 3.2-5.773 1.095-13.114-4.677-16.313z" fill="#FFF" fillRule="nonzero" />
                  <g>
                    <g transform="rotate(-16 972.557 -3949.915)">
                      <use fill="#000" filter="url(#scill-sh)" xlinkHref="#scill-sc" />
                      <use fill="#1CA1F2" xlinkHref="#scill-sc" />
                    </g>
                    <path d="M1175.413 126.29c-.755.633-1.538 1.17-2.471 1.541.796-.852 1.289-2.034 1.37-3.201-.796.852-1.647 1.512-2.649 2.008a4.841 4.841 0 00-3.901-.546 4.908 4.908 0 00-3.36 6.06c.11.385.22.77.4 1.03a13.807 13.807 0 01-11.239-2.187c-.26.907-.232 1.731.016 2.597.469 1.634 1.748 2.828 3.245 3.334-.769.22-1.593.25-2.28.03l.028.096c.661 2.307 2.847 3.761 5.072 3.54-.357.206-.714.412-1.195.55-.288.082-.577.165-.893.152 1.128 1.757 3.245 2.606 5.36 2-1.276 1.718-3.075 3.066-5.285 3.7-.385.11-.77.22-1.182.235 2.501.74 5.22.791 7.816.047 8.748-2.508 11.39-11.068 9.6-17.316l-.166-.577c.768-.949 1.289-2.034 1.714-3.092z" fill="#FFF" fillRule="nonzero" />
                  </g>
                  <g>
                    <g transform="rotate(26 -278.852 269.93)">
                      <use fill="#000" filter="url(#scill-sh)" xlinkHref="#scill-xsc" />
                      <use fill="#0080CA" xlinkHref="#scill-xsc" />
                    </g>
                    <path d="M116.35 180.16l-16.179-7.89c-1.528-.746-3.266-.148-4.011 1.38l-7.89 16.179c-.746 1.528-.148 3.266 1.38 4.011l16.179 7.89c1.528.746 3.266.148 4.011-1.38l7.89-16.179c.746-1.528.148-3.266-1.38-4.011zm-17.778 11.356a2.006 2.006 0 01-2.674.92l-2.697-1.314a2.006 2.006 0 01-.92-2.675l5.698-11.684a2.006 2.006 0 012.675-.92l2.696 1.314a2.006 2.006 0 01.921 2.675l-5.699 11.684zm12.517-.57a2.006 2.006 0 01-2.674.92l-2.697-1.315a2.006 2.006 0 01-.92-2.674l3.068-6.292a2.006 2.006 0 012.675-.92l2.696 1.314a2.006 2.006 0 01.92 2.675l-3.068 6.291z" fill="#FFF" fillRule="nonzero" />
                  </g>
                  <g>
                    <g transform="rotate(17 176.891 4319.928)">
                      <use fill="#000" filter="url(#scill-sh)" xlinkHref="#scill-sc" />
                      {/* @ts-ignore */}
                      <circle stroke="#EAEAEA" strokeLinejoin="square" fill="#FFF" cx="32" cy="32" r="31.5" />
                    </g>
                    <path d="M1303.077 166.793l-8.62 2.42 5.814 6.758 8.601-2.35-5.795-6.828zm-14.413-4.407l-8.621 2.42 5.815 6.759 8.599-2.352-5.793-6.827zm2.987 16.006l5.793 6.827 8.622-2.42-5.795-6.828-8.62 2.42zm-14.415-4.407l5.795 6.827 8.62-2.42-5.793-6.827-8.622 2.42zm5.337 8.324l5.793 6.826 8.62-2.42-5.814-6.758-8.599 2.352z" fill="#0062FF" />
                  </g>
                </g>
              </svg>
            </div>


            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 mt-12">
              <h2 className="h2 text-4xl text-gray-800 md:mr-10">Interact with us</h2>
            </div>

            <div className="shadow-2xl">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="FinanceThrift"
                options={{height: 500} }
              />
            </div>
          </div>



          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-200">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-20">
                <h2 className="text-4xl">Questions & Answers</h2>
              </div>

              {/* Faqs */}
              <ul className="max-w-3xl mx-auto pl-12">
                <Accordion title="Do I need coding knowledge to use this product?">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion>
                <Accordion title="Do you have student or non-profit discounts?">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion>
                <Accordion title="Is there a way to become an Affiliate reseller of this product?">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion>
                <Accordion title="What is the difference between the Free and Paid versions?" active>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion>
                <Accordion title="How can I change the owner of a workspace?">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion>
                <span className="block border-t border-gray-200" aria-hidden="true"></span>
              </ul >

            </div >
          </div >




        </div>

      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Stay up to date</h1>
          </div>
          <div
            className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Subscribe:</label>
              <input type="email" id="email" name="email" placeholder="Enter email"
                     className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button
              className="text-white bg-second border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
            </button>
          </div>
        </div>
      </section>
      <footer className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              className="rounded-circle mr-4 p-1"
              style={{ width: 52, height: 'auto' }}
              src="/favicon.png"
              alt="Cardano Fans Staking Pool - Logo"
            />
            <span className="md:ml-3 text-xl">Thrift</span>
          </a>
          <p
            className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
            2021 Thrift Finance —
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer"
               target="_blank">@FinanceThrift</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5"
                       viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5"
                       viewBox="0 0 24 24">
                    <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                       className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0"
                       className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
        </div>
      </footer>

    </section>
  )
}
