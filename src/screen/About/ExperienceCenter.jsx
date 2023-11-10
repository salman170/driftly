import React, { useRef } from "react";
import { Link } from "react-router-dom";

import CustomerExp from "../../assets/Home/DriftlyCustomerExp.png";
import Header from "../../others/Header";
import ExpArtboard from "../../assets/Home/Artboard.png";
import ExpAuto from "../../assets/Home/automated.png";
import ExpArt from "../../assets/Home/Art.png";
import ExpKey from "../../assets/Home/key.png";
import "./Style.css";
import { FaLocationDot } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const ExperienceCenter = () => {
  return (
    <>
      <Header />
      <DfCEC />
      <NearExp />
    </>
  );
};

const DfCEC = ({ butVisible }) => {
  const data = [
    {
      img: ExpKey,
      title: "Enjoy Free Test Drives",
      content:
        "All our cars include a free 1-year      warranty and roadside assistance for      total peace of mind",
    },
    {
      img: ExpArtboard,
      title: "Guest Lounge Area",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },
    {
      img: ExpAuto,
      title: "Automated Showrooms",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },
    {
      img: ExpArt,
      title: "State of the Art Interiors",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },
  ];
  return (
    <section className="overflow-hidden bg-[#171614]">
      <div className="relative mb-10 ">
        <img src={CustomerExp} alt="" srcSet="" className="w-full" />
        <div className=" lg:absolute top-1/4 left-[8%] container mx-auto w-full  text-white font-extralight  mt-10 lg:mt-0">
          <div className="mb-4 text-4xl">
            Driftly Customer <br></br>Experience Center
          </div>
          <div className="mb-4">
            Visit nearest Drively customer experience centre to <br />
            enjoy free test drives and much more
          </div>
          {butVisible && (
            <Link to="/experience-center">
              <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer text-white">
                VIEW ALL CENTER
              </div>
            </Link>
          )}
        </div>
        {/* <div className="absolute flex items-end justify-center p-4 text-3xl text-white bg-white border rounded-full top-1/2 w-min bg-opacity-20 ">
    <ImPlay3 />
  </div> 
         <div className="absolute text-white bg-white rounded-full top-1/2 text-8xl w-min bg-opacity-10 ">
    <BsPlayCircle />
  </div> */}
      </div>

      <div className="container py-10 mx-auto ">
        <div className="grid gap-2 lg:grid-cols-4">
          {data.map((x, i) => {
            return (
              <div key={i} className="space-y-4 text-white">
                <img src={x.img} alt="" />
                <div>{x.title}</div>
                <div className="text-sm font-extralight">{x.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const NearExp = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-start justify-between gap-10 p-2 mt-20">
          <div className="text-4xl font-extralight">
            Visit your Nearest Experience Center
          </div>
          <select
            name=""
            id=""
            className="p-2 border border-black rounded w-60 ra-select"
          >
            <option>Mumbai</option>
            <option>Hyderabad</option>
          </select>
        </div>
        <div className="flex items-start mt-7">
          <p>Customer Experience Centres in Mumbai</p>
        </div>
        <div className="flex items-start justify-start gap-8 p-3 mt-5 text-lg">
          <div className="flex items-center gap-4 ">
            <FaLocationDot style={{ color: "#0BF2B3" }} />
            <p className="text-[#0BF2B3]">Worli</p>
          </div>
          <div className="flex items-center gap-4">
            <SlLocationPin style={{ color: "#D3D3D3" }} />
            <p className="text-[#d3d3d3]">Andheri</p>
          </div>
          <div className="flex items-center gap-4">
            <SlLocationPin style={{ color: "#d3d3d3" }} />
            <p className="text-[#d3d3d3]">Lower Parel</p>
          </div>
        </div>

        <div class="container mx-auto flex p-3">
          <div class="w-1/2 flex items-center justify-between">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/image.webp"
              alt=""
              className="w-auto h-70"
            />
          </div>

          <div class="w-1/2 flex flex-col">
            <div class="flex-1 flex items-center justify-between">
              <div class="flex-1">
                <div class="mb-2">
                  <p className="font-light">Address</p>
                </div>

                <div className="text-sm font-light text-gray-400">
                  <p>
                    Ground Floor, <br />
                    Shiv Sagar Estate Road, D wing,<br></br>
                    Dr. Annie Besant Rd, Worli, Mumbai,<br></br>
                    Maharashtra 400018
                  </p>
                </div>
              </div>

              <div class="flex-1 flex justify-end">
                <div>
                  <button className="p-2">
                    <svg
                      width="180"
                      height="48"
                      viewBox="0 0 180 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="linear-gradient"
                          x1="0"
                          y1="0.5"
                          x2="1"
                          y2="0.5"
                        >
                          <stop offset="0" stopColor="#0BF2B3" />
                          <stop offset="1" stopColor="#00BAB8" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,0H156a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24H24A24,24,0,0,1,0,24V0A0,0,0,0,1,0,0Z"
                        fill="url(#linear-gradient)"
                      />
                      <text
                        x="50%"
                        y="50%"
                        fill="#fff"
                        text-anchor="middle"
                        alignment-baseline="middle"
                        fontSize="14"
                        dominant-baseline="middle"
                      >
                        <tspan x="50%" dy="0">
                          Locate
                        </tspan>
                      </text>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex-1 flex items-center justify-between mt-8">
              <div class="flex-1">
                <div class="mb-2">
                  <p className="font-light">Hours</p>
                </div>

                <div className="text-sm font-light text-gray-400">
                  <p>
                    Mon - Fri : 9:00 AM to 8:00 PM
                    <br />
                    Sat - Sun : 9:00 AM to 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div class="flex-1">
              <div className="overflow-hidden">
                <div className="container mx-auto font-extralight">
                  <div className="invisible my-5">Media Coverage</div>
                </div>
                <CiustomerReviewSlider />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container mx-auto flex mt-10">
          <div class="w-1/2 flex items-center justify-between">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/image.webp"
              alt=""
              className="w-auto h-70"
            />
          </div>

          <div class="w-1/2 flex flex-col">
            <div class="flex-1 flex items-center justify-between">
              <div class="flex-1">
                <div class="mb-2">
                  <p className="font-light">Address</p>
                </div>

                <div className="text-sm font-light text-gray-400">
                  <p>
                    Ground Floor, <br />
                    Shiv Sagar Estate Road, D wing,<br></br>
                    Dr. Annie Besant Rd, Worli, Mumbai,<br></br>
                    Maharashtra 400018
                  </p>
                </div>
              </div>

              <div class="flex-1 flex justify-end">
                <div>
                  <button className="p-2">
                    <svg
                      width="180"
                      height="48"
                      viewBox="0 0 180 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="linear-gradient"
                          x1="0"
                          y1="0.5"
                          x2="1"
                          y2="0.5"
                        >
                          <stop offset="0" stopColor="#0BF2B3" />
                          <stop offset="1" stopColor="#00BAB8" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,0H156a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24H24A24,24,0,0,1,0,24V0A0,0,0,0,1,0,0Z"
                        fill="url(#linear-gradient)"
                      />
                      <text
                        x="50%"
                        y="50%"
                        fill="#fff"
                        text-anchor="middle"
                        alignment-baseline="middle"
                        fontSize="14"
                        dominant-baseline="middle"
                      >
                        <tspan x="50%" dy="0">
                          Locate
                        </tspan>
                      </text>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex-1 flex items-center justify-between mt-8">
              <div class="flex-1">
                <div class="mb-2">
                  <p className="font-light">Hours</p>
                </div>

                <div className="text-sm font-light text-gray-400">
                  <p>
                    Mon - Fri : 9:00 AM to 8:00 PM
                    <br />
                    Sat - Sun : 9:00 AM to 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div class="flex-1">
              <div className="overflow-hidden">
                <div className="container mx-auto font-extralight">
                  <div className="invisible my-5">Media Coverage</div>
                </div>
                <CiustomerReviewSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function CiustomerReviewSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const data = [
    {
      img: "",
      name: "New Insurance Policy",
      desg: "September 15, 2020",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quae ipsam vel unde, maiores eaque harum architecto alias
      at iure consectetur id dicta tempore eos saepe
      reprehenderit deleniti porro temporibus error.`,
    },
    {
      img: "",
      name: "Driftly No.1 Car buying Platform",
      desg: "September 15, 2020",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quae ipsam vel unde, maiores eaque harum architecto alias
      at iure consectetur id dicta tempore eos saepe
      reprehenderit deleniti porro temporibus error.`,
    },
    {
      img: "",
      name: "Buying made easy",
      desg: "September 15, 2020",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quae ipsam vel unde, maiores eaque harum architecto alias
      at iure consectetur id dicta tempore eos saepe
      reprehenderit deleniti porro temporibus error.`,
    },
    {
      img: "",
      name: "Experience Center",
      desg: "September 15, 2020",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quae ipsam vel unde, maiores eaque harum architecto alias
      at iure consectetur id dicta tempore eos saepe
      reprehenderit deleniti porro temporibus error.`,
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
      <div className="container mx-auto mb-5 overflow-visible select-none">
        <div className="">
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
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="relative overflow-visible customerSwiper"
          >
            <div className="absolute z-10 flex gap-2 right-2 md:right-10 -top-16 ">
              <div
                ref={navigationPrevRef}
                className=" p-1 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125"
              >
                <AiOutlineArrowLeft />
              </div>
              <div
                ref={navigationNextRef}
                className=" sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125"
              >
                <AiOutlineArrowRight />
              </div>
            </div>
            {data.map((x, i) => {
              return (
                <SwiperSlide
                  key={i}
                  className="relative h-full overflow-hidden "
                >
                  <div className="bg-white shadow-lg">
                    <div className="w-70 h-200">
                      <img
                        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image-3.webp"
                        alt="Card"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

            <div className="h-10"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ExperienceCenter;
