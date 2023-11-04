import React from "react";
import Header from "../../others/Header";

const About = () => {
  return (
    <div>
      <Header />
      <HeroImage />
      <ImageBanner />
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

const ImageBanner2 = () => {
  return (
    <>
      <header>
        <div
          className='relative overflow-hidden bg-no-repeat bg-cover'
          style={{
            backgroundPosition: '50%',
            backgroundImage: `url('https://tecdn.b-cdn.net/img/new/slides/146.webp')`,
            height: '350px',
          }}
        >
          <div
            class='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          >
            <div class='flex h-full items-center justify-center'>
              <div class='px-6 text-center text-white md:px-12'>
                <h1 class='mb-6 text-5xl font-bold'>Heading</h1>
                <h3 class='mb-8 text-3xl font-bold'>Subeading</h3>
                <button
                  type='button'
                  class='inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default About;
