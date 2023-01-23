import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1<br/><br/><br/></SwiperSlide>
      <SwiperSlide>Slide 2<br/><br/><br/></SwiperSlide>
      <SwiperSlide>Slide 3<br/><br/><br/></SwiperSlide>
      <SwiperSlide>Slide 4<br/><br/><br/></SwiperSlide>
    </Swiper>
  );
};