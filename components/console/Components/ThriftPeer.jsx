import Image from 'next/image'
const ThriftPeer = () => {
    return (
        <>
        

            <div className="my-20">
                <div className=' p2p bg-primary peer p-4 ' >

                          <div className='phone-cloud '>
                            <Image src={"https://res.cloudinary.com/dhkccnvyn/image/upload/v1658793063/data_management_9_1_2_uw28j8.svg"} 
                                width='200%' height='150%'
                            />
                          </div>
                          <div className="peerText">
                            <h3>Thrift P2P</h3>
                            <p> Securely exchange crypto for fiat with other users, communicate privately. </p>
                          </div>

                </div>
            </div>
        
        
        </>
    )
}


export default ThriftPeer