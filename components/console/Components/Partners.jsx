import Image from 'next/image'
const Partners = ({darkM}) => {
    return (
        <>

           <div className='my-5 partner max-w-6xl mx-auto border-t border-gray-700'>

                <h2 className='!font-normal dark-here font-header text-4xl' > Partners </h2>

                <img className='part' src = {'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658828293/Logos_hm2qbw.svg'}
                width='700%' height='100%'/>


           </div>

        </>
    )
}

export default Partners
