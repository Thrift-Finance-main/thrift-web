
import Image from 'next/image'
const Team = () => {

  const team = [
    {
      name: 'Josiah Odosu ',
      title: 'Founder , Product Lead',
      image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844458/thrift%20web/Avatar_awomic.svg'
    },

    {
      name: 'Jaime Caso',
      title: 'Co-Founder , Lead Enginner ',
      image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844463/thrift%20web/1_2x_e0y822.svg'
    },
    {
      name: 'Loveth Chukwu',
      title: 'Finance Consultant',
      image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844469/thrift%20web/3_2x_xfcljs.svg'
    },
    {
      name: 'Obiabo Immanuel',
      title: 'Frontend Developer ',
      image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844456/thrift%20web/4_2x_ajpsfv.svg'
    },

    {
      name: 'Kan Kan',
      title: 'Community Manager ',
      image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844468/thrift%20web/5_2x_l7lila.svg'
    },
    {
      name: 'Hishmat Rai',
      title: 'Web & Mobile Developer',
      image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844457/thrift%20web/6_2x_sqlqmx.svg'
    },
    {
      name: 'August Egesi',
      title: 'Graphics Designer ',
      image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844458/thrift%20web/Avatar-1_heodhb.svg'
    }
  ]

  return (
    <>

      <div>



        <div className=" dark-here ">

          <div className='item-team'>
            {/* loop through items  */}
            {
              team.map((item, index) => {

                return (
                  <>

                    <div>
                      <img src={item.image}
                           width={"80%"} height={"80%"}
                      />

                      <h6 className=' text-lg'>{item.name}</h6>
                      <p className='text-primary'>{item.title}</p>
                    </div>

                  </>
                )

              })
            }
          </div>

          {/*
                    <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {
                  team.map((item, index) => {
                    return <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
                      <div className="h-full flex flex-col items-center text-center">
                        <img alt="team"
                             className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                             src="https://dummyimage.com/200x200" />
                        <div className="w-full">
                          <h2 className="title-font font-medium text-lg text-gray-900">Alper
                            Kamu</h2>
                          <h3 className="text-gray-500 mb-3">UI Developer</h3>
                          <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid
                            fanny pack vaporware.</p>
                          <span className="inline-flex">
                                              <a className="text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                     className="w-5 h-5" viewBox="0 0 24 24">
                                                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                              </a>
                                              <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                     className="w-5 h-5" viewBox="0 0 24 24">
                                                  <path
                                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                              </a>
                                              <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                     className="w-5 h-5" viewBox="0 0 24 24">
                                                  <path
                                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                              </a>
                                            </span>
                        </div>
                      </div>
                    </div>
                  })
                }

              </div>
            </div>
          </section>

          */}

        </div>

      </div>


    </>
  )
}

export default Team;
