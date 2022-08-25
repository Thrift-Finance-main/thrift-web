import React from 'react';
import content from '../../../public/data/Hero/content.json';

function TheCta({darkM}) {
  const cta_json = content.the_cta;
  return (
    <div className = 'dark-here'>
    <section className={darkM === true ? 'dark-bg-noti-img' : 'bg-noti-img'}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 !pt-12`}>
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-primary dark-bg-noti rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex gap-2 flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">

                <p className="text-white text-lg opacity-75 text-4xl w-100 font-header">{cta_json.heading}</p>
              </div>

              {/* CTA button */}
              <div className='block sm:flex'>
                <form>
                    <input type={"email"} className={' py-2 rounded-lg'}
                      placeholder={'Enter Email Address..'}
                    />
                </form>

                <div className="ml-0 sm:ml-2 mt-2 sm:mt-0 btn-sm text-white cursor-pointer  bg-purpled text-[16px]">
                    Join Waitlist
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
    </div>
  );
}

export default TheCta;
