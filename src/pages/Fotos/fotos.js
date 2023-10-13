import "./fotos.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export default function Fotos() {
  return (
    <>
      <div id="fotos" className="container-fotos">
        <div className="box-image">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            slide
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{ delay: 1000 }}
            navigation={true}
            allowSlideNext={true}
          >
            <SwiperSlide>
              <img src="/pw1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x805"
                alt="foto do casal"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x804"
                alt="foto do casal"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x803"
                alt="foto do casal"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x802"
                alt="foto do casal"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x801"
                alt="foto do casal"
              />
              Z
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/1000x810"
                alt="foto do casal"
              />
              Z
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
