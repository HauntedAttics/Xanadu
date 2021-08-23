import React, { memo } from 'react'
import { FilmRollsWrappers } from './style'
import { Divider } from 'antd';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow, Pagination, Mousewheel
} from 'swiper/core';

import imgURL01 from '../../assets/image/film (1).jpg'
import imgURL02 from '../../assets/image/film (2).jpg'
import imgURL03 from '../../assets/image/film (3).jpg'
import imgURL04 from '../../assets/image/film (4).jpg'
import imgURL05 from '../../assets/image/film (5).jpg'
import imgURL06 from '../../assets/image/film (6).jpg'
import imgURL07 from '../../assets/image/film (7).jpg'
import imgURL08 from '../../assets/image/film (8).jpg'
import imgURL09 from '../../assets/image/film (9).jpg'

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Mousewheel]);


export default memo(function FilmRolls() {

  document.documentElement.scrollTop = 0
  
  return (
    <FilmRollsWrappers>
      <h1 style={{fontSize: '40px'}}>FilmRolls</h1>
      <h2>This is my personal film photography.</h2>
      <>
        <Swiper effect={'coverflow'} loop={true} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} mousewheel={true} coverflowEffect={{
          "rotate": 20,
          "stretch": 0,
          "depth": 600,
          "modifier": 1,
          "slideShadows": true,
        }} pagination={true} className="mySwiper">
          <SwiperSlide><img width='600px' height='450px' src={imgURL01} alt=''/></SwiperSlide>
          <SwiperSlide><img width='600px' height='450px' src={imgURL02} alt=''/></SwiperSlide>
          <SwiperSlide><img width='600px' height='450px' src={imgURL03} alt=''/></SwiperSlide>
          <SwiperSlide><img width='600px' height='450px' src={imgURL04} alt=''/></SwiperSlide>
          <SwiperSlide><img width='600px' height='450px' src={imgURL05} alt=''/></SwiperSlide>
          <SwiperSlide><img width='600px' height='450px' src={imgURL06} alt=''/></SwiperSlide>
          <SwiperSlide><img width='600px' height='450px' src={imgURL07} alt=''/></SwiperSlide>
          <SwiperSlide><img width='600px' height='450px' src={imgURL08} alt=''/></SwiperSlide>
          <SwiperSlide><img width='600px' height='450px' src={imgURL09} alt=''/></SwiperSlide>
        </Swiper>
      </>
      <Divider/>
    </FilmRollsWrappers>
  )
})
