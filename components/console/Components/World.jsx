import React from 'react';
import Image from 'next/image';

function FeaturesWorld({darkM}) {
  return (
    <>
      <div className='max-w-6xl mx-auto border-t border-gray-700 pt-8'></div>
    <section  id='about' style={darkM ? {background: "linear-gradient(180deg, rgba(46, 46, 51, 0.32) 0%, rgba(46, 46, 51, 0.0001) 100%)"} : {}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center py-8">
            <h1 className="h2 mb-4 !font-normal font-xl font-header">Team</h1>
            <p className="text-xl text-gray-600 black-text">Decentralized Team of experts with prident blockchain history</p>
          </div>



          {/* World illustration */}
          {/* <div className="flex flex-col items-center pt-12 md:pt-16">
            <div className="relative">
                  <img src={'https://res.cloudinary.com/dhkccnvyn/image/upload/v1659129900/Globe_q8nbya.svg'} alt={'Team around the globe'} width='100%' height='100%'/>
            </div>
          </div> */}

        </div>
      </div>
      </section>
      </>
  );
}

export default FeaturesWorld;
