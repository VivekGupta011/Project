'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import BgGradiwnt1 from '../../../../../public/assests/bgcolor/Rectangle68@2x.png';
import BgGradiwnt2 from '../../../../../public/assests/Rectangle67@2x.png';
import BgGradiwnt3 from '../../../../../public/assests/Rectangle395@2x.png';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { CardSlidersingal } from '../Singlecard';
import { Container } from '../layouts';
import mobileImage1 from '../../../../../public/assests/Group-60@2x.png';
import mobileImage2 from '../../../../../public/assests/Group-6045@2x.png';
import mobileImage3 from '../../../../../public/assests/Group-6024@2x.png';

export default function App() {
  return (
    <>
      <div className="py-12 px-4 md:px-[6rem]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            250: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <CardSlidersingal
              mobileImage={mobileImage1}
              backgroundimg={BgGradiwnt1}
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <CardSlidersingal mobileImage={mobileImage3} width={300} height={150} />
          </SwiperSlide> */}
          <SwiperSlide>
            <CardSlidersingal
              mobileImage={mobileImage2}
              backgroundimg={BgGradiwnt2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardSlidersingal
              mobileImage={mobileImage3}
              backgroundimg={BgGradiwnt3}
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <CardSlidersingal
              mobileImage={mobileImage1}
              backgroundimg={BgGradiwnt1}
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}
