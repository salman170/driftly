import React, { useRef } from 'react';
import Header from '../../others/Header';
import CustomerReview from '../Home/CustomerReview';
import { DCEC } from '../Home/Home';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

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
      <Footer />
    </div>
  );
};

const HeroImage = () => {
  return (
    <>
      <header>
        <div
          class='relative overflow-hidden bg-cover bg-no-repeat'
          style={{
            backgroundPosition: '50%',

            backgroundImage: `url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image.webp')`,

            height: '350px',
          }}
        >
          <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
            <div class='container mx-auto px-4 flex h-full mt-10'>
              <div class='p-6 text-left text-white md:px-12'>
                <div class='mt-2 text-xl font-bold tracking-tight md:text-4xl xl:text-4xl'>
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
                <h4 className='mb-6 text-base font-light tracking-wide italic leading-loose'>
                  We want to make buying your next car no different to ordering
                  any other product today. <br></br>Where consumers can simply
                  and seamlessly buy, finance or subscribe to a car entirely
                  online
                  <br />
                  for delivery or collection in as little as 72 hours.
                </h4>
                <div className='text-sm font-semibold italic'>
                  -&nbsp;John Doe
                </div>
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
    <>
      <div class='my-12 mx-auto px-4 md:px-12 bg-black text-white'>
        <div class='flex flex-wrap -mx-1 lg:-mx-4'>
          <div class='container mx-auto px-4 flex h-full mt-10'>
            <div class='text-left text-white  lg:pt-2'>
              <div class='mt-2 text-xs font-extralight tracking-tight md:text-4xl xl:text-m'>
                Our Values
              </div>

              <div className='p-2 text-xs'>
                To give our customers the best car experience, <br></br>we stand
                by our key values. We are:
              </div>
            </div>
          </div>
          <div class='container mx-auto px-4 flex h-full mt-3 pl-1'>
            <div class='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
              <article class='overflow-hidden'>
                <a href='/'>
                  <img
                    alt='Placeholder'
                    class='block h-auto w-full'
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image-1.webp'
                  />
                </a>

                <a href='/' class='block max-w-sm pt-2'>
                  <h5 class='text-xl font-normal tracking-tight'>
                    Customer Obsessed
                  </h5>
                  <p class='font-light text-sm text-white'>
                    We put the customer first in everything we do. We want to be
                    famous for delivering the best experience and wowing our
                    customers.
                  </p>
                </a>
              </article>
            </div>
            <div class='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
              <article class='overflow-hidden'>
                <a href='/'>
                  <img
                    alt='Placeholder'
                    class='block h-auto w-full'
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image-2.webp'
                  />
                </a>

                <a href='/' class='block max-w-sm pt-2'>
                  <h5 class='mb-2 text-xl font-normal tracking-tight'>
                    Fast Drivers
                  </h5>
                  <p class='font-light text-sm text-white '>
                    We have an entrepreneurial passion for working at speed. We
                    move fast and drive fast towards our goals.
                  </p>
                </a>
              </article>
            </div>
            <div class='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
              <article class='overflow-hidden'>
                <a href='/'>
                  <img
                    alt='Placeholder'
                    class='block h-auto w-full'
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image-3.webp'
                  />
                </a>

                <a href='/' class='block max-w-sm pt-2'>
                  <h5 class='mb-2 text-xl font-normal tracking-tight'>
                    Data Driven
                  </h5>
                  <p class='font-light text-sm text-white '>
                    Data is a part of our DNA and drives all decision making.
                    We're informed, results-driven and seek insights to help us
                    improve and grow.
                  </p>
                </a>
              </article>
            </div>
            <div class='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
              <article class='overflow-hidden'>
                <a href='/'>
                  <img
                    alt='Placeholder'
                    class='block h-auto w-full'
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image-4.webp'
                  />
                </a>

                <a href='/' class='block max-w-sm pt-2'>
                  <h5 class='mb-2 text-xl font-normal tracking-tight'>
                    Team Players
                  </h5>
                  <p class='font-light text-sm text-white '>
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
    </>
  );
};

const CardSlider = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <div className=' container mx-auto font-extralight'>
          <div className='my-10 text-4xl pl-6'>Media Coverage</div>
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
      name: 'New Insurance Policy',
      desg: 'September 15, 2020',
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quae ipsam vel unde, maiores eaque harum architecto alias
      at iure consectetur id dicta tempore eos saepe
      reprehenderit deleniti porro temporibus error.`,
    },
    {
      img: '',
      name: 'Driftly No.1 Car buying Platform',
      desg: 'September 15, 2020',
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quae ipsam vel unde, maiores eaque harum architecto alias
      at iure consectetur id dicta tempore eos saepe
      reprehenderit deleniti porro temporibus error.`,
    },
    {
      img: '',
      name: 'Buying made easy',
      desg: 'September 15, 2020',
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quae ipsam vel unde, maiores eaque harum architecto alias
      at iure consectetur id dicta tempore eos saepe
      reprehenderit deleniti porro temporibus error.`,
    },
    {
      img: '',
      name: 'Experience Center',
      desg: 'September 15, 2020',
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
      <div className='container mx-auto mb-5 overflow-visible select-none'>
        <div className=''>
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
            className='relative overflow-visible customerSwiper'
          >
            <div className='absolute z-10 flex  gap-2 right-2 md:right-10  -top-16 '>
              <div
                ref={navigationPrevRef}
                className=' p-1 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125'
              >
                <AiOutlineArrowLeft />
              </div>
              <div
                ref={navigationNextRef}
                className=' sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125'
              >
                <AiOutlineArrowRight />
              </div>
            </div>
            {data.map((x, i) => {
              return (
                <SwiperSlide
                  key={i}
                  className='relative h-full overflow-hidden '
                >
                  <div className='bg-white shadow-lg'>
                    <div className='w-70 h-200'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image-3.webp'
                        alt='Card'
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='p-1'>
                      <h2 className='text-sm md:text-base font-semibold'>
                        {x.name}
                      </h2>
                      <p className='text-xs font-extralight md:text-sm text-gray-600 mt-1'>
                        {x.desg}
                      </p>
                      <p className='text-sm font-light md:text-base text-gray-900 mt-1'>
                        {x.body}
                      </p>
                      <a
                        href='/'
                        className='text-xs md:text-sm text-[#0CF2B4] underline'
                      >
                        View
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

            <div className='h-10'></div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export const Footer = () => {
  return (
    <>
      <footer class=' text-center text-white bg-black  lg:text-left'>
        <div className='container mx-auto'>
          <div class='mx-6 py-10 text-left md:text-left'>
            <div className='flex'>
              <img
                className='h-10 w-auto sm:h-16'
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/Driftly_Logo_Reverse.webp'
                alt=''
              />
            </div>

            <div class='grid-1 grid gap-1 md:grid-cols-2 lg:grid-cols-5 justify-between'>
              <div class='w-30 p-2'>
                <p className='font-thin'>
                  If you need any help, we're available from{' '}
                  <span className='font-bold'>8am-8pm, 7 days</span> a week
                </p>
                <br />
                <p className='font-thin'>
                  Call us on{' '}
                  <span className='font-bold'>040&nbsp;2593&nbsp;5587</span>
                </p>
                <br />
                <p className='font-thin'>
                  Whatsapp us{' '}
                  <span className='font-bold'>+91&nbsp;9817287234</span>
                </p>
              </div>

              <div class='font-light w-40 m-auto'>
                <p class='mb-4 flex justify-center uppercase md:justify-start'>
                  Search Cars
                </p>
                <p class='mb-4'>
                  <a href='/sell' class='text-white '>
                    Sell/Trade
                  </a>
                </p>
                <p class='mb-4'>
                  <a href='/finance' class='text-white '>
                    Financing
                  </a>
                </p>
                <p class='mb-4'>
                  <a href='/car-care' class='text-white '>
                    Car Care
                  </a>
                </p>
              </div>

              <div class='font-light w-40 m-auto'>
                <p class='mb-4'>
                  <a href='/how-it-works' class='text-white '>
                    How it Works
                  </a>
                </p>
                <p class='mb-4'>
                  <a href='/about' class='text-white '>
                    About Us
                  </a>
                </p>
                <p class='mb-4'>
                  <a href='#!' class='text-white '>
                    Careers
                  </a>
                </p>
                <p class='mb-4'>
                  <a href='/support' class='text-white '>
                    Support
                  </a>
                </p>
              </div>

              <div class='font-light w-40 m-auto'>
                <h6 class='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                  FOLLOW US
                </h6>
                <p class='mb-4'>
                  <a href='#!' class='text-white '>
                    Facebook
                  </a>
                </p>
                <p class='mb-4'>
                  <a href='#!' class='text-white '>
                    Twitter
                  </a>
                </p>
                <p class='mb-4'>
                  <a href='#!' class='text-white '>
                    Instagram
                  </a>
                </p>
              </div>

              <div className='m-auto'>
                <h6 class='mb-4 m-auto w-80 flex justify-center font-semibold uppercase md:justify-start'>
                  Subscribe to our newsletter
                </h6>
                <div class=''>
                  <div class='max-w-md mx-auto overflow-hidden md:max-w-xl'>
                    <div class='md:flex'>
                      <div class='w-full'>
                        <div class='relative'>
                          {' '}
                          <input
                            type='text'
                            class='bg-white h-10 w-full px-4 pr-20 focus:outline-none hover:cursor-pointer'
                            name=''
                          />
                          <button class='h-10 text-black absolute  text-2xl right-0 px-3 hover:text-[#0cf2b4] hover:scale-125'>
                            <AiOutlineArrowRight />
                          </button>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-t-2'></div>
          <div class='flex items-center justify-center text-gray-400 border-neutral-200 p-6  lg:justify-between '>
            <div class='mr-12 hidden lg:block'>
              <span>©Driftly 2021. All rights reserved</span>
            </div>

            <div class='flex justify-center'>
              <p className='mr-1'>Site map</p>|
              <p className='ml-1'>Terms of Use</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
