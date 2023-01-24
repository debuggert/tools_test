import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
`

const SliderName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 2.5em;
  line-height: 1.2em;
  color:  ${({ theme }) => theme.colors.font};
`


export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={20}
      slidesPerView={6}
      loop={true}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
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
  );
};