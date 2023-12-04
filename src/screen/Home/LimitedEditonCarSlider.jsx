import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import BMWi3 from "../../assets/Home/BMW i3.png";
// import JeepWrangler from "../../assets/Home/Jeep Wrangler.png";
// import AudiQ5 from "../../assets/Home/Audi Q5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./HomeSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function LimitedEditonCarSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const data = [
    {
      img: BMWi3,
      title: "Jeep Wrangler",
      detail: "Automatic (Torque Converter)",
      power: "1998 cc",
      type: "Petrol",
    },
    {
      img: BMWi3,
      title: "BMW i3",
      detail: "RWD & AWD",
      power: "1995 to 2998 cc",
      type: "Petrol & Diesel",
    },
    {
      img: BMWi3,
      title: "Audi Q5",
      detail: "4WD / AWD",
      power: "1968 to 1984 cc",
      type: "Petrol & Diesel",
    },
    {
      img: BMWi3,
      title: "Jeep Wrangler",
      detail: "Automatic (Torque Converter)",
      power: "1998 cc",
      type: "Petrol",
    },
    {
      img: BMWi3,
      title: "BMW i3",
      detail: "RWD & AWD",
      power: "1995 to 2998 cc",
      type: "Petrol & Diesel",
    },
    {
      img: BMWi3,
      title: "Audi Q5",
      detail: "4WD / AWD",
      power: "1968 to 1984 cc",
      type: "Petrol & Diesel",
    },
  ];

  return (
    <>
      <div className="relative overflow-visible select-none ">
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
            delay: 4000,
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="container flex flex-col-reverse pt-10 pl-10 pr-2 mx-auto overflow-hidden bg-transparent mySwiper"
        >
          <div className="justify-end hidden gap-4 mb-4 mr-20 -mt-10 md:flex ">
            <div
              ref={navigationPrevRef}
              className=" p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125 text-white"
            >
              <AiOutlineArrowLeft />
            </div>
            <div
              ref={navigationNextRef}
              className=" p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125 text-white"
            >
              <AiOutlineArrowRight />
            </div>
          </div>
          {/* <div className="h-10"></div> */}

          <div className="px-2 pb-10 overflow-hidden" >
            {data.map((x, i) => {
              return (
                <SwiperSlide key={i} className="relative pb-4 ">
                  <div className="flex flex-col justify-center w-full   h-[24rem] group">
                    <img
                      src={x.img}
                      alt=""
                      srcSet=""
                      className="scale-110 w-min "
                    />
                    <div className="mt-8 mb-4 text-3xl font-bold ">
                      {x.title}
                    </div>
                    <div className="mb-2 text-xl text-gray-500 group-hover:text-black ">
                      {x.detail}
                    </div>
                    <div className="mb-2 text-gray-500 group-hover:text-black">
                      <span>{x.power}</span> | <span>{x.type}</span>
                    </div>
                    <div className="flex gap-4 text-gray-500 group-hover:text-black ">
                      <input type="checkbox" name="compareCheckbox" id="" className="transform scale-125 cursor-pointer" />
                      <label htmlFor="compareCheckbox">COMPARE</label>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
        <div className="bg-white -mt-[17rem] h-[19rem] -z-10"></div>
      </div>
    </>
  );
}
