import {useState} from 'react';
// import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';

import ButtonLiveChat from '../../styles/ButtonLiveChat/ButtonLiveChat';
import SliderButton from '../../styles/SliderButton/SliderButton';

const CategoryBlockImg = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow:hidden;
  margin-bottom:14px;
  img {
    width:100%;
    height:100%;
    display:block;
    object-fit: cover;
    transition:0.6s;
  }
`

const CategoryBlockInfo = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #212121;
  @media${({ theme }) => theme.media.small} {
    line-height:12px;
    line-height:15px;
  }
`

const CategoryBlock = styled.div`
  width:197px;
  height:269px;
  cursor:pointer;
  &:hover {
    ${CategoryBlockImg} {
      img {
        transform:scale(1.05,1.05);
        transition:0.6s;
      }
    }
  }
  @media${({ theme }) => theme.media.small} {
      width:120px;
      height:170px;
  }
`

const SliderName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 2.5em;
  line-height: 1.2em;
  color:  ${({ theme }) => theme.colors.font};
`

const BlockCategory = styled.div`
  position:relative;
  @media${({ theme }) => theme.media.small} {
    padding-bottom:50px;
  }

`
const BlockCategoryTop = styled.div`
  display:flex;
  justify-content:space-between;
  padding-bottom:15px;
  align-items:center;
`
const SliderBtnContainer = styled.div`
  position:absolute;
  top:0;
  left:180px;
  display:flex;
  justify-content:space-between;
  width:102px;
  @media${({ theme }) => theme.media.small} {
    top:240px;
    left:0;
    right:0;
    width:100%;
  }
`


export default () => {
  const [swiper, setSwiper] = useState(null);
  const nextToSlide = () => {
    swiper.slideNext();
  };
  const prevToSlide = () => {
    swiper.slidePrev();
  };
  return (
    <BlockCategory>
      <BlockCategoryTop>
        <SliderName>Categories</SliderName>

        <SliderBtnContainer>
          <SliderButton prev onClick={prevToSlide} />
          <SliderButton onClick={nextToSlide} />
        </SliderBtnContainer>

        <ButtonLiveChat href="#">Live Chat</ButtonLiveChat>

        
        
      </BlockCategoryTop>
      <Swiper
        // install Swiper modules
        // modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={40}
        slidesPerView={6}
        loop={true}
        loopAdditionalSlides={3}
        // navigation
        onSwiper={(swiper) => setSwiper(swiper)}
        // onSlideChange={() => console.log('slide change')}
        breakpoints={
          {
            "320": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "410": {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            "540": {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            "600": {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            "690": {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            "768": {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            "1120": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            "1440": {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }
        }
      >
        <SwiperSlide>
          <CategoryBlock>
            <CategoryBlockImg>
              <img src="../images/categories/abrasives.png" />
            </CategoryBlockImg>
            <CategoryBlockInfo>
              Abrasives
            </CategoryBlockInfo>
          </CategoryBlock>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBlock>
            <CategoryBlockImg>
              <img src="../images/categories/electrical.png" />
            </CategoryBlockImg>
            <CategoryBlockInfo>
              Electrical
            </CategoryBlockInfo>
          </CategoryBlock>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBlock>
            <CategoryBlockImg>
              <img src="../images/categories/welding.png" />
            </CategoryBlockImg>
            <CategoryBlockInfo>
              Welding
            </CategoryBlockInfo>
          </CategoryBlock>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBlock>
            <CategoryBlockImg>
              <img src="../images/categories/safety.png" />
            </CategoryBlockImg>
            <CategoryBlockInfo>
              Safety
            </CategoryBlockInfo>
          </CategoryBlock>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBlock>
            <CategoryBlockImg>
              <img src="../images/categories/fasteners.png" />
            </CategoryBlockImg>
            <CategoryBlockInfo>
              Fasteners
            </CategoryBlockInfo>
          </CategoryBlock>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBlock>
            <CategoryBlockImg>
              <img src="../images/categories/handtools.png" />
            </CategoryBlockImg>
            <CategoryBlockInfo>
              Hand Tools
            </CategoryBlockInfo>
          </CategoryBlock>
        </SwiperSlide>
      </Swiper>
    </BlockCategory>
  );
};