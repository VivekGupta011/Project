'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';
// import required modules
import { Navigation } from 'swiper/modules';
import { Apple } from '../icon/brandicon/apple';
import { Moto } from '../icon/brandicon/motrola';
import { Champion } from '../icon/brandicon/champion';
import { Fossil } from '../icon/brandicon/fossile';
import { Gap } from '../icon/brandicon/gap';
import { Loco } from '../icon/brandicon/lacostelogo';
import { Puma } from '../icon/brandicon/puma';
import { Samsung } from '../icon/brandicon/smasung';

const Testimonial: React.FC = () => {
  const text = 'See what our clients think about Vink Card:';
  const Paragraphtext =
    '+2,000 individuals and companies have experienced the future of networking with Link';
  return (
    <>
      {/* <Header text={Paragraphtext} checkBg={false} /> */}
      <div className=''>
        <div className='px-[34px] md:py-3 md:px-12'>
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              250: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Apple />
            </SwiperSlide>
            <SwiperSlide>
              <Moto />
            </SwiperSlide>
            <SwiperSlide>
              <Champion />
            </SwiperSlide>
            <SwiperSlide>
              <Fossil />
            </SwiperSlide>
            <SwiperSlide>
              <Gap />
            </SwiperSlide>
            <SwiperSlide>
              <Loco />
            </SwiperSlide>
            <SwiperSlide>
              <Puma />
            </SwiperSlide>
            <SwiperSlide>
              <Samsung />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
