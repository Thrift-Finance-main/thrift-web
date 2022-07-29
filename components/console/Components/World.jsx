import React from 'react';
import Image from 'next/image';
import Globe from './Globe.svg'

function FeaturesWorld() {
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
                  <Image src={Globe} alt={'Team around the globe'}/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesWorld;
