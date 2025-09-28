import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

const bannerImages = [
  './Images/banners4.png',
  './Images/banners2.png',
  './Images/banners1.webp',
  './Images/banners3.png',
];

const BannerSwiper = () => (
  <div className="banner-swiper-wrapper">
    <Swiper        
      mousewheel={true}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
      className="banner-swiper"
    >
      {bannerImages.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img}
            alt={`Banner ${idx + 1}`}
            className="banner-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default BannerSwiper;