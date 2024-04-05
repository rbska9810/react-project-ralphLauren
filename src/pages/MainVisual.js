import React from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Navigation, Pagination, EffectCoverflow, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const MainVisual = () => {
  return (
    <Swiper
      className='MainVisual'
      modules={[Navigation, Pagination, EffectCoverflow, EffectFade]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='slide01'>
        <img src={process.env.PUBLIC_URL + './images/slide00.webp'} alt="image" />
        <div className="text-box">
          <h2>polo</h2>
          <p className='subTitle'>ralph lauren</p>
          <h3>봄이니까, winter</h3>
          <p>순백이었다가 푸릇한 생기가 돋는날,</p>
          <p>폴로 랄프 로렌과 윈터의 첫 만남.봄이니까.</p>
          <div className="buttonWrap">
            <Link to={'/'}>쇼핑하기</Link>
            <Link to={'/'}>신상품 더 보기</Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide02'>
        <img src={process.env.PUBLIC_URL + './images/slide01.webp'} alt="image" />
      </SwiperSlide>
      <SwiperSlide className='slide03'>
        <img src={process.env.PUBLIC_URL + './images/slide02.webp'} alt="image" />
      </SwiperSlide>
      <SwiperSlide className='slide04'>
        <img src={process.env.PUBLIC_URL + './images/slide03.webp'} alt="image" />
      </SwiperSlide>
      <SwiperSlide className='slide05'>
        <img src={process.env.PUBLIC_URL + './images/slide04.webp'} alt="image" />
      </SwiperSlide>
    </Swiper>
  )
}

export default MainVisual