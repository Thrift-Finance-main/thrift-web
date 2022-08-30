import React from 'react';

import Image from 'next/image'
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import footer_json from '../../../public/data/Hero/footer.json';
import Link from 'next/link'

function TheFooter ({ darkM })
{
  // const footer_json = content.the_footer;
  return (
    <footer>
      <div className="max-w-6xl text-left dark-here mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className=" flex justify-between mb-5 footer-foot">
        {/* <div className="grid sm:grid-cols-12 gap-10 py-8 md:py-12 border-t border-gray-200"> */}
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3 mr-auto">
            <div className="mb-2">
              {/* Logo */}
              <div to="/" className="inline-block" aria-label="Cruip">
                 <img src={darkM === true ? '/bg/Logo_Thrift Finance_white.png' : '/bg/Logo_Thrift Finance.png'}
                 width='100%' height='100%' />
              </div>
            </div>
            {/* <div className="text-sm text-gray-600">
              <div to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</div> · <div to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</div>
            </div> */}
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 mr-0 sm:mr-[150px]">
            <h6 className="text-gray-800 font-medium mb-2 dark-here">Quick links </h6>
            <ul className="text-sm">
              {
                footer_json.quick_links.map((item, index) => (
                  <li key={index} className="mb-2">
                    <div to="#" className="text-gray-300 hover:text-gray-900 shade transition duration-150 ease-in-out"><a className="text-gray-800 dark-here" href={item.link} target="_blank" rel="noreferrer">{item.title}</a></div>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* 3rd block */}
          <div className="mt-4 sm:mt-0 sm:col-span-6 md:col-span-3 lg:col-span-2 mr-0 sm:mr-[50px]">
            <h6 className="text-gray-800 font-medium mb-2 dark-here">More</h6>
            <ul className="text-sm">
              {
                footer_json.about.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link href={ `#${link.toLowerCase()}` }>
                      <div to="#" className="text-gray-300 hover:text-gray-900 shade transition duration-150 ease-in-out cursor-pointer dark-here">{link}</div>
                    </Link>

                  </li>
                ))
              }
            </ul>
          </div>





        </div>



        {/* Bottom area: Copyright */}
        <div className={ 'flex-bottom black-text py-8' }
          style={{alignItems: 'center'}}
        >

        <div >
           <p>© 2021 Thrift Labs. All rights reserved.</p>
        </div>

        <div >
          <p>Privacy Policy  ·  Terms</p>
        </div>

        <div>
          <ul className='flex white-text gap-4 justifyContent-right' >
           <li className="cursor-pointer"> <AiFillLinkedin size={'2em'}/></li>
           <li className="cursor-pointer"> <AiFillTwitterCircle size={'2em'}/></li>
           <li className="cursor-pointer"><AiFillGithub size={'2em'}/></li>
          </ul>
        </div>
        </div>

      </div>
    </footer>
  );
}

export default TheFooter;
