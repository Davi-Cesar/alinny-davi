import "./fotos.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Pagination, Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Fotos() {
  const [larguraTela, setLaguraTela] = useState(false);

  useEffect(() => {
    const handleWidth = () => {
      window.innerWidth < 768 ? setLaguraTela(true) : setLaguraTela(false);
    };
    window.addEventListener("scroll", handleWidth);
  }, []);

  return (
    <>
      <div id="fotos" className="container-fotos">
        <div className="box-image">
          <Swiper
            slidesPerView={larguraTela ? 1 : 3}
            spaceBetween={30}
            pagination={true}
            // slide
            modules={[Virtual, Pagination, Autoplay, Navigation]}
            className="mySwiper"
            autoplay={{
              delay: 1000,
            }}
            enabled={true}
            navigation={true}
            grabCursor={true}
          >
            <SwiperSlide>
              <img src="/pw1.jpg" alt="foto do casal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw2.jpg" alt="foto do casal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw3.jpg" alt="foto do casal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw4.png" alt="foto do casal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw5.png" alt="foto do casal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw6.png" alt="foto do casal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw7.png" alt="foto do casal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw8.jpg" alt="foto do casal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw9.png" alt="foto do casal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw10.jpg" alt="foto do casal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw11.jpg" alt="foto do casal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pw12.jpg" alt="foto do casal" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
