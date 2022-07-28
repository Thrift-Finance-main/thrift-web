import React from 'react';

function TheCta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-primary dark-here rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex gap-2 flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              
                <p className="text-white text-lg opacity-75 text-4xl w-100">Get Notification</p>
              </div>

              {/* CTA button */}
              <form>
                  <input type={"email"} className={' py-2 rounded-lg dark-here '} 
                    placeholder={'Email Address'}
                  />
               </form>
              <div>

              <div className="btn-sm text-white btn-sm  cursor-pointer   bg-purpled">
                   Join Waitlist 
               </div>
                
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default TheCta;
