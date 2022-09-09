import { useTranslation } from 'next-export-i18n'
import React, { useState, useEffect } from 'react'

function Timeline({ darkM, language }) {
  const { t } = useTranslation()
  const content = t('timeline')
  const [year, setYear] = useState('2022')

  return (
    <section id="roadmap" className="text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4 !font-normal text-2xl font-header ">
              {content.heading}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{content.info}</p>
          </div>

          {/* Section content */}
          <div
            style={
              {
                // display: 'none'
              }
            }
          >
            <div className="flex items-start">
              {/* Timeline buttons */}
              <div className="relative mr-4 sm:mr-12 lg:mr-32">
                <div
                  className="absolute inset-0 my-6 ml-16 pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
                {content.group
                  .map((item) => item.year)
                  .map((item) => (
                    <button
                      key={item}
                      className="relative flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left"
                      onClick={() => setYear(item)}
                    >
                      <span className="block w-12 truncate">{item}</span>
                      <span
                        className={`block w-3.5 h-3.5 border-2 border-white dark:border-gray-900 rounded-full ${
                          year === item
                            ? 'bg-primary dark:bg-primary'
                            : 'bg-gray-400 dark:bg-gray-700'
                        }`}
                      ></span>
                    </button>
                  ))}
              </div>

              {/* 2020's articles */}
              {content.group.map((group_item, ind) => (
                <div
                  key={ind}
                  className={`grow ${year !== group_item.year && 'hidden'}`}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {group_item.items.map((item, index) => (
                      <article
                        key={index}
                        className={
                          'p-6 bg-white  box-shade-top  dark:bg-gray-800 shadow-2xl flex flex-col' +
                          (group_item.items.length & 1 && !index
                            ? ' md:col-span-2'
                            : '')
                        }
                      >
                        <header>
                          <h3 className="h4 font-red-hat-display mb-1">
                            <a
                              href="#0"
                              className={`${
                                darkM ? 'text-white' : 'text-black'
                              }`}
                            >
                              {item.title}
                            </a>
                          </h3>
                        </header>
                        <div className="text-gray-600 dark:text-gray-400 grow">
                          <p>{item.info}</p>
                        </div>
                        <a
                          className="inline-flex items-center font-medium text-primary hover:underline mt-2"
                          href="#0"
                        >
                          <span>Learn more</span>
                          <svg
                            className="w-3 h-3 shrink-0 mt-px ml-2"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="fill-current"
                              d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                            />
                          </svg>
                        </a>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
