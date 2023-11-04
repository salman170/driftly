import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import customerReview from "./../../assets/How It Works/CustomerReview1.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./HomeSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function CustomerReviewSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const data = [
    {
      img: "",
      name: "The inspection & security they give you is very much impressive",
      desg: "Founder",
      body: "A person of strong principles who believed in Gandhian Philosophy Customer is God. He inculcated Customer Centric Culture which is the corner stone of our organization. We always strived to imbibe the same culture in Saboo RKS operations.",
    },
    {
      img: "",
      name: "The inspection & security they give you is very much impressive",
      desg: "Chairman & Managing Director",
      body: "A visionary entrepreneur with over four decades of experience in the automobile sector. He began his journey as a dealer for Luna mopeds and Kinetic scooters in 1973. He served as a Director in Kinetic Leasing & Finance Ltd. ",
    },
    {
      img: "",
      name: "The inspection & security they give you is very much impressive",
      desg: "JOINT MANAGING DIRECTOR",
      body: "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    },
    {
      img: "",
      name: "The inspection & security they give you is very much impressive",
      desg: "DIRECTOR OF SALES & MARKETING",
      body: "He brings a strong financial background, having worked at Ernst & Young for three years and Purnartha Investment Advisory for one year. In 2016, he joined the family business, Saboo RKS, with a vision to carry forward the legacy. ",
    },
    {
      img: "",
      name: "The inspection & security they give you is very much impressive",
      desg: "VICE PRESIDENT FINANCE",
      body: "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    },
  ];
  const styles = `
    .customerSwiper .swiper-slide {
     opacity: 0.5;
     
    }

    .customerSwiper .swiper-slide-active  {
      opacity: 1;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="container mx-auto mb-10 overflow-visible select-none">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="relative overflow-visible customerSwiper"
        >
          <div className="absolute z-10 flex  gap-4 right-2 md:right-20  -top-16 ">
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
          {data.map((x, i) => {
            return (
              <SwiperSlide
                key={i}
                className="relative h-full overflow-hidden border-2   "
              >
                <div className=" overflow-hidden bg-[#171614]  duration-200 grid grid-cols-3">
                  <div className="p-4 my-auto space-y-3 text-left h-full lg:p-6  text-white flex flex-col justify-center ">
                    <div className="mb-3 lg:text-2xl font-semibold uppercase ml-6">
                      " {x.name} "
                    </div>
                    <div className="flex  gap-4">
                      <div className="w-1.5 round3 bg-gradient-to-tr from-[#00bbb8] to-[#0cf2b4] h-full rounded-full"></div>
                      <div className="pt-4">
                        <span className="font-medium lg:font-bold">
                          Amit Kumar,{" "}
                        </span>{" "}
                        <span className="font-extralight"> Mumbai</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <img
                      src={customerReview}
                      srcSet=""
                      className="w-full"
                      alt=""
                    />
                  </div>

                  {/* <div className="p-4 my-auto space-y-3 text-left sm:w-1/2 lg:p-6">
                    <div className="h-0.5 bg-[#1D3A8A] mb-6 group-hover:w-[100%] w-[50%] duration-300"></div>
                    <div className="mb-3 text-xl font-semibold uppercase">
                      {x.name}
                    </div>
                    <div className="uppercase">{x.desg}</div>
                    <div className="text-sm">{x.body}</div>
                  </div> */}
                </div>
              </SwiperSlide>
            );
          })}

          {/* <div className="absolute z-10 text-white bottom-10 right-44 md:bottom-[83px]">
          2/3
         </div> */}

          <div className="h-10"></div>
        </Swiper>
      </div>
    </>
  );
}
