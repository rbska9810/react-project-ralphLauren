import React from 'react'
import MainVisual from './MainVisual'
import { Link } from 'react-router-dom'
import Header from './Header';
// Import Swiper React components
import { Navigation, Pagination, EffectCoverflow, Autoplay, EffectFade, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';

const MainPage = ({scrollPosition}) => {
  let headerColor = scrollPosition > 44 ? '#041E3A' : 'white';
    
  
  return (
    <div className='MainPage'>
      <Header scrollPosition={scrollPosition} headerColor={headerColor}/>
      <MainVisual />
      <section className="secondSlide" 
      style={{backgroundImage:`url(${process.env.PUBLIC_URL} /images/sectionBgimage.webp)`}}>
          {/* /images/sectionBgimage.webp */}
        <div className="section-left">
          <img src={process.env.PUBLIC_URL + '/images/image01.webp'} alt="img" />
          <h3>Boathouse</h3>
          <Link to={'/'}>쇼핑하기</Link>
        </div>
        <Swiper
          // install Swiper modules
          className='section-right'
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          effect="fade"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/images/imageSlide01.webp'} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/images/imageSlide02.webp'} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/images/imageSlide03.webp'} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/images/imageSlide04.webp'} alt="img" />
          </SwiperSlide>
          ...
        </Swiper>

      </section>
      <section className='spring' style={{backgroundImage:`url(${process.env.PUBLIC_URL} ./images/image02.webp)`}}>
        <div className="springContent">
          <img className='title' src={process.env.PUBLIC_URL+'./images/springTitle.svg'} alt="img" />
          <h3 className='subTitle'>spring</h3>
          <div className="buttonWrap">
            <Link to={'/'}>쇼핑하기</Link>
            <Link to={'/'}>더 둘러보기</Link>
          </div>
        </div>
      </section>
      <section className='poloId' style={{backgroundImage:`url(${process.env.PUBLIC_URL} ./images/image03.webp)`}}>
        <div className="poloIdContent">
          <h3>Polo ID</h3>
          <p>
            뉴 실루엣과 새로운 봄의 컬러로 제안하는<br/>
            폴로 아이디백 컬렉션
          </p>
          <Link to={'/'}>쇼핑하기</Link>
        </div>
      </section>
      <section className='naiomi' style={{backgroundImage:`url(${process.env.PUBLIC_URL} ./images/image04.webp)`}}>
        <div className="naiomiContent">
          <img src="https://cdn-fsly.yottaa.net/62b4643a4f1bbf4e83e90207/www.ralphlauren.co.kr/v~4b.49/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/ko_KR/v1711486588282/img/Brand_Logo_Library/SPECIAL-PROJECTS/AiR/2023_polo_air_naiomi_glasses_logo_en.svg?yocs=49_5G_4g_5M_" alt="im"/>
          <p>
            Ralph Lauren Artist in Residence 프로그램의 첫 콜라보레이션인 Polo Ralph Lauren & Naiomi Glasses는 나바호족의 유산과 수백 년간 이어져 온 직조 전통 기술을 기념합니다
          </p>
          <Link to={'/'}>DROP 2 컬렉션 보기</Link>
        </div>
      </section>
      <section className='double' style={{backgroundImage:`url(${process.env.PUBLIC_URL} ./images/image05.webp)`}}>
        <div className="doubleContent">
          <img src={process.env.PUBLIC_URL + './images/doubleTitle.svg'} alt="im"/>
          <div className="buttonWrap">
            <Link to={'/'}>남성 쇼핑하기</Link>
            <Link to={'/'}>여성 쇼핑하기</Link>
          </div>
        </div>
      </section>
      <section className='moreView'>
        <div className="contentTitle">
          <h3>더 둘러보기</h3>
          <p>엄선된 아이템과 시즌별 컬렉션을 살펴보세요.</p>
        </div>
        <Swiper
          // install Swiper modules
          className='contentSlide'
          modules={[Navigation, EffectCoverflow, Scrollbar]}
          spaceBetween={5}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          slidesPerView={1.2}
          breakpoints={{
            568:{
              slidesPerView:2.5,
              spaceBetween:10,
              },
          }}
        >
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/images/bottom-image01.webp'} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/images/bottom-image02.webp'} alt="img" /> 
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/images/bottom-image03.webp'} alt="img" />
          </SwiperSlide>
          ...
        </Swiper>
      </section>
    </div>
  )
}

export default MainPage