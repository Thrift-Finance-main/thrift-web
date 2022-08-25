import Image from 'next/image'
import content from '../../../public/data/Hero/content.json';

const ThriftPeer = ({ darkM }) =>
{
    const thrift_json = content.thrift_peer;
    return (
        <>


            <div className="my-20">
                <div className=' p2p bg-primary peer p-4 ' >

                          <div className='w-full mt-[-110px] dangle'>
                            <img src={"https://res.cloudinary.com/dhkccnvyn/image/upload/v1658793063/data_management_9_1_2_uw28j8.svg"}
                                width='235px'
                            />
                          </div>
                          <div className="peerText">
                        <h3 className='!text-[2em] mt-[18px] mb-[37px]'>{ thrift_json.heading }</h3>
                            <p>{ thrift_json.info } </p>
                          </div>

                </div>
            </div>


        </>
    )
}


export default ThriftPeer
