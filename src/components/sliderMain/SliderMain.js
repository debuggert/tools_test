import styled from 'styled-components';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import H1 from '../../styles/H1/H1';
import Button from '../../styles/Button/Button';

const Slide = styled.div`
  position:relative;
`

const SlideImgBox = styled.div`
  max-width:100%;
  position:relative;
  z-index:1;
  border-radius:16px;
  outline:none;
  img {
    display:block;
    width:100%;
    height:auto;
    max-width:100%;
    margin:0 auto;
  }
`

const SlideContent = styled.div`
  width:100%;
  max-width: 1184px;
  background: linear-gradient(90.36deg, #1F2670 29.82%, rgba(39, 48, 139, 0) 99.68%);
  border-radius: 16px 0px 0px 16px;
`


export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Slide>
          <SlideImgBox>
            <img src="../images/main/sliderMain_bg1.jpg" />
          </SlideImgBox>
        </Slide>

      </SwiperSlide>
      <SwiperSlide>Slide 2<br/><br/><br/></SwiperSlide>
      <SwiperSlide>Slide 3<br/><br/><br/></SwiperSlide>
      <SwiperSlide>Slide 4<br/><br/><br/></SwiperSlide>
    </Swiper>
  );
};