import React from 'react';
import Header from '../../others/Header';
import { AiOutlineHeart } from 'react-icons/ai';

const CarDetails = () => {
  return (
    <>
      <Header />
      <div className='container mx-auto px-4 mt-4'>
        <MainCarHeadere />
        <MainCarDisplay />
        <CarMainSpecs />
        <CarSummary />
        <KeyFeatures />
        <CarSpecs />
      </div>
    </>
  );
};

const MainCarHeadere = () => {
  return (
    <>
      <div className='border'>
        {/* modify here */}
        <div class='flex justify-between items-center'>
          <div class='w-1/2 text-4xl font-extralight'>
            {' '}
            <div className='text-3xl border'>Audi Q2</div>
            <div className='text-lg  border'>Luxury SUV</div>
          </div>
          <div class='w-1/2 text-right underline text-xs'>
            <div className='flex justify-end items-center ml-auto'>
              {/* Cell 1 */}
              <div className=' ml-auto'>
                {/* Your content for cell 1 goes here */}
                <div className='text-xl border'>₹ 20,19,060</div>
              </div>

              {/* Cell 2 */}
              <div className='mr-4 ml-auto border'>
                {/* Your content for cell 2 goes here */}
                <div className='rounded-full border border-black p-2'>
                  <AiOutlineHeart />
                </div>
              </div>

              {/* Cell 3 */}
              <div className='ml-auto'>
                {/* Your content for cell 3 goes here */}
                <button className='p-2 border'>
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
                      x='50%'
                      y='50%'
                      fill='#fff'
                      text-anchor='middle'
                      alignment-baseline='middle'
                      fontSize='14'
                      dominant-baseline='middle'
                    >
                      <tspan x='50%' dy='0'>
                        RESERVE
                      </tspan>
                    </text>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MainCarDisplay = () => {
  return (
    <>
      <div className=''>
        <div className='grid grid-cols-1 items-center justify-center'>
          <div className=' flex items-center justify-center'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/driftly-car-details-main.webp'
              alt=''
            />
          </div>
          <div className='border flex items-center justify-center border-gray-600 rounded'>
            <div className='grid grid-cols-5 gap-5 p-4'>
              <div className='border bg-slate-400 flex items-center justify-center p-2'>
                tw button cell
              </div>
              <div className='border bg-green-300 flex items-center justify-center p-2'>
                Hotspot cell
              </div>
              <div className='border bg-blue-400 flex items-center justify-center p-2'>
                Open door cell
              </div>
              <div className='border bg-yellow-200 flex items-center justify-center p-2'>
                ext-int cell
              </div>
              <div className='border bg-pink-300 flex items-center justify-center p-2'>
                zoom cell
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CarMainSpecs = () => {
  return (
    <>
      <div className='border flex items-center justify-center border-gray-600 rounded mt-4'>
        <div className='grid grid-cols-6 gap-5 p-4'>
          <div className='border bg-slate-400 flex items-center justify-center p-2'>
            14.7 kmpl
          </div>
          <div className='border bg-green-300 flex items-center justify-center p-2'>
            automatic
          </div>
          <div className='border bg-blue-400 flex items-center justify-center p-2'>
            1998 cc engine
          </div>
          <div className='border bg-yellow-200 flex items-center justify-center p-2'>
            4 passengers
          </div>
          <div className='border bg-pink-300 flex items-center justify-center p-2'>
            2 doors
          </div>
          <div className='border bg-pink-300 flex items-center justify-center p-2'>
            front wheel drive
          </div>
        </div>
      </div>
    </>
  );
};

const CarSummary = () => {
  return (
    <>
      <div className='mt-9'>
        <div className='text-4xl font-extralight'>Car Summary</div>
        <div class='flex flex-wrap border rounded mt-6'>
          <div class='w-1/3 p-4'>
            <div className='text-sm font-extralight'>Insurance Validity</div>
            <div className='text-lg'>2</div>
          </div>
          <div class='w-1/3  p-4 border '>
            {' '}
            <div className='text-sm font-extralight'>Ownership</div>
            <div className='text-lg'>4</div>
          </div>
          <div class='w-1/3  p-4 border'>
            {' '}
            <div className='text-sm font-extralight'>Body Type</div>
            <div className='text-lg'>6</div>
          </div>
          <div class='w-1/3  p-4 border'>
            {' '}
            <div className='text-sm font-extralight'>Registration Year</div>
            <div className='text-lg'>8</div>
          </div>
          <div class='w-1/3  p-4 border'>
            {' '}
            <div className='text-sm font-extralight'>PUC</div>
            <div className='text-lg'>10</div>
          </div>
          <div class='w-1/3  p-4 '>
            {' '}
            <div className='text-sm font-extralight'>Boot Space (seats up)</div>
            <div className='text-lg'>12</div>
          </div>
        </div>
      </div>
    </>
  );
};

const KeyFeatures = () => {
  return (
    <>
      <div className='mt-9'>
        <div class='flex flex-col border'>
          <div class='flex justify-between items-center p-2'>
            <div class='w-1/2 text-4xl font-extralight'>Key Features</div>
            <div class='w-1/2 text-right underline text-xs'>
              View All Features
            </div>
          </div>

          <div class='flex justify-between mt-4 border'>
            <div class='w-1/3 p-4'>
              <img
                src='https://picsum.photos/300/200'
                alt='Card 1'
                class='w-full h-30 object-cover mb-2'
              />
              <p>Apple Car Play</p>
            </div>

            <div class='w-1/3 p-4'>
              <img
                src='https://picsum.photos/300/200'
                alt='Card 2'
                class='w-full h-30 object-cover mb-2'
              />
              <p>Climate Control</p>
            </div>

            <div class='w-1/3 p-4'>
              <img
                src='https://picsum.photos/300/200'
                alt='Card 3'
                class='w-full h-30 object-cover mb-2'
              />
              <p>Cruise Control</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CarSpecs = () => {
  return (
    <>
      <div className='mt-9'>
        <div class='flex justify-between items-center p-2'>
          <div class='w-1/2 text-4xl font-extralight'>Car Specifications</div>
          <div class='w-1/2 text-right underline text-xs'>
            View All Specifications
          </div>
        </div>
        <div class='flex flex-wrap border rounded mt-6'>
          <div class='w-1/3 p-4'>
            <div className='text-sm font-extralight'>Top Speed</div>
            <div className='text-lg'>2</div>
          </div>
          <div class='w-1/3  p-4 border '>
            {' '}
            <div className='text-sm font-extralight'>
              Acceleration (0-62 mph)
            </div>
            <div className='text-lg'>4</div>
          </div>
          <div class='w-1/3  p-4 border'>
            {' '}
            <div className='text-sm font-extralight'>Engine Power</div>
            <div className='text-lg'>6</div>
          </div>
          <div class='w-1/3  p-4 border'>
            {' '}
            <div className='text-sm font-extralight'>Length</div>
            <div className='text-lg'>8</div>
          </div>
          <div class='w-1/3  p-4 border'>
            {' '}
            <div className='text-sm font-extralight'>Fuel Tank Capacity</div>
            <div className='text-lg'>10</div>
          </div>
          <div class='w-1/3  p-4 '>
            {' '}
            <div className='text-sm font-extralight'>Boot Space (seats up)</div>
            <div className='text-lg'>12</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
