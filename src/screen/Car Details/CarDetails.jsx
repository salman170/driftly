import React, { useState } from 'react';
import Header from '../../others/Header';
import { AiOutlineHeart } from 'react-icons/ai';
import { Footer } from '../About/About';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
// import { AiFillCloseCircle, AiFillHeart } from 'react-icons/ai';

import './ToggleSwitch.css';
import SimilarCarsSlider from './SimilarCarsSlider';

const CarDetails = () => {
  return (
    <>
      <Header />

      <MainCarHeadere />
      <MainCarDisplay />
      <CarMainSpecs />
      <CarSummary />
      <KeyFeatures />
      <CarSpecs />
      <RunningCosts />
      <ServiceHistory />
      <WarrantyandCare />
      <InspectionSummary />
      <PricingandFinance />
      <SimilarCars />
      <Footer />
    </>
  );
};

const MainCarHeadere = () => {
  return (
    <div className='bg-gray-100 p-2'>
      <div className='container mx-auto px-4 mt-4'>
        {/* modify here */}
        <div class='flex justify-between items-center'>
          <div class='w-1/2 text-4xl font-extralight'>
            {' '}
            <div className='text-3xl '>Audi Q2</div>
            <div className='text-lg  '>Luxury SUV</div>
          </div>
          <div class='w-1/2 text-right underline text-xs'>
            <div className='flex justify-end items-center ml-auto'>
              {/* Cell 1 */}
              <div className=' ml-auto'>
                {/* Your content for cell 1 goes here */}
                <div className='text-xl '>₹ 20,19,060</div>
              </div>

              {/* Cell 2 */}
              <div className='mr-4 ml-auto '>
                {/* Your content for cell 2 goes here */}
                <div className='rounded-full border border-black p-2'>
                  <AiOutlineHeart />
                </div>
              </div>

              {/* Cell 3 */}
              <div className='ml-auto'>
                {/* Your content for cell 3 goes here */}
                <button className='p-2 '>
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
    </div>
  );
};

const MainCarDisplay = () => {
  return (
    <>
      <div className='container mx-auto px-4 mt-4'>
        <div className='grid grid-cols-1 items-center justify-center'>
          <div className=' flex items-center justify-center'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/driftly-car-details-main.webp'
              alt=''
            />
          </div>
          <div className='border flex items-center justify-center border-gray-600 rounded'>
            <div className='grid grid-cols-5 gap-5 p-4'>
              <div className='flex items-center justify-center p-2'>
                tw button cell
              </div>
          
              <div className='flex items-center justify-center p-2'>
                <HSToggleButton />
                <div class='border border-r border-gray-300 h-full ml-12'></div>
              </div>

              <div className='flex items-center justify-center p-2'>
                <ODToggleButton />
                <div class='border border-r border-gray-300 h-full ml-12'></div>
              </div>
              <div className=' flex items-center justify-center p-2'>
                <MCDToggleButton />
                <div class='border border-r border-gray-300 h-full ml-12'></div>
                {/* <span className='rounded-3xl text-white bg-black border-black border p-1'>
                  exterior
                </span>
                <span className='rounded-3xl border-black border p-1'>
                  Interior
                </span> */}
              </div>
              <div className=' flex items-center justify-center p-2'>
                <span className='border border-gray-400 rounded-lg p-2'>+</span>
                &nbsp; &nbsp;&nbsp;&nbsp;Zoom&nbsp; &nbsp; &nbsp;
                <span className='border border-gray-400 rounded-lg p-2'>-</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

const HSToggleButton = () => {
  const [activeTab, setActiveTab] = useState('exterior');

  const handleToggle = () => {
    setActiveTab((prevTab) =>
      prevTab === 'HotSpot' ? 'No Internet' : 'HotSpot'
    );
  };

  return (
    <div className='flex items-center justify-center p-2'>
      <button
        className={`relative rounded-full w-12 h-6 transition duration-300 ${
          activeTab === 'HotSpot' ? 'bg-[#00BAB8]' : 'bg-gray-300'
        } focus:outline-none`}
        onClick={handleToggle}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md transform ${
            activeTab === 'exterior' ? 'translate-x-0' : 'translate-x-6'
          } transition duration-300`}
        >
          {/* You can also use icons or custom content here */}
        </div>
      </button>
      <span className='ml-2'>
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </span>
    </div>
  );
};

const ODToggleButton = () => {
  const [activeTab, setActiveTab] = useState('closed doors');

  const handleToggle = () => {
    setActiveTab((prevTab) =>
      prevTab === 'open doors' ? 'closed doors' : 'open doors'
    );
  };

  return (
    <div className='flex items-center justify-center p-2'>
      <button
        className={`relative rounded-full font-light w-12 h-6 transition duration-300 ${
          activeTab === 'open doors' ? 'bg-black' : 'bg-gray-300'
        } focus:outline-none`}
        onClick={handleToggle}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center w-6 h-6 font-light rounded-full bg-white shadow-md transform ${
            activeTab === 'open doors' ? 'translate-x-0' : 'translate-x-6'
          } transition duration-300`}
        >
          {/* You can also use icons or custom content here */}
        </div>
      </button>
      <span className='ml-2'>
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </span>
    </div>
  );
};

const MCDToggleButton = () => {
  const [activeTab, setActiveTab] = useState('exterior');

  const handleToggle = () => {
    setActiveTab((prevTab) =>
      prevTab === 'exterior' ? 'interior' : 'exterior'
    );
  };

  return (
    <div className='flex items-center justify-center p-2'>
      <button
        className={`relative rounded-full w-12 h-6 transition duration-300 ${
          activeTab === 'exterior' ? 'bg-black' : 'bg-gray-300'
        } focus:outline-none`}
        onClick={handleToggle}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md transform ${
            activeTab === 'exterior' ? 'translate-x-0' : 'translate-x-6'
          } transition duration-300`}
        >
          {/* You can also use icons or custom content here */}
        </div>
      </button>
      <span className='ml-2'>
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </span>
    </div>
  );
};

const CarMainSpecs = () => {
  return (
    <div className='container mx-auto px-4 m-9'>
      <div className='border flex items-center justify-center border-gray-600 rounded mt-4'>
        <div className='flex space-x-11 p-4'>
          <div className='flex items-center justify-center p-2 flex-grow flex-shrink-0'>
            <div className='flex flex-col items-center justify-center'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/icon-1.webp'
                alt=''
                srcSet=''
                style={{ width: '60%', height: '30px' }}
                className='m-2'
              />
              <p>14.7 kmpl</p>
            </div>
            <div class='border border-l border-gray-300 h-full ml-10'></div>
          </div>
          <div className='flex items-center justify-center p-2 flex-grow flex-shrink-0'>
            <div className='flex flex-col items-center justify-center'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/icon-2.webp'
                alt=''
                srcSet=''
                style={{ width: '40%', height: '30px' }}
                className='m-2'
              />
              <p>Automatic</p>
            </div>
            <div class='border border-r border-gray-300 h-full ml-12'></div>
          </div>
          <div className='flex items-center justify-center p-2 flex-grow flex-shrink-0'>
            <div className='flex flex-col items-center justify-center'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/icon-3.webp'
                alt=''
                srcSet=''
                style={{ width: '50%', height: '40px' }}
                className='m-2'
              />
              <p>1998 CC Engine</p>
            </div>
            <div class='border border-r border-gray-300 h-full ml-12'></div>
          </div>
          <div className='flex items-center justify-center p-2 flex-grow flex-shrink-0'>
            <div className='flex flex-col items-center justify-center'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/icon-4.webp'
                alt=''
                srcSet=''
                style={{ width: '50%', height: '35px' }}
                className='m-2'
              />
              <p>4 Passengers</p>
            </div>
            <div class='border border-r border-gray-300 h-full ml-12'></div>
          </div>
          <div className='flex items-center justify-center p-2 flex-grow flex-shrink-0'>
            <div className='flex flex-col items-center justify-center'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/icon-5.webp'
                alt=''
                srcSet=''
                style={{ width: '60%', height: '35px' }}
                className='m-2'
              />
              <p>2 Doors</p>
            </div>
            <div class='border border-r border-gray-300 h-full ml-12'></div>
          </div>
          <div className='flex items-center justify-center p-2 flex-grow flex-shrink-0'>
            <div className='flex flex-col items-center justify-center'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/icon-6.webp'
                alt=''
                srcSet=''
                style={{ width: '50%', height: '50px' }}
                className='m-2'
              />
              <p>Front Wheel Drive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarSummary = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='mt-9'>
        <div className='text-4xl font-extralight text-gray-500'>
          Car Summary
        </div>
        <div class='flex flex-wrap border rounded mt-2'>
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
    </div>
  );
};

const KeyFeatures = () => {
  return (
    <div className='container mx-auto px-4 m-9'>
      <div className='mt-9'>
        <div class='flex flex-col '>
          <div class='flex justify-between items-center p-2'>
            <div class='w-1/2 text-4xl font-extralight text-gray-500'>
              Key Features
            </div>
            <div class='w-1/2 text-right underline text-xs text-[#00BAB8]'>
              View All Features
            </div>
          </div>

          <div class='flex justify-between mt-2 '>
            <div class='w-1/3 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/cards/card 2.webp'
                alt='Card 1'
                class='w-full h-30 object-cover mb-2'
              />
              <p className='ml-3'>Apple Car Play</p>
            </div>

            <div class='w-1/3'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/cards/card 2.webp'
                alt='Card 2'
                class='w-full h-30 object-cover mb-2'
              />
              <p className='ml-3'>Climate Control</p>
            </div>

            <div class='w-1/3'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/cards/card 3.webp'
                alt='Card 3'
                class='w-full h-30 object-cover mb-2'
              />
              <p className='ml-3'>Cruise Control</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarSpecs = () => {
  return (
    <div className='container mx-auto px-4 m-9'>
      <div className='mt-9'>
        <div class='flex justify-between items-center p-2'>
          <div class='w-1/2 text-4xl font-extralight text-gray-500'>
            Car Specifications
          </div>
          <div class='w-1/2 text-right underline text-xs text-[#00BAB8]'>
            View All Specifications
          </div>
        </div>
        <div class='flex flex-wrap border rounded mt-6'>
          <div class='w-1/3 p-4'>
            <div className='text-sm font-extralight'>Top Speed</div>
            <div className='text-lg'>180 Kmph</div>
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
    </div>
  );
};

const RunningCosts = () => {
  return (
    <div className='container mx-auto px-4 m-9'>
      <div className='mt-9'>
        <div class='flex justify-between items-center p-2 rounded-xl'>
          <div class='w-1/2 text-4xl font-extralight text-gray-500'>
            Running Costs
          </div>
          {/* <div class='w-1/2 text-right underline text-xs'>
            View All Specifications
          </div> */}
        </div>
      </div>

      <div class='flex flex-wrap border rounded mt-6'>
        <div class='w-1/3 p-4 border'>
          <div className='text-sm font-extralight'>Top Speed</div>
          <div className='text-lg'>2</div>
        </div>
        <div class='w-1/3  p-4 border '>
          {' '}
          <div className='text-sm font-extralight'>Acceleration (0-62 mph)</div>
          <div className='text-lg'>4</div>
        </div>
        <div class='w-1/3  p-4 border'>
          {' '}
          <div className='text-sm font-extralight'>Engine Power</div>
          <div className='text-lg'>6</div>
        </div>
        {/* row 2 */}
        <div class='w-full p-4 flex items-center bg-gray-100 justify-center'>
          {' '}
          <p className='text-xxs p-2 italic font-light text-gray-400'>
            Note : Not all running costs are shown above. The running costs
            shown here are estimated based on average <br />
            fuel price and mileage for this car. Insurance cost estimates are
            based on qualified drivers with a <br />
            clean record (no accidents, violations or points).
          </p>
        </div>
      </div>
    </div>
  );
};

const ServiceHistory = () => {
  return (
    <div className='container mx-auto px-4 m-9'>
      <div className='text-4xl font-extralight mt-9 text-gray-500'>
        Service History
      </div>
      <div class='grid grid-cols-2 mt-6 rounded-xl'>
        <div class='p-4 border flex'>
          <div class='flex-1'>
            <div className='text-sm font-extralight text-gray-400'>
              1st Service
            </div>
            <div className='text-lg '>11/12/2021</div>
          </div>

          <div class='flex-1 flex justify-end '>
            <div class='p-2 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/pdf-icon.webp'
                alt=''
                srcset=''
              />
            </div>
          </div>
        </div>

        <div class='p-4 border flex'>
          <div class='flex-1'>
            <div className='text-sm font-extralight text-gray-400'>
              2nd Service
            </div>
            <div className='text-lg '>12/1/2022</div>
          </div>

          <div class='flex-1 flex justify-end '>
            <div class='p-2 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/pdf-icon.webp'
                alt=''
                srcset=''
              />
            </div>
          </div>
        </div>

        <div class='col-span-2 p-4 flex items-center bg-gray-100 justify-center'>
          <p className='text-xxs p-2 italic font-light text-gray-400'>
            Note: The service history we have for this car is shown above. If
            the car is less than a year old or has a low mileage, <br />
            it may not have been serviced yet. If there are no service history
            records available, you may only see details <br />
            of the service carried out by Driftly.
          </p>
        </div>
      </div>
    </div>
  );
};

const WarrantyandCare = () => {
  return (
    <div className='container mx-auto px-4 m-9'>
      <div class='mt-6 flex'>
        <div class='flex-1'>
          <div className='text-4xl font-extralight mt-9 text-gray-500 '>
            Warranty & Care
          </div>
          <div className='text-lg mt-4'>Included with Vehicle</div>
          <div class='flex  mt-1 '>
            <div class='flex-1 border p-2'>
              <div class='flex flex-col'>
                <div class=' p-1 text-lg'>7-Day Money Back Guarantee</div>
                <div class=' p-1 text-xs text-gray-400'>
                  Don’t love it? Return it or swap it for a new ride!
                </div>
                <div class=' p-1 text-xs text-[#00BAB8] underline'>
                  Learn More
                </div>
              </div>
            </div>

            <div class='flex-1 border p-2'>
              <div class='flex flex-col'>
                <div class=' p-1 text-lg'>100 Day Limited Warranty</div>
                <div class=' p-1 text-xs text-gray-4  00'>
                  Peace of mind for your first 100 days or 4,189 miles*
                </div>
                <div class='p-1 text-xs text-[#00BAB8] underline'>
                  Learn more
                </div>
              </div>
            </div>
          </div>

          <div className='text-lg mt-4'>Optional Protection Plans</div>
          <div class='flex mt-1 '>
            <div class='flex-1 border p-2'>
              <div class='flex flex-col'>
                <div class=' p-1 text-lg'>Extended Warranty</div>
                <div class=' p-1 text-xs text-gray-400'>
                  Extended coverage to protect your vehicle against breakdowns
                  and costly repairs.
                </div>
                <div class=' p-1 text-xs text-[#00BAB8] underline'>
                  Learn More
                </div>
              </div>
            </div>

            <div class='flex-1 border p-2'>
              <div class='flex flex-col'>
                <div class=' p-1 text-lg'>Gap Coverage</div>
                <div class=' p-1 text-xs text-gray-4  00'>
                  Protects your wallet in the event of total loss or theft.
                </div>
                <div class='p-1 text-xs text-[#00BAB8] underline'>
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InspectionSummary = () => {
  return (
    <div className='container mx-auto px-4 m-9'>
      <div class='flex justify-between items-center p-2'>
        <div class='w-1/2 text-4xl font-extralight text-gray-500'>
          Inspection Summary
        </div>
        <div class='w-1/2 text-right underline text-xs text-[#00BAB8]'>
          See entire 360 point inspection
        </div>
      </div>
      <div className='flex flex-col border rounded'>
        {/* First Row */}
        <div className='flex'>
          {/* First Cell */}
          <div className='flex-1'>
            {/* Sub-cell 1 */}
            <div className='flex justify-between p-2 border'>
              <span className='flex items-center text-sm font-light'>
                Clean History
              </span>
              <span className='text-sm font-light'>
                <label htmlFor='cheese-status'>
                  <ToggleSwitch />
                </label>
              </span>
            </div>

            {/* Sub-cell 2 */}
            <div className='flex justify-between p-2 border'>
              <span className='flex items-center text-sm font-light'>Body</span>
              <span className='text-sm font-light'>
                <span id='biscuit-label'>
                  <ToggleSwitch />
                </span>
              </span>
            </div>
          </div>

          {/* Second Cell */}
          <div className='flex-1'>
            {/* Sub-cell 1 */}
            <div className='flex justify-between p-2 border'>
              <span className='flex items-center text-sm font-light'>
                Under the Hood
              </span>
              <span className='text-sm font-light'>
                <ToggleSwitch />
              </span>
            </div>

            {/* Sub-cell 2 */}
            <div className='flex justify-between p-2 border'>
              <span className='flex items-center text-sm font-light'>
                Interior
              </span>
              <span className='text-sm font-light'>
                <ToggleSwitch />
              </span>
            </div>
          </div>

          {/* Third Cell */}
          <div className='flex-1'>
            {/* Sub-cell 1 */}
            <div className='flex justify-between p-2 border'>
              <span className='flex items-center text-sm font-light'>
                Break & Wheels
              </span>
              <span className='text-sm font-light'>
                <ToggleSwitch />
              </span>
            </div>

            {/* Sub-cell 2 */}
            <div className='flex justify-between p-2 border'>
              <span className='flex items-center text-sm font-light'>
                Suspension
              </span>
              <span className='text-sm font-light'>
                <label htmlFor='cheese-status'>
                  <ToggleSwitch />
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingandFinance = () => {
  return (
    <div className='bg-gray-100 p-2'>
      <div className='m-9'>
        <div className='container mx-auto px-4  bg-gray-100'>
          <div className='text-4xl font-extralight text-gray-500 mb-2'>
            Pricing and Finance
          </div>
          <div className='flex '>
            <div className='flex-1 mx-2 bg-white shadow-md rounded-md overflow-hidden border'>
              <div className='m-6 flex items-center'>
                <img
                  className='mr-4'
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/pay-once.webp'
                  alt=''
                  srcset=''
                />
                <p className='text-xl font-semibold text-gray-800'>Pay Once</p>
              </div>
              <hr className=' border-gray-300' />
              <div className='flex justify-between m-2'>
                <div className='text-semibold text-xl m-2 text-black'>
                  {/* Content for the left cell goes here */}
                  Car
                </div>

                <div className='m-2 font-semibold text-xl text-black'>
                  {/* Content for the right cell goes here */}₹ 19,20,060
                </div>
              </div>
              {/* row 2 */}
              <div className='flex justify-between m-2'>
                <div className='font-light text-sm p-2 text-gray-600'>
                  {/* Content for the left cell goes here */}
                  Vehicle Price
                </div>

                <div className=' p-2 font-light text-sm text-gray-600'>
                  {/* Content for the right cell goes here */}₹ 19,20,060
                </div>
              </div>
              {/* row 3 */}
              <div className='flex justify-between m-2'>
                <div className='font-light text-sm p-2 text-gray-600'>
                  {/* Content for the left cell goes here */}
                  Refurbishment
                </div>

                <div className=' p-2 font-light text-sm text-gray-600'>
                  {/* Content for the right cell goes here */}₹ 41,700
                </div>
              </div>
              {/* row 4 */}
              <div className='flex justify-between m-2'>
                <div className='font-light text-sm p-2 text-gray-600'>
                  {/* Content for the left cell goes here */}
                  Insurance
                </div>

                <div className=' p-2 font-light text-sm text-gray-600'>
                  {/* Content for the right cell goes here */}-
                </div>
              </div>
              {/* row 5 */}
              <div className='flex justify-between m-2'>
                <div className='text-semibold text-xl m-2 text-black'>
                  {/* Content for the left cell goes here */}
                  Registration
                </div>

                <div className=' m-2 font-semibold text-xl text-black'>
                  {/* Content for the right cell goes here */}₹ 98,000
                </div>
              </div>
              {/* row 6 */}
              <div className='flex justify-between m-2'>
                <div className='font-light text-sm p-2 text-gray-600'>
                  {/* Content for the left cell goes here */}
                  RTO
                </div>

                <div className=' p-2 font-light text-sm text-gray-600'>
                  {/* Content for the right cell goes here */}₹ 96,000
                </div>
              </div>
              {/* row 7 */}
              <div className='flex justify-between m-2'>
                <div className='font-light text-sm p-2 text-gray-600'>
                  {/* Content for the left cell goes here */}
                  Road Safety Tax
                </div>

                <div className=' p-2 font-light text-sm text-gray-600'>
                  {/* Content for the right cell goes here */}₹ 2,000
                </div>
              </div>
              {/* row 8 */}
              <div className='flex justify-between m-2'>
                <div className='text-semibold text-xl p-2 text-black'>
                  {/* Content for the left cell goes here */}
                  Other
                </div>

                <div className='text-semibold text-xl p-2 text-black'>
                  {/* Content for the right cell goes here */}₹ 1,000
                </div>
              </div>
              {/* row 9 */}
              <div className='flex justify-between m-2'>
                <div className='font-light text-sm p-2 text-gray-600'>
                  {/* Content for the left cell goes here */}
                  FAST Tag
                </div>

                <div className=' p-2 font-light text-sm text-gray-600'>
                  {/* Content for the right cell goes here */}₹ 1,000
                </div>
              </div>
              {/* row 10 */}
              <div className='flex justify-between m-2'>
                <div className='font-light text-2xl m-2 text-gray-900'>
                  {/* Content for the left cell goes here */}
                  Total
                </div>

                <div className=' m-2 font-bold text-2xl text-gray-900'>
                  {/* Content for the right cell goes here */}₹ 20,19,060
                </div>
              </div>
            </div>

            {/* column 2 */}
            <div className='flex-1 mx-2 bg-white shadow-md rounded-md overflow-hidden h-full border'>
              <div className='m-6 flex items-center'>
                <img
                  className='mr-4'
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/pay-once.webp'
                  alt=''
                  srcset=''
                />
                <p className='text-xl font-semibold text-gray-800'>
                  Pay Monthly
                </p>
              </div>
              <hr className='border-gray-300' />
              <div className='flex flex-col m-2'>
                <div className='font-light text-lg p-2 text-gray-600'>
                  Estimated Price
                </div>
                <div className='font-semibold text-4xl p-2'>₹ 12,000</div>
                <div className='font-light text-md p-2 italic text-gray-400 mt-5'>
                  Get personalised down/monthly payments within 2 minutes, and
                  no impact to your credit score.
                </div>
                <div className='mt-2'>
                  <div className='flex items-center font-light text-sm p-2 text-gray-600 italic m-5'>
                    <span className='mr-2'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/personalise-your-payment.webp'
                        alt=''
                        srcset=''
                      />
                    </span>
                    Personalise your payment
                  </div>
                  <div className='flex items-center font-light text-sm p-2 text-gray-600 italic m-5'>
                    <span className='mr-2'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/quick-process.webp'
                        alt=''
                        srcset=''
                      />
                    </span>
                    Quick Process
                  </div>
                  <div className='flex items-center font-light text-sm p-2 text-gray-600 italic m-5'>
                    <span className='mr-2'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/secure-credit-score.webp'
                        alt=''
                        srcset=''
                      />
                    </span>
                    Secure Credit Score
                  </div>
                </div>
                {/* button */}
                <div className='p-3'>
                  <div className='bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full flex items-center justify-center whitespace-nowrap uppercase px-8 py-3 cursor-pointer text-white hover:bg-white'>
                    Get Your Terms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SimilarCars = () => {
  return (
    <>
      <div className='container mx-auto px-4 m-9'>
        <SimilarCarsSlider />
      </div>
    </>
  );
};

const ToggleSwitch = () => {
  return (
    <label className='flex items-center relative w-max cursor-pointer select-none'>
      <input
        type='checkbox'
        className='appearance-none transition-colors cursor-pointer w-16 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-red-500'
        defaultChecked
      />
      <span className='absolute font-medium text-xs left-1 text-white'>
        {' '}
        Pass{' '}
      </span>
      <span className='absolute font-medium text-xs right-1 text-white'>
        {' '}
        Fail{' '}
      </span>
      <span className='w-10 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-300' />
    </label>
  );
};

export default CarDetails;
