import React from 'react';

import Image from 'next/image'
import { AiFillGithub , AiFillTwitterCircle , AiFillInstagram } from 'react-icons/ai'

function TheFooter() {
  return (
    <footer>
      <div className="max-w-6xl text-left dark-here mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="flex justify-between">
        {/* <div className="grid sm:grid-cols-12 gap-10 py-8 md:py-12 border-t border-gray-200"> */}
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <div to="/" className="inline-block" aria-label="Cruip">
                 <Image src='https://res.cloudinary.com/dhkccnvyn/image/upload/v1658915838/Logo_c44zln.png'
                 width='100%' height='100%' />
              </div>
            </div>
            {/* <div className="text-sm text-gray-600">
              <div to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</div> · <div to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</div>
            </div> */}
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 dark-here">Quick links </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <div to="#" className="text-gray-600 hover:text-gray-900 shade transition duration-150 ease-in-out">Ideascale</div>
              </li>
              <li className="mb-2">
              <div to="#" className="text-gray-600 hover:text-gray-900 shade transition duration-150 ease-in-out">Docs</div>
              </li>
              <li className="mb-2">
              <div to="#" className="text-gray-600 hover:text-gray-900 shade transition duration-150 ease-in-out">FAQs</div>
              </li>
                
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 dark-here">About</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <div to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Team</div>
              </li>
              <li className="mb-2">
                <div to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Roadmap</div>
              </li>
            
            </ul>
          </div>

         
           
         

        </div>

    

        {/* Bottom area: Copyright */}
        <div className={'flex-bottom black-text'}>

        <div >
           <p>© 2020 Appy. All rights reserved.</p>
        </div>

        <div >
          <p>Privacy Policy  ·  Terms</p>
        </div>

        <div>
          <ul className='flex white-text gap-4 justifyContent-right' >
           <li >
              <AiFillGithub size={'2em'}/>
      
           </li>
           <li> <AiFillTwitterCircle size={'2em'}/></li>
           <li><AiFillInstagram size={'2em'}/></li>
          </ul>
        </div>
        </div>

      </div>
    </footer>
  );
}

export default TheFooter;
