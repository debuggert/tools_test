import BlockWithTextAndImg from '../blockWithTextAndImg/BlockWithTextAndImg';

import styled from 'styled-components';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './bullet.css';


import H1 from '../../styles/H1/H1';
import Button from '../../styles/Button/Button';

const SlideBox = styled.div`
  position:relative;
  overflow:hidden;
  border-radius:16px;
  max-height:675px;
  @${({theme}) => theme.media.extraLarge} {
    max-height:550px;
  }
`

const SlideImgBox = styled.div`
  max-width:100%;
  position:relative;
  z-index:1;
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
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  z-index:3;
  display:flex;
  align-items:flex-end;
  color:${({ theme }) => theme.colors.white};
`

const SlideContentWrapper = styled.div`
  max-width:582px;
  margin-left:96px;
  padding-bottom:84px;
  h1 {
    margin-bottom:110px;
  }
`


export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <SlideBox>
          <SlideImgBox>
            <img src="../images/main/sliderMain_bg1.jpg" />
          </SlideImgBox>
          <SlideContent>
            <SlideContentWrapper>
              <H1>Fiberglass and specialty metals are in&nbsp;stock across the United States</H1>
              <Button>Shop Now</Button>
            </SlideContentWrapper>
          </SlideContent>
        </SlideBox>

      </SwiperSlide>
      <SwiperSlide>
        <SlideBox>
          <BlockWithTextAndImg/>
        </SlideBox>
      </SwiperSlide>
      <SwiperSlide>
        <SlideBox>
            <SlideImgBox>
              <img src="../images/main/sliderMain_bg1.jpg" />
            </SlideImgBox>
            <SlideContent>
              <SlideContentWrapper>
                <H1>Fiberglass and specialty metals are in&nbsp;stock across the United States</H1>
                <Button>Shop Now</Button>
              </SlideContentWrapper>
            </SlideContent>
          </SlideBox>
      </SwiperSlide>
      <SwiperSlide>
        <SlideBox>
          <SlideImgBox>
            <img src="../images/main/bg_blockWithTextAndImg.jpg" />
          </SlideImgBox>
          <SlideContent>
            <SlideContentWrapper>
              <H1>Fiberglass and specialty metals are in&nbsp;stock across the United States</H1>
              <Button>Shop Now</Button>
            </SlideContentWrapper>
          </SlideContent>
        </SlideBox>
      </SwiperSlide>
      
    </Swiper>
  );
};