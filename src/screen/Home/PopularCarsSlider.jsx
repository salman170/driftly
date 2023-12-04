import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import BMWX7 from "../../assets/Home/BMW X7.png";
import MercedesAMGGLC from "../../assets/Home/Mercedes AMG GLC.png";
import AudiQ2 from "../../assets/Home/Audi Q2.png";
import Porsche from "../../assets/Home/Porsche.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./HomeSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function PopularCarsSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const data = [
    { img: BMWX7, title: "BMWX7" },
    { img: MercedesAMGGLC, title: "Mercedes AMG GLC" },
    { img: AudiQ2, title: "Audi Q2" },
    { img: Porsche, title: "Porsche" },
    { img: BMWX7, title: "BMWX7" },
    { img: MercedesAMGGLC, title: "Mercedes AMG GLC" },
    { img: AudiQ2, title: "Audi Q2" },
    { img: Porsche, title: "Porsche" },
  ];

  return (
    <>
      <div className="container relative mx-auto overflow-visible select-none">
        <Swiper
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="flex flex-col-reverse pt-10 overflow-hidden bg-transparent mySwiper"
        >
          <div className="justify-end hidden gap-4 mb-4 mr-10 -mt-10 md:flex ">
            <div
              ref={navigationPrevRef}
              className=" p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125"
            >
              <AiOutlineArrowLeft />
            </div>
            <div
              ref={navigationNextRef}
              className=" p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125"
            >
              <AiOutlineArrowRight />
            </div>
          </div>
          {/* <div className="h-10"></div> */}

          <div className="pb-10 overflow-hidden">
            {data.map((x, i) => {
              return (
                <SwiperSlide key={i} className="relative flex flex-col items-center" >
                  <div className="flex flex-col justify-center w-full overflow-hidden cursor-pointer h-[24rem]">
                    <img
                      src={x.img}
                      alt=""
                      srcSet=""
                      className="scale-110 w-min"
                    />
                    <div className="mt-8 text-xl font-semibold ">{x.title}</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
}
