import React, { useState } from 'react';

function Timeline({darkM}) {

  const [year, setYear] = useState('2021');

  return (
    <section id='roadmap' className='text-left'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4 !font-normal text-2xl font-header ">Roadmap</h2>
            <p className="text-gray-600 dark:text-gray-400">
              First steps, our challenges, participation in incubation & acceleration programs.</p>
          </div>

          {/* Section content */}
          <div style={{
            // display: 'none'
          }}>
            <div className="flex items-start">

              {/* Timeline buttons */}
              <div className="relative mr-4 sm:mr-12 lg:mr-32">
                <div className="absolute inset-0 my-6 ml-16 pointer-events-none" aria-hidden="true">
                  <div className="absolute inset-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
                <button className="relative flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2021')}>
                  <span className="block w-12 truncate">2021</span>
                  <span className={`block w-3.5 h-3.5 border-2 border-white dark:border-gray-900 rounded-full ${year === '2021' ? 'bg-primary dark:bg-primary' : 'bg-gray-400 dark:bg-gray-700'}`}></span>
                </button>
                <button className="relative flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2022')}>
                  <span className="block w-12 truncate">2022</span>
                  <span className={`block w-3.5 h-3.5 border-2 border-white dark:border-gray-900 rounded-full ${year === '2022' ? 'bg-primary dark:bg-primary' : 'bg-gray-400 dark:bg-gray-700'}`}></span>
                </button>
                <button className="relative flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2023')}>
                  <span className="block w-12 truncate">2023</span>
                  <span className={`block w-3.5 h-3.5 border-2 border-white dark:border-gray-900 rounded-full ${year === '2023' ? 'bg-primary dark:bg-primary' : 'bg-gray-400 dark:bg-gray-700'}`}></span>
                </button>
                <button className="relative flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2024')}>
                  <span className="block w-12 truncate">2024</span>
                  <span className={`block w-3.5 h-3.5 border-2 border-white dark:border-gray-900 rounded-full ${year === '2024' ? 'bg-primary dark:bg-primary' : 'bg-gray-400 dark:bg-gray-700'}`}></span>
                </button>
                <button className="relative flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2025')}>
                  <span className="block w-12 truncate">2025</span>
                  <span className={`block w-3.5 h-3.5 border-2 border-white dark:border-gray-900 rounded-full ${year === '2025' ? 'bg-primary dark:bg-primary' : 'bg-gray-400 dark:bg-gray-700'}`}></span>
                </button>


              </div>

              {/* 2020's articles */}
              <div className={`grow ${year !== '2021' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white  box-shade-top  dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display font-bold  mb-1">
                        <a href="#0"  className={'black-text text-black'} >Git Init</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 font-bold box-shade-top bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0" className={'black-text text-black'}>Thrift on Cardano Summit</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p className='left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 font-bold box-shade-top  bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0"  className={'black-text text-black'}>DeFI and Microlending for Africa </a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 font-bold box-shade-top bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-medium   font-red-hat-display mb-1">
                        <a href="#0"  className={'black-text text-black'}>Catalyst Boost Camp for Africa </a>
                      </h3>

                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

              {/* 2019's articles */}
              <div className={`grow ${year !== '2022' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 font-bold box-shade-top bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0" className='black-text text-black'>1M Customers</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 font-bold box-shade-top bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0" className='black-text text-black'>Mobile builder enabled</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

              {/* 2018's articles */}
              <div className={`grow ${year !== '2023' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6 dark-here">
                  <article className="p-6 font-bold box-shade-top bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0"  className={'black-text text-black'}>Series B fundraising</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 font-bold box-shade-top bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0" className='black-text text-black'>Launched Appy Business</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

              {/* 2017's articles */}
              <div className={`grow ${year !== '2024' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 font-bold box-shade-top bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0" className='black-text text-black'>1M Customers</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 font-bold box-shade-top bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0" className='black-text text-black'>Mobile builder enabled</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

              {/* 2016's articles */}
              <div className={`grow ${year !== '2025' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="md:col-span-2 p-6 font-bold box-shade-top bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0" className='black-text text-black'>Mobile builder enabled</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 font-bold box-shade-top bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0" className='black-text text-black'>Series B fundraising</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                  <article className="p-6 font-bold box-shade-top bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0" className='black-text text-black'>1M Customers</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <a className="inline-flex items-center font-medium text-primary hover:underline mt-2" href="#0">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Timeline;
