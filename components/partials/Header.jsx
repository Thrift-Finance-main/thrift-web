import React, { useState, useRef, useEffect } from 'react';
// import { div } from 'react-router-dom';
import Dropdown from '../shared/Dropdown';
import Transition from '../shared/Transition';
import Logo from '../console/Components/Logo';
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../../store/actions/sampleAction'
function TheHeader({setDarkModeProp}) {

  const dispatch = useDispatch();

  const storeState = useSelector((state) => state.reduxData);
  const [darken, setDarken] = useState(storeState.config.darkMode); 
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {

    if (darken) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darken]);


  const handleDarkMode = (darkMode) => {

    console.log('handleDarkMode');
    console.log(darkMode);
    setDarken(darkMode);
    // @ts-ignore
    dispatch(setDarkMode(darkMode));
    setDarkModeProp(darkMode)
  }

  return (
    <header className="absolute w-full z-30 black-text dark-here">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-5">
            {/* Logo */}
            <div to="/" className="block" aria-label="Cruip">

                {/* check if dark mode is true  */}
                {
                  !darken ? <Logo/> :  <img width={'98.28'} height={"40.29"} src={'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658767409/Logo_Thrift_Finance_white_1_2_1_xr9jzu.png'} />
                }

            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu divs */}
            <ul className="flex black-text grow flex-wrap items-center font-medium">
              <li>
                <div
                  to="/about"
                  className="black-text text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </div>
              </li>
              <li>
                <div
                  to="/blog"
                  className="text-gray-600 black-text  hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Roadmap
                </div>
              </li>
              <li>
                <div
                  to="/testimonials"
                  className="text-gray-600 black-text  hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </div>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Doc" >
                {/* 2nd level: hover */}
                <li>
                  <div
                    to="/help"
                    className="text-sm black-text  text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                  >
                    Help center
                  </div>
                </li>
                <li>
                  <div
                    to="/404"
                    className="text-sm black-text  text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                  >
                    404
                  </div>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop lights switch */}
            <div className="form-switch flex flex-col justify-center ml-3">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-desktop"
                className="light-switch sr-only"
                checked={darken}
                onChange={() => handleDarkMode(!darken)}
              />

            <label className="relative" htmlFor="light-switch-desktop">
                <span
                  className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                ></span>
                <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                  <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
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
                <div to="/contact" className="btn-sm text-white  cursor-pointer ml-6 p-3 bg-purpled">
                   App Coming Soon
                </div>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="inline-flex md:hidden">
            {/* Mobile lights switch */}
            <div className="form-switch flex flex-col justify-center mr-6 -mt-0.5 ">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-mobile"
                className="light-switch sr-only"
                checked={darken}
                onChange={() => handleDarkMode(!darken)}
              />

              <label className="relative" htmlFor="light-switch-mobile">
                <span
                  className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                ></span>
                <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                  <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
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
              className={`hamburger ${mobileNavOpen && 'active'}`}
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
                    <Logo/>
                  </div>
                  {/* divs */}
                  <ul>
                    <li>
                      <div to="/about" className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">
                        About
                      </div>
                    </li>
                    <li>
                      <div to="/blog" className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">
                        Blog
                      </div>
                    </li>
                    <li>
                      <div to="/testimonials" className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">
                        Testimonials
                      </div>
                    </li>
                    <li className="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800">
                      <span className="flex text-gray-600 dark:text-gray-400 py-2">Resources</span>
                      <ul className="pl-4">
                        <li>
                          <div
                            to="/help"
                            className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
                          >
                            Help center
                          </div>
                        </li>
                        <li>
                          <div
                            to="/404"
                            className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
                          >
                            404
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div
                        to="/contact"
                        className="font-medium bg-purpled w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                      >
                        App Comming Soon
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </Transition>
          </div>
        </div>
      </div>
      </header>
  );
}

export default TheHeader;
