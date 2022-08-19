import React from 'react';
import Image from 'next/image';

function FeaturesWorld({darkM}) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 font-extrabold font-xl font-header">Team</h1>
            <p className="text-xl text-gray-600 black-text">Decentralized Team of experts with prident blockchain history</p>
          </div>



          {/* World illustration */}
          <div className="flex flex-col items-center pt-12 md:pt-16">
            <div className="relative">
                  <img src={'https://res.cloudinary.com/dhkccnvyn/image/upload/v1659129900/Globe_q8nbya.svg'} alt={'Team around the globe'} width='100%' height='100%'/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesWorld;
