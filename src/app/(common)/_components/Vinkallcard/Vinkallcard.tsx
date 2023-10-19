"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import card1 from '../../../../../public/assests/1 (3)@2x.png';
import BgGradiwnt from '../../../../../public/assests/bgcolor/Rectangle419@2x.png';
import card2 from '../../../../../public/assests/customImage/2.3.png'
import card3 from '../../../../../public/assests/4@2x.png';
import card4 from '../../../../../public/assests/5 (1)@2x.png';
import BambooImg1 from '../../../../../public/assests/customImage/1.png';
import BambooImg2 from '../../../../../public/assests/customImage/2.png';
import BambooImg3 from '../../../../../public/assests/customImage/3.png';
import BambooImg4 from '../../../../../public/assests/customImage/4.png';
import { Container } from '../layouts';
import { Star } from '../icon/star';

const Vinkallcard = () => {

  // images data
  const imgs = [
    { id: 0, value: card1, color: "red" },
    { id: 1, value: card3, },
    { id: 2, value: card2 },
  ]

  // Define an array of color objects with background colors and image imports
  const colors = [
    {
      bgColorClass: 'bg-blue-400',
      image: BambooImg1,
    },
    {
      bgColorClass: 'bg-red-400',
      image: BambooImg2,
    },
    {
      bgColorClass: 'bg-yellow-400',
      image: BambooImg3,
    },
    {
      bgColorClass: 'bg-sky-400',
      image: BambooImg4,
    },
  ];
  // useState for image store
  const [val, setVal] = useState(colors[0].image);

  return (
    <>
      {/* <Container> */}
      <div
        className="my-2 py-[15px] md:my-6 md:py-[60px] px-[20px] flex flex-col !bg-center !bg-no-repeat !bg-cover rounded-2xl"
        style={{ background: `url(${BgGradiwnt.src})` }}
      >
        <div className="flex md:justify-start md:px-6 md:py-6">
          <h1 className="text-[#065D4D] font-bold text-[18px] text-center md:font-bold md:text-[24px] lg:text-[40px]">
            Most popular products
          </h1>
        </div>
        <div className="flex justify-around md:justify-start">
          <div className="md:flex">
            <div className="px-6 py-4 text-xl text-vink-pink-semi_light md:font-bold">
              All Products (20)
            </div>
            <div className="px-6 py-4  text-xl md:font-bold">Wood cards (10)</div>
          </div>
          <div className="md:flex md:items-center">
            <div className="px-6 py-4  text-xl md:font-bold">Metal Cards (8)</div>
            <div className="px-6 py-4  ml-auto text-xl text-vink-pink-semi_light md:font-bold">
              View all{' '}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="w-full px-2 mb-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div
              className="block max-w-[22rem] mx-auto"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <Image
                  src={val}
                  alt="External Image"
                  width={400}
                  height={300}
                />
              </div>
              <div className="flex justify-center">
                <Star />
              </div>
              <div className="flex justify-center font-bold text-black">
                4 Reviews
              </div>
              <div className="p-6">
                <strong className="flex justify-center text-black text-bold">
                  Bamboo_YLH
                </strong>
                <div className="flex justify-evenly">
                  <p className="text-black line-through">£79.00</p>
                  <p className="line-through text-[#1FC114]">£29.00</p>
                </div>
              </div>
              <div className='flex justify-center pb-4'>
                {colors.map((color, index) => (
                  <div key={index} className={`w-5 h-5 ${color.bgColorClass} rounded-full mx-2 ${val === color.image ? 'border border-black' : ''}`} onClick={() => { setVal(color.image) }}>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full px-2 mb-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div
              className="block max-w-[22rem] mx-auto"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <Image
                  src={card3}
                  alt="External Image"
                  width={700}
                  height={600}
                />
              </div>
              <div className="flex justify-center">
                <Star />
              </div>
              <div className="flex justify-center font-bold text-black">
                4 Reviews
              </div>
              <div className="p-6">
                <strong className="flex justify-center text-black text-bold">
                  Purple Metal Vink Smart Card
                </strong>
                <div className="flex justify-evenly">
                  <p className="text-black line-through">£79.00</p>
                  <p className="line-through text-[#1FC114]">£29.00</p>
                </div>
              </div>
              <div className='flex justify-center pb-4'>
                <div className="w-5 h-5 bg-blue-400 rounded-full mx-2"></div>
                <div className="w-5 h-5 bg-red-400 rounded-full mx-2"></div>
                <div className="w-5 h-5 bg-yellow-400 rounded-full mx-2"></div>
                <div className="w-5 h-5 bg-sky-400 rounded-full mx-2"></div>


              </div>
            </div>
          </div>

          <div>
            <div
              className="block max-w-[22rem] mx-auto"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <Image
                  src={card2}
                  alt="External Image"
                  width={700}
                  height={600}
                />
              </div>
              <div className="flex justify-center">
                <Star />
              </div>
              <div className="flex justify-center font-bold text-black">
                4 Reviews
              </div>
              <div className="p-6">
                <strong className="flex justify-center text-black text-bold">
                  Blue Metal Vink Smart Card
                </strong>
                <div className="flex justify-evenly">
                  <p className="text-black line-through">£79.00</p>
                  <p className="line-through text-[#1FC114]">£29.00</p>
                </div>
              </div>
              <div className='flex justify-center pb-4'>
                <div className="w-5 h-5 bg-blue-400 rounded-full mx-2"></div>
                <div className="w-5 h-5 bg-red-400 rounded-full mx-2"></div>
                <div className="w-5 h-5 bg-yellow-400 rounded-full mx-2"></div>
                <div className="w-5 h-5 bg-sky-400 rounded-full mx-2"></div>
              </div>
            </div>
          </div>
          <div className="w-full px-2 mb-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div
              className="block max-w-[22rem] mx-auto"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <Image
                  src={card3}
                  alt="External Image"
                  width={700}
                  height={600}
                />
              </div>
              <div className="flex justify-center">
                <Star />
              </div>
              <div className="flex justify-center font-bold text-black">
                4 Reviews
              </div>
              <div className="p-6">
                <strong className="flex justify-center text-black text-bold">
                  Sapele YLH
                </strong>
                <div className="flex justify-evenly">
                  <p className="text-black line-through">£79.00</p>
                  <p className="line-through text-[#1FC114]">£29.00</p>
                </div>

              </div>
              <div className='flex justify-center pb-4'>
                <div className="w-5 h-5 bg-blue-400 rounded-full mx-2"></div>
                <div className="w-5 h-5 bg-red-400 rounded-full mx-2"></div>
                <div className="w-5 h-5 bg-yellow-400 rounded-full mx-2"></div>
                <div className="w-5 h-5 bg-sky-400 rounded-full mx-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </>
  );
};

export default Vinkallcard;
