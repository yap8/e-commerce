import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

import BannerItem from './BannerItem';
import banners from './banners';
import NavButton from './NavButton';

const Banners: React.FC = () => {
  return (
    <section className="relative">
      <Swiper slidesPerView={1} loop navigation>
        {banners.map((banner) => (
          <SwiperSlide>
            <BannerItem banner={banner} />
          </SwiperSlide>
        ))}
        <NavButton prev />
        <NavButton next />
      </Swiper>
    </section>
  );
};

export default Banners;
