import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import img1 from '../../assets/Rectangle 60.png'
import img2 from '../../assets/Rectangle 61.png'
import img3 from '../../assets/Rectangle 63.png'
import img4 from '../../assets/Rectangle 67.png'
import img5 from '../../assets/Rectangle 66.png'
import img6 from '../../assets/Rectangle 65.png'
export default function Swipe () {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img style={{width: '82%'}} src={img1} alt='' /></SwiperSlide>
      <SwiperSlide><img style={{width: '82%'}} src={img2} alt='' /> </SwiperSlide>
      <SwiperSlide><img style={{width: '82%'}} src={img3} alt='' /> </SwiperSlide>
      <SwiperSlide><img style={{width: '82%'}} src={img4} alt='' /> </SwiperSlide>
      <SwiperSlide><img style={{width: '82%'}} src={img5} alt='' /> </SwiperSlide>
      <SwiperSlide><img style={{width: '82%'}} src={img6} alt='' /> </SwiperSlide>
    </Swiper>
  );
};
