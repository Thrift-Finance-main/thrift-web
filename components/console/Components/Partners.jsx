import Image from 'next/image'
import partners_json from '../../../public/data/Hero/partners.json';

const Partners = ({darkM}) => {
    // const partners_json = content.partners;
    return (
        <>

           <div className='my-5 partner max-w-6xl mx-auto border-t border-gray-700'>

                <h2 className='!font-normal dark-here font-header text-4xl' > {partners_json.heading} </h2>

                <img className='part' src = {'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658828293/Logos_hm2qbw.svg'}
                width='700%' height='100%'/>


           </div>

        </>
    )
}

export default Partners
