
import Image from 'next/image'
const Team = () => {

    const team = [
        {
        name: 'Josiah Odosu ',
        title: 'CEO',
        image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844458/thrift%20web/Avatar_awomic.svg'
    },

    {
        name: 'Jaime Caso',
        title: 'CEO',
        image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844463/thrift%20web/1_2x_e0y822.svg'
    },
    {
        name: 'Loveth Chukwu',
        title: 'CEO',
        image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844469/thrift%20web/3_2x_xfcljs.svg'
    },
    {
        name: 'Obiabo Immanuel',
        title: 'CEO',
        image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844456/thrift%20web/4_2x_ajpsfv.svg'
    },

    {
        name: 'Kan Kan',
        title: 'CEO',
        image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844468/thrift%20web/5_2x_l7lila.svg'
    },
    {
        name: 'Hishmat Rai',
        title: 'CEO',
        image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844457/thrift%20web/6_2x_sqlqmx.svg'
    },
    {
        name: 'August Egesi',
        title: 'CEO',
        image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658844458/thrift%20web/Avatar-1_heodhb.svg'
    }
]

    return (
        <>

            <div>

                <h2>Team </h2>
               
               <div className="container dark-here ">
                    
                    <div className='item-team'>
                        {/* loop through items  */}
                    {
                        team.map((item, index) => {

                            return (
                                <>

                                  <div>
                                    <Image src={item.image}  
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

               </div>
                
            </div>


        </>
    )
}

export default Team;