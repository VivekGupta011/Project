import React from 'react';
import Image from 'next/image';
import mobileImage from '../../../../../public/assests/hand-is-holding-mobile-phone-black-credit-card-white-background-asian-man-hand@2x.png';
import BgGradiwnt from '../../../../../public/assests/bgcolor/Rectangle10@2x.png';
import { Container } from '../layouts';
import { Aerrow } from '../icon/aerrow';

const Who = () => {
  return (
    <section
      className="md:pb-27.5 lg:py-29.5 pb-18 pt-11 md:pt-11"
      id="Vinkintro"
    >
      <Container>
        <div
          className="flex justify-center py-6 md:py-[6rem] md:px-[6rem] !bg-center !bg-no-repeat !bg-cover rounded-[4rem]"
          style={{ background: `url(${BgGradiwnt.src})` }}
        >
          {/* <div className="flex justify-centerpy py-10 px-10 !bg-center !bg-no-repeat !bg-cover rounded-[25px]" style={{ background: `url('https://i.ibb.co/McpVtxC/Rectangle-10.png')` }}> */}

          <div className="relative flex-grow min-w-0 max-w-screen px-9 lg:mx-9 lg:max-w-container lg:px-0 md:max-w-container-md">
            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div>
                  <h2 className='className="mb-6 text-[#065D4D] text-sm font-semibold leading-4.5  md:text-xl xl:text-[40px] xl:leading-[40px]'>
                    Share Who You Are
                  </h2>
                  <h1 className='className="mb-6 text-sm font-semibold leading-4.5  md:text-xl xl:text-[40px] xl:leading-[40px]'></h1>
                  <p className="mb-6 text-sm  md:text-xl xl:text-[24px] xl:py-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore inventore incidunt nobis a voluptates animi possimus,
                    veniam accusantium aspernatur deserunt .{' '}
                  </p>
                  <p className="mb-6 text-sm  md:text-xl xl:text-[24px] xl:py-2">
                    <span className="font-bold">Scan the QR Code-</span>Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                    inventore incidunt nobis.{' '}
                  </p>
                  <p className="mb-6 text-sm  md:text-xl xl:text-[24px] xl:py-2">
                    <span className="font-bold">Scan the QR Code-</span>Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                    inventore incidunt nobis.{' '}
                  </p>
                  <p className="mb-6 text-sm  md:text-xl xl:text-[24px] xl:py-2">
                    <span className="font-bold">Scan the QR Code-</span>Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                    inventore incidunt nobis.{' '}
                  </p>

                  <div className="flex flex-row">
                    <div className="mr-8">
                      <button className="px-4 py-2 font-semibold text-black bg-transparent border border-black rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent">
                        Get yours now
                      </button>
                    </div>
                    <div>
                      <button className="bg-[#FF5B9F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <div className="flex flex-row">
                          <div>For Teams</div>
                          <div className="flex items-end">
                            <Aerrow />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex order-1 lg:justify-center lg:order-2 lg:ml-auto">
                <Image
                  src={mobileImage}
                  alt="External Image"
                  width={900}
                  height={480}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Who;
