import React, { useEffect, useState } from 'react'
import NewsletterSubscribe from '@components/shared/mailchimp/NewsletterSubscribe'

// import hero_json from '../../public/data/Hero/english/hero.json'

function Hero({ darkM, language }) {
  const [hero_json, setHero_json] = useState(null)

  useEffect(() => {
    fetch(`/data/Hero/${language}/hero.json`)
      .then((res) => res.json())
      .then((data) => setHero_json(data))
      .catch((err) => console.log(err))
  }, [language])

  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16 topper">
          {/* Hero content */}
          {/* removed items-center */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 ">
            {/* Content */}
            <div className="relative adjust md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left ">
              <div style={{}}>
                {/* <h1 className="h1 dark-here lg:text-6xl mb-4  font-red-hat-display  font-top  show-white" data-aos="fade-down">Crypto Saving, made personal</h1> */}
                <h1
                  className="!bg-none h1 !font-[400] font-header mb-5 text-3xl leading-9 dark-here tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
                  data-aos="fade-down"
                  style={{ background: 'none !important', lineHeight: '1em' }}
                >
                  {hero_json?.heading}
                </h1>
              </div>
              <p
                className="black-text text-gray-600 dark:text-gray-400 mb-8"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                {hero_json?.info}
              </p>
              {/* CTA form */}
              <NewsletterSubscribe />
              <div className="flex items-end">
                <ul
                  className="max-w-sm black-text sm:max-w-md mr-20 md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2"
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  {hero_json?.tags.map((tag, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <svg
                        className="text-[#3ABAB4] w-3 h-3 fill-current text-primary mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{tag} </span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a href="#">
                    <img
                      src={`/icon/${darkM ? 'telegram' : 'telegram-light'}.png`}
                      width="32px"
                      height="32px"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src={`/icon/${darkM ? 'twitter' : 'twitter-light'}.png`}
                      width="32px"
                      height="32px"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="relative">
                {
                  <img
                    className="absolute top-[2.5rem] left-[-8rem]"
                    width={'256px'}
                    src={
                      darkM === true
                        ? 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658794005/Oval_lpwusi.svg'
                        : '/Oval-light.svg'
                    }
                  />
                }
              </div>
            </div>

            {/* Mobile mockup */}
            <div
              className="md:col-span-5 lg:col-span-5 text-center md:text-right"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <div className="inline-flex relative justify-center items-center w-full">
                {/* Glow illustration

                 <svg className="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40" aria-hidden="true" width="678" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="240" cy="394" r="240" fill="url(#piphoneill_paint0_radial)" fillOpacity=".4" />
                  <circle cx="438" cy="240" r="240" fill="url(#piphoneill_paint1_radial)" fillOpacity=".6" />
                  <defs>
                    <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -77 317) scale(189.054)">
                      <stop stopColor="#667EEA" />
                      <stop offset="1" stopColor="#667EEA" stopOpacity=".01" />
                    </radialGradient>
                    <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 99 339) scale(189.054)">
                      <stop stopColor="#9F7AEA" />
                      <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01" />
                    </radialGradient>
                  </defs>
                </svg>

                */}

                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}

                {/* iPhone mockup */}
                <img
                  className="relative dance max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none w-full"
                  src={
                    'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658348423/iPhone_12___12_Pro_f69cnq.svg'
                  }
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
                {/* Play button */}
                {/* <a className="absolute group" href="#0" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                  <img src={PlayBtn} width="96" height="96" alt="Play" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
