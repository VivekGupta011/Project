import React from 'react';
import Image from 'next/image';
import mobileImage from '../../../../../public/assests/Group 6044.png';
import mobileImageres from '../../../../../public/assests/Group 6044@2x.png';

import Ecologiimage from '../../../../../public/assests/Layer_2_1_@2x.png';
import Plant from '../../../../../public/assests/plant@2x.png';
import { Container } from '../layouts';
import { Aerrow } from '../icon/aerrow';

const Intropage = () => {
  const maintextStyle = {
    background: 'linear-gradient(to right, #9C32BB, #FF5B9F)',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
  };
  return (
    <section
      className="md:pb-27.5 lg:py-29.5 pb-18 pt-11 md:pt-11"
      id="Vinkintro"
      style={{ backgroundColor: '#F6F6F6' }}
    >
      <Container>
        <div className="flex justify-center">
          <div className="relative px-3 flex-grow min-w-0 max-w-screen md:px-9 lg:mx-9 lg:max-w-container lg:px-0 md:max-w-container-md">
            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col items-center justify-center order-2 lg:order-1">
                <div>
                  <h2 className='className="md:mb-6 md:py-5 text-sm font-semibold leading-4.5  md:text-xl xl:text-[55px] xl:leading-[40px]'>
                    Your Sustainable,
                  </h2>
                  <h1
                    className='className="md:mb-6 md:py-2 text-sm font-semibold leading-4.5  md:text-xl xl:text-[55px] xl:leading-[40px]'
                    style={maintextStyle}
                  >
                    Smart Business Card
                  </h1>
                  <p className="md:mb-6 text-sm  md:py-5 md:text-xl font-semibold xl:text-[34px] xl:py-2 lg:leading-10">
                    All your details in one place shared <br /> with just a tap.
                  </p>

                  <div className="flex flex-row">
                    <div className="mr-8 py-3">
                      <button className="p-2 sm:text-[15px] font-semibold text-black bg-transparent border border-black md:rounded-full md:px-4 md:py-2 hover:bg-blue-500 hover:text-white hover:border-transparent">
                        Get yours now
                      </button>
                    </div>
                    <div className='py-3'>
                      <button className="bg-[#FF5B9F] hover:bg-blue-700 text-white font-bold py-2 px-4 md:rounded-full">
                        <div className="flex flex-row">
                          <div>For Teams</div>
                          <div className="flex items-end">
                            <Aerrow />
                          </div>
                        </div>
                      </button>

                      <div
                        className="flex mb-1  mt-[25px] text-sm md:text-xl xl:text-[24px] xl:py-2 lg:leading-10 lg:mt-[80px]"
                        style={{ marginLeft: '-55%' }}
                      >
                        <div className="px-5">
                          <Image
                            src={Ecologiimage}
                            alt="External Image"
                            width={110}
                            height={70}
                          />
                        </div>
                        <div>
                          <Image
                            src={Plant}
                            alt="External Image"
                            width={50}
                            height={30}
                          />
                        </div>
                      </div>
                      <p
                        className="mb-6  mt-[5px] text-[23px]"
                        style={{ marginLeft: '-50%' }}
                      >
                        <strong className="text-[#065D4D]">
                          1 Tree Planted
                        </strong>{' '}
                        With every Poduct.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex order-1 w-full h-full lg:justify-center lg:order-2 lg:ml-auto">
                <Image
                  src={mobileImageres}
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
  );
};

export default Intropage;
