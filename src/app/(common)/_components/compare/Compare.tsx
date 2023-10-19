import React from 'react';
import Image from 'next/image';
import mobileImage from '../../../../../public/assests/Group 6048@2x.png';
import BgGradiwnt from '../../../../../public/assests/bgcolor/Rectangle419@2x.png';
import logopng from '../../../../../public/assests/blacklogopng.png';
import { Container } from '../layouts';
import { Aerrow } from '../icon/aerrow';
import { Vinklogoblack } from '../icon/vinkblack';
import { Vs } from '../icon/vs';
import { Right } from '../icon/right';
import { Subt } from '../icon/subtract';

const Compare = () => {
  return (
    <section
      className="md:pb-27.5 lg:py-29.5 pb-18 pt-11 md:pt-11"
      id="Vinkintro"
    >
      <Container>
        <div
          className="flex justify-center py-6 px-6 !bg-center !bg-no-repeat !bg-cover rounded-2xl"
          style={{ background: `url(${BgGradiwnt.src})` }}
        >
          {/* <div className="flex justify-centerpy py-10 px-10 !bg-center !bg-no-repeat !bg-cover rounded-[25px]" style={{ background: `url('https://i.ibb.co/McpVtxC/Rectangle-10.png')` }}> */}

          <div className="relative flex-grow min-w-0 max-w-screen px-9 lg:mx-9 lg:max-w-container lg:px-0 md:max-w-container-md">
            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col items-center justify-center order-2 lg:order-1">
                <div>
                  <div className="flex justify-between">
                    <div className="w-full">
                      {/* <Image
                        src={logopng}
                        alt="External Image"
                        width={250}
                        height={80}
                      /> */}
                      <Vinklogoblack/>
                    </div>
                    {/* <div><Vs/></div> */}
                    <div className="px-8 font-bold text-7xl">Vs</div>
                    <div className="flex items-center text-[2rem] font-bold  md:text-[3rem] lg:text-[3rem]">
                      PAPER
                    </div>
                  </div>
                </div>
                <ul className="flex items-center py-4">
                  <li>
                    {' '}
                    <Right />{' '}
                  </li>

                  <h4 className="text-[#C5C5C5] font-bold">----------</h4>

                  <li className="px-6 text-2xl font-bold">
                    {' '}
                    REAL TIME ANALYTICS{' '}
                  </li>
                  <h4 className="text-[#C5C5C5] font-bold">----------</h4>
                  <li>
                    {' '}
                    <Subt />{' '}
                  </li>
                </ul>
                <ul className="flex items-center py-4">
                  <li>
                    {' '}
                    <Right />{' '}
                  </li>

                  <h4 className="text-[#C5C5C5] font-bold">-------------</h4>

                  <li className="px-6 text-2xl font-bold"> CRM INTEGRATION </li>
                  <h4 className="text-[#C5C5C5] font-bold">-------------</h4>
                  <li>
                    {' '}
                    <Subt />{' '}
                  </li>
                </ul>
                <ul className="flex items-center py-4">
                  <li>
                    {' '}
                    <Right />{' '}
                  </li>

                  <h4 className="text-[#C5C5C5] font-bold">----------</h4>

                  <li className="px-6 text-2xl font-bold">
                    {' '}
                    INSTANTLY UPDATABLE
                  </li>
                  <h4 className="text-[#C5C5C5] font-bold">---------</h4>
                  <li>
                    {' '}
                    <Subt />{' '}
                  </li>
                </ul>
                <ul className="flex items-center py-4">
                  <li>
                    {' '}
                    <Right />{' '}
                  </li>

                  <h4 className="text-[#C5C5C5] font-bold">
                    ----------------------
                  </h4>

                  <li className="px-6 text-2xl font-bold"> DURABLE </li>
                  <h4 className="text-[#C5C5C5] font-bold">
                    ----------------------
                  </h4>
                  <li>
                    {' '}
                    <Subt />{' '}
                  </li>
                </ul>
                <ul className="flex items-center py-4">
                  <li>
                    {' '}
                    <Right />{' '}
                  </li>

                  <h4 className="text-[#C5C5C5] font-bold">
                    --------------------
                  </h4>
                  <li className="px-6 text-2xl font-bold"> USTAINABLE </li>
                  <h4 className="text-[#C5C5C5] font-bold">
                    --------------------
                  </h4>
                  <li>
                    {' '}
                    <Subt />{' '}
                  </li>
                </ul>
                <ul className="flex items-center py-4">
                  <li>
                    {' '}
                    <Right />{' '}
                  </li>

                  <h4 className="text-[#C5C5C5] font-bold">
                    -----------------
                  </h4>

                  <li className="px-6 text-2xl font-bold"> COST EFFECTIVE </li>
                  <h4 className="text-[#C5C5C5] font-bold">
                    -----------------
                  </h4>
                  <li>
                    {' '}
                    <Subt />{' '}
                  </li>
                </ul>
                <ul className="flex items-center py-4">
                  <li>
                    {' '}
                    <Right />{' '}
                  </li>

                  <h4 className="text-[#C5C5C5] font-bold">
                    --------------------
                  </h4>

                  <li className="px-6 text-2xl font-bold"> CONVENIENT </li>
                  <h4 className="text-[#C5C5C5] font-bold">
                    --------------------
                  </h4>
                  <li>
                    {' '}
                    <Subt />{' '}
                  </li>
                </ul>
              </div>
              <div className="relative flex order-1 w-full h-full lg:justify-center lg:order-2 lg:ml-auto">
                <Image
                  src={mobileImage}
                  alt="External Image"
                  width={500}
                  height={240}
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

export default Compare;
