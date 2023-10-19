import React from 'react'
import Image from 'next/image';
import mobileImage from "../../../../../public/assests/Group 6046@2x.png";
import BgGradiwnt from "../../../../../public/assests/bgcolor/Rectangle10@2x.png";
import { Container } from '../layouts';
import { Aerrow } from '../icon/aerrow';

const Card = () => {
    const maintextStyle = {
        background: 'linear-gradient(to right, #9C32BB, #FF5B9F)',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
      };
    return (
        <section className="md:pb-27.5 lg:py-29.5 pb-18 pt-11 md:pt-11" id="Vinkintro" >
            <Container>
                <div className="flex justify-center py-[2rem] px-[3rem] !bg-center !bg-no-repeat !bg-cover rounded-2xl" style={{ background: `url(${BgGradiwnt.src})` }}>
                    {/* <div className="flex justify-centerpy py-10 px-10 !bg-center !bg-no-repeat !bg-cover rounded-[25px]" style={{ background: `url('https://i.ibb.co/McpVtxC/Rectangle-10.png')` }}> */}

                    <div className="max-w-screen relative min-w-0 flex-grow px-9 lg:mx-9 lg:max-w-container lg:px-0 md:max-w-container-md">
                        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div className="order-2 flex justify-center items-center lg:order-1">
                                <div>
                                    <p className='font-bold'>Make It Yours</p>
                                    <h2 className='className="mb-6 text-sm py-3 font-semibold leading-4.5  md:text-xl xl:text-[55px] xl:leading-[40px]'>Customized</h2>
                                    <h1 className='className="mb-6 text-sm py-3 font-semibold leading-4.5  md:text-xl xl:text-[55px] xl:leading-[40px]'>In Just<span style={maintextStyle}> A Few Clicks.</span></h1>
                                    <p className="mb-6 text-sm  md:text-xl xl:text-[24px] xl:py-2">Make your Tapni Card match your style and branding to create an unique, unforgettable experience.</p>


                                    <div className='flex flex-row'>
                                        <div>
                                            <button className="bg-[#FF5B9F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                                <div className='flex flex-row'>
                                                    <div>
                                                        Design Your Card Now
                                                    </div>
                                                    <div className='flex items-end'>
                                                        <Aerrow />

                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex relative order-1 h-full w-full lg:justify-center lg:order-2 lg:ml-auto">


                                <Image
                                    src={mobileImage}
                                    alt="External Image"
                                    width={700}
                                    height={480}
                                />


                                {/* <img alt="Who we are" loading="lazy" decoding="async" data-nimg="fill" className="object-cover md:rounded-md lg:rounded-compassion-sm" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw""> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Card;
