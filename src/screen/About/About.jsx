import React, { useRef } from 'react';
import Header from '../../others/Header';
import CustomerReview from '../Home/CustomerReview';
import { DCEC } from '../Home/Home';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import customerReview from './../../assets/How It Works/CustomerReview1.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "./HomeSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const About = () => {
  return (
    <div>
      <Header />
      <HeroImage />
      <ImageBanner />
      <CardLayout />
      <CustomerReview />
      <DCEC />
      <CardSlider />
    </div>
  );
};

const HeroImage = () => {
  return (
    <>
      <header>
        <div
          className='relative overflow-hidden bg-cover bg-no-repeat'
          style={{
            backgroundPosition: '50%',

            backgroundImage: `url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image.webp')`,

            height: '350px',
          }}
        >
          <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
            <div className='container mx-auto px-4 flex h-full mt-10'>
              <div className='p-6 text-left text-white md:px-12'>
                <div className='mt-2 text-xl font-bold tracking-tight md:text-4xl xl:text-4xl'>
                  We sell cars, but <br></br>we aren't car salesmen <br />
                  <span>Hotel Inner Circle</span>
                </div>

                <div className='p-2 text-xs'>
                  Your experience doesn’t end once you get the keys. Our goal is
                  to <br></br>make sure you have peace of mind when it comes to
                  your new ride.
                </div>

                <button className='p-2'>
                  <svg
                    width='180'
                    height='48'
                    viewBox='0 0 180 48'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs>
                      <linearGradient
                        id='linear-gradient'
                        x1='0'
                        y1='0.5'
                        x2='1'
                        y2='0.5'
                      >
                        <stop offset='0' stopColor='#0BF2B3' />
                        <stop offset='1' stopColor='#00BAB8' />
                      </linearGradient>
                    </defs>
                    <path
                      d='M0,0H156a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24H24A24,24,0,0,1,0,24V0A0,0,0,0,1,0,0Z'
                      fill='url(#linear-gradient)'
                    />
                    <text
                      transform='translate(90 29)'
                      fill='#fff'
                      fontSize='14'
                    >
                      <tspan x='-62.48' y='0'>
                        SEE HOW IT WORKS
                      </tspan>
                    </text>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const ImageBanner = () => {
  return (
    <>
      <div className='container p-4 mx-auto'>
        <div
          className='relative p-12 overflow-hidden text-center bg-no-repeat bg-cover'
          style={{
            backgroundImage: `url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/about-banner.webp')`,
            height: '400px',
          }}
        >
          <div
            className='absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          >
            <div className='flex items-center justify-center h-full'>
              <div className='text-white'>
                <h4 className='mb-6 text-xl font-regular'>
                  We want to make buying your next car no different to ordering
                  any other product today. Where consumers can simply and
                  seamlessly buy, finance or subscribe to a car entirely online
                  for delivery or collection in as little as 72 hours.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CardLayout = () => {
  return (
    <div className='my-12 mx-auto px-4 md:px-12 bg-black text-white'>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        <div className='container mx-auto px-4 flex h-full mt-10'>
          <div className='text-left text-white  lg:pt-2'>
            <div className='mt-2 text-xs font-extralight tracking-tight md:text-4xl xl:text-m'>
              Our Values
            </div>

            <div className='p-2 text-xs'>
              To give our customers the best car experience, <br></br>we stand
              by our key values. We are:
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4 flex h-full mt-3 pl-1'>
          <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
            <article className='overflow-hidden'>
              <a href='#'>
                <img
                  alt='Placeholder'
                  className='block h-auto w-full'
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image-1.webp'
                />
              </a>

              <a href='#' className='block max-w-sm pt-2'>
                <h5 className='text-xl font-normal tracking-tight'>
                  Customer Obsessed
                </h5>
                <p className='font-light text-sm text-gray-700 dark:text-gray-400'>
                  We put the customer first in everything we do. We want to be
                  famous for delivering the best experience and wowing our
                  customers.
                </p>
              </a>
            </article>
          </div>
          <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
            <article className='overflow-hidden'>
              <a href='#'>
                <img
                  alt='Placeholder'
                  className='block h-auto w-full'
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image-2.webp'
                />
              </a>

              <a href='#' className='block max-w-sm pt-2'>
                <h5 className='mb-2 text-xl font-normal tracking-tight'>
                  Fast Drivers
                </h5>
                <p className='font-light text-sm text-gray-700 dark:text-gray-400'>
                  We have an entrepreneurial passion for working at speed. We
                  move fast and drive fast towards our goals.
                </p>
              </a>
            </article>
          </div>
          <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
            <article className='overflow-hidden'>
              <a href='#'>
                <img
                  alt='Placeholder'
                  className='block h-auto w-full'
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image-3.webp'
                />
              </a>

              <a href='#' className='block max-w-sm pt-2'>
                <h5 className='mb-2 text-xl font-normal tracking-tight'>
                  Data Driven
                </h5>
                <p className='font-light text-sm text-gray-700 dark:text-gray-400'>
                  Data is a part of our DNA and drives all decision making.
                  We're informed, results-driven and seek insights to help us
                  improve and grow.
                </p>
              </a>
            </article>
          </div>
          <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
            <article className='overflow-hidden'>
              <a href='#'>
                <img
                  alt='Placeholder'
                  className='block h-auto w-full'
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image-4.webp'
                />
              </a>

              <a href='#' className='block max-w-sm pt-2'>
                <h5 className='mb-2 text-xl font-normal tracking-tight'>
                  Team Players
                </h5>
                <p className='font-light text-sm text-gray-700 dark:text-gray-400'>
                  We're better as a team than as individuals. Everyone counts.
                  We're here to have fun and win together on this exciting
                  journey.
                </p>
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardSlider = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <div className='container mx-auto  font-extralight'>
          <div className='pl-6 my-10 text-4xl'>Media Coverage</div>
        </div>
        <CiustomerReviewSlider />
      </div>
    </>
  );
};

function CiustomerReviewSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const data = [
    {
      img: '',
      name: 'card 1',
      desg: 'Founder',
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quae ipsam vel unde, maiores eaque harum architecto alias
      at iure consectetur id dicta tempore eos saepe
      reprehenderit deleniti porro temporibus error.`,
    },
    {
      img: '',
      name: 'card 2',
      desg: 'Chairman & Managing Director',
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quae ipsam vel unde, maiores eaque harum architecto alias
      at iure consectetur id dicta tempore eos saepe
      reprehenderit deleniti porro temporibus error.`,
    },
    {
      img: '',
      name: 'card 3',
      desg: 'JOINT MANAGING DIRECTOR',
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quae ipsam vel unde, maiores eaque harum architecto alias
      at iure consectetur id dicta tempore eos saepe
      reprehenderit deleniti porro temporibus error.`,
    },
    {
      img: '',
      name: 'card 4',
      desg: 'DIRECTOR OF SALES & MARKETING',
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quae ipsam vel unde, maiores eaque harum architecto alias
      at iure consectetur id dicta tempore eos saepe
      reprehenderit deleniti porro temporibus error.`,
    },
    {
      img: '',
      name: 'card 5',
      desg: 'VICE PRESIDENT FINANCE',
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
      <div className='container mx-auto mb-10 overflow-visible select-none'>
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className='relative overflow-visible customerSwiper'
        >
          <div className='absolute z-10 flex gap-4 right-2 md:right-20 -top-16 '>
            <div
              ref={navigationPrevRef}
              className=' p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125'
            >
              <AiOutlineArrowLeft />
            </div>
            <div
              ref={navigationNextRef}
              className=' p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125'
            >
              <AiOutlineArrowRight />
            </div>
          </div>
          {data.map((x, i) => {
            return (
              <SwiperSlide key={i} className='relative h-full overflow-hidden '>
                <div className='bg-white shadow-lg'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image-3.webp'
                    alt='Card Image'
                    className='object-cover w-100 h-300'
                  />
                  <div className=''>
                    <h2 className='text-xl font-semibold'>{x.name}</h2>
                    <p className='mt-2 text-gray-600'>{x.desg}</p>
                    <p className='mt-2 text-gray-600'>{x.body}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          {/* <div className="absolute z-10 text-white bottom-10 right-44 md:bottom-[83px]">
          2/3
         </div> */}

          <div className='h-10'></div>
        </Swiper>
      </div>
    </>
  );
}

export default About;
