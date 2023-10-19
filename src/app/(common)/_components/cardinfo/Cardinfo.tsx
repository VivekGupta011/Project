import React from 'react';
import Image from 'next/image';
import mobileImage from '../../../../../public/assests/Group 6047@2x.png';
import { Container } from '../layouts';

const Cardinfo = () => {
  const maintextStyle = {
    background: 'linear-gradient(to right, #9C32BB, #FF5B9F)',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
  };
  return (
    <section
      className="md:pb-27.5 lg:py-29.5 pb-18 pt-11 md:pt-11"
      id="Vinkintro"
    >
      <Container>
        <div className="flex justify-center">
          <div className="relative flex-grow min-w-0 max-w-screen px-9 lg:mx-9 lg:max-w-container lg:px-0 md:max-w-container-md">
            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex items-center justify-center order-2 lg:order-2">
                <div>
                  <small className="font-bold">Al Ways With You</small>
                  <h2 className='className="mb-6 text-sm font-bold leading-4.5  md:text-xl md:mb-8 xl:text-[40px] xl:leading-[40px]'>
                    A Card to <span style={maintextStyle}>Last a Lifetime</span>{' '}
                  </h2>
                  <p className="mb-3 text-sm  md:text-xl xl:text-[24px] xl:py-2">
                    Our contactlnss business cards offor univorsal compatibil
                    ity with Android and iPhonc. Enjoy a lifetime of unlimited
                    Ecccss, with no hidden fees. Our NFC cards, proudly made in
                    the UK, arc designed for simpli-:ity and longevity. The
                    smart card that`s always ready.
                  </p>
                  <small className="font-bold">
                    Professional | Convenient | Sustainable
                  </small>
                </div>
              </div>
              <div className="relative flex order-1 w-full h-full lg:justify-center lg:order-1 lg:ml-auto">
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
  );
};

export default Cardinfo;
