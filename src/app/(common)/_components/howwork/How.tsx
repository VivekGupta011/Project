import React from 'react';
import how1 from '../../../../../public/assests/mobile@2x (1).png';
import how2 from '../../../../../public/assests/mobile@2x-(1).png';
import how3 from '../../../../../public/assests/Group-712@2x.png';
import Image from 'next/image';
import { Container } from '../layouts';

const How = () => {
  const maintextStyle = {
    background: 'linear-gradient(to right, #9C32BB, #FF5B9F)',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
  };
  return (
    <>
      <Container>
        <h1 className="text-center text-[40px] py-5 font-bold">
          How It <span style={maintextStyle}>Work</span>
        </h1>
        <div className="grid grid-cols-12 gap-5 px-[3rem] py-6">
          <div className="col-span-12 px-3 py-4 sm:col-span-6 md:col-span-6 lg:col-span-4">
            <div className="flex justify-center">
              {' '}
              <Image src={how1} alt="External Image" width={700} height={380} />
            </div>
            <div>
              <h2 className="font-bold text-black py-6 text-center text-[24px]">
                1. Choose Your Favorite Product
              </h2>
              <p className="text-[#1D1F2C] text-[24px] text-center">
                Choose from a variety of smart products tailored to fit your
                lifestyle, brand and needs.
              </p>
            </div>
          </div>
          <div className="col-span-12 px-3 py-4 sm:col-span-6 md:col-span-6 lg:col-span-4 ">
            <div className="flex justify-center">
              <Image src={how2} alt="External Image" width={700} height={370} />
            </div>
            <div>
              <h2 className="font-bold text-black text-center py-6 text-[24px]">
                2. Setup Your Profile
              </h2>
              <p className="text-[#1D1F2C] text-[24px] text-center">
                Choose from a variety of smart products tailored to fit your
                lifestyle, brand and needs.
              </p>
            </div>
          </div>
          <div className="col-span-12 px-3 py-4 sm:col-span-6 md:col-span-6 lg:col-span-4">
            <div className="flex justify-center">
              <Image src={how3} alt="External Image" width={700} height={380} />
            </div>
            <div>
              <h2 className="font-bold text-black text-center py-6 text-[24px]">
                3. Share It With Everyone
              </h2>
              <p className="text-[#1D1F2C] text-[24px] text-center">
                Activate your product and you are all set! ✨ Share your profile
                using your Vink product or QR code.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default How;
