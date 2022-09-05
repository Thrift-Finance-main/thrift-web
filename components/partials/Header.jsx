import React, { useState, useRef, useEffect } from 'react'
import Dropdown from '../shared/Dropdown'
import Transition from '../shared/Transition'
import Logo from '../console/Components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode, setLanguageMode } from '../../store/actions/sampleAction'

import { useTranslation, UseTranslation } from 'next-i18next'
import lang from '../../constants/lang'

function TheHeader({ setDarkModeProp, darkM }) {
  const router = useRouter()

  const { t } = useTranslation('header')

  const [language, setLanguage] = useState(lang[router.locale])

  const dispatch = useDispatch()

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const trigger = useRef(null)
  const mobileNav = useRef(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    if (darkM) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkM])

  const handleDarkMode = (darkMode) => {
    // @ts-ignore
    dispatch(setDarkMode(darkMode))
    setDarkModeProp(darkMode)
  }
  const handleLanguageChange = (newLocale) => {
    setLanguage(lang[newLocale])

    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <header className="absolute w-full z-30 black-text">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-5">
            {/* Logo */}
            <Link href="/">
              <a className="block" aria-label="Cruip">
                {/* check if dark mode is true  */}
                {!darkM ? (
                  <Logo />
                ) : (
                  <img
                    width={'98.28'}
                    height={'40.29'}
                    src={
                      'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658767409/Logo_Thrift_Finance_white_1_2_1_xr9jzu.png'
                    }
                  />
                )}
              </a>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:grow">
            {/* Desktop menu divs */}
            <ul className="flex black-text grow flex-wrap items-center font-medium">
              {t('menus', { returnObjects: true }).map((menu, index) => (
                <li
                  key={index}
                  className={
                    index === t('menus', { returnObjects: true }).length - 1 &&
                    'mr-12'
                  }
                >
                  <Link href={`#${menu.toLowerCase()}`}>
                    <a
                      className={`text-gray-600 black-text dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out ${
                        darkM
                          ? 'hover:!text-[#603EDA]'
                          : 'hover:!text-[#191919]'
                      }`}
                    >
                      {menu}
                    </a>
                  </Link>
                </li>
              ))}

              <Dropdown
                title={t('dropdown_menu.title.desktop')}
                darkMode={darkM}
              >
                {t('dropdown_menu.items', { returnObjects: true }).map(
                  (item, index) => {
                    if (index === 1 && darkM) return
                    return (
                      <li key={index}>
                        <Link href={item.link}>
                          <a
                            className={`text-sm black-text text-gray-600 dark:text-gray-400  flex py-2 px-4 leading-tight ${
                              darkM
                                ? 'hover:!text-[#603EDA]'
                                : 'hover:!text-[#191919]'
                            }`}
                          >
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    )
                  }
                )}
              </Dropdown>
            </ul>

            {/* Desktop lights switch */}
            <div className="form-switch flex flex-col justify-center ml-3">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-desktop"
                className="light-switch sr-only"
                checked={darkM}
                onChange={() => handleDarkMode(!darkM)}
              />

              <label className="relative" htmlFor="light-switch-desktop">
                <span
                  className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                ></span>
                <svg
                  className="absolute inset-0"
                  width="44"
                  height="24"
                  viewBox="0 0 44 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    className="fill-current text-white"
                    fillRule="nonzero"
                    opacity=".88"
                  >
                    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                    <circle cx="32" cy="12" r="3" />
                    <circle fillOpacity=".4" cx="12" cy="12" r="6" />
                    <circle fillOpacity=".88" cx="12" cy="12" r="3" />
                  </g>
                </svg>
                <span className="sr-only">Switch to light / dark version</span>
              </label>
            </div>

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <Link href="/contact">
                  <a className="btn-sm text-white  cursor-pointer ml-6 p-3 bg-purpled">
                    {t('comming_soon')}
                  </a>
                </Link>
              </li>
              <Dropdown title={language}>
                {t('language_dropdown', { returnObjects: true }).map(
                  (item, index) => {
                    if (router.locale === item.locale) return
                    return (
                      <li
                        key={index}
                        className={`cursor-pointer text-sm black-text text-gray-600 dark:text-gray-400  flex py-2 px-4 leading-tight ${
                          darkM
                            ? 'hover:!text-[#603EDA]'
                            : 'hover:!text-[#191919]'
                        }`}
                        onClick={() => handleLanguageChange(item.locale)}
                      >
                        {item.title}
                      </li>
                    )
                  }
                )}
              </Dropdown>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="inline-flex lg:hidden">
            {/* Mobile lights switch */}
            <div className="form-switch flex flex-col justify-center mr-6 -mt-0.5 ">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-mobile"
                className="light-switch sr-only"
                checked={darkM}
                onChange={() => handleDarkMode(!darkM)}
              />

              <label className="relative" htmlFor="light-switch-mobile">
                <span
                  className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                ></span>
                <svg
                  className="absolute inset-0"
                  width="44"
                  height="24"
                  viewBox="0 0 44 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    className="fill-current text-white"
                    fillRule="nonzero"
                    opacity=".88"
                  >
                    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                    <circle cx="32" cy="12" r="3" />
                    <circle fillOpacity=".4" cx="12" cy="12" r="6" />
                    <circle fillOpacity=".88" cx="12" cy="12" r="3" />
                  </g>
                </svg>
                <span className="sr-only">Switch to light / dark version</span>
              </label>
            </div>

            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen ? 'active' : ''}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              dark-here
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-white hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <Transition
              show={mobileNavOpen}
              tag="ul"
              className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-x-full"
              enterEnd="opacity-100 translate-x-0"
              leave="transition ease-out duration-200"
              leaveStart="opacity-100"
              leaveEnd="opacity-0"
            >
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar"
              >
                <div className="py-6 pr-4 pl-20">
                  {/* Logo */}
                  <div to="/" className="inline-block mb-4" aria-label="Cruip">
                    <Logo />
                  </div>
                  {/* divs */}
                  <ul>
                    {t('menus', { returnObjects: true }).map((menu, index) => (
                      <li key={index}>
                        <Link href={`#${menu.toLowerCase()}`}>
                          <a className="block text-gray-600 black-text  hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">
                            {menu}
                          </a>
                        </Link>
                      </li>
                    ))}

                    <li className="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800">
                      <span className="flex text-gray-600 dark:text-gray-400 py-2">
                        {t('dropdown_menu.title.mobile')}
                      </span>
                      <ul className="pl-4">
                        {t('dropdown_menu.items', { returnObjects: true }).map(
                          (item, index) => (
                            <li key={index}>
                              <Link href={item.link}>
                                <a className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2">
                                  {item.title}
                                </a>
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a className="font-medium bg-purpled w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out">
                          {t('comming_soon')}
                        </a>
                      </Link>
                    </li>
                    <li className="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800">
                      <span className="flex text-gray-600 dark:text-gray-400 py-2">
                        {t('dropdown_menu.title.mobile')}
                      </span>
                      <ul className="pl-4">
                        {t('language_dropdown', { returnObjects: true }).map(
                          (item, index) => (
                            <li
                              key={index}
                              onClick={() => handleLanguageChange(item.locale)}
                            >
                              {/* <Link href={item.link}> */}
                              <span className="cursor-pointer text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2">
                                {item.title}
                              </span>
                              {/* </Link> */}
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </Transition>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TheHeader
