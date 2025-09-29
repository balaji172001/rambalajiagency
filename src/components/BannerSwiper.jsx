import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

const bannerImages = [
  './Images/banners4.webp',
  './Images/banners2.webp',
  './Images/banners1.webp',
  './Images/banners3.webp',
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
            className="banner-image" onError={(e) => { e.target.onerror = null; e.target.src = {img}; }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default BannerSwiper;