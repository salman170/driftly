// TabContent.js
import React from 'react';

const TabContent = ({ label }) => {
  return (
    <div className='p-2'>
      {label === 'Sell Orders' && <SellOrdersTab />}{' '}
      {label === 'Offers' && <OffersTab />}{' '}
      {/* Conditionally render RectangularCard */}
    </div>
  );
};

const SellOrdersTab = () => {
  return (
    <>
      <RectangularCard />
      <RectangularCard2 />
    </>
  );
};

const OffersTab = () => {
  return (
    <>
      <RectangularCard2 />
      <RectangularCard />
    </>
  );
};

const RectangularCard = () => {
  return (
    <div className='container mx-auto m-2 shadow-md border'>
      <div className='max-w-full bg-white rounded-md overflow-hidden shadow-lg'>
        <div className='flex'>
          <img
            className='w-1/3 object-cover object-center'
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/cards/dashboard-card-pic.png' // Replace with your image URL
            alt='Card 1'
          />

          <div className='flex flex-grow'>
            <div className='p-4 border'>
              {/* <p className='text-gray-400 border'>2019</p> */}
              <h2 className='text-3xl font-bold mb-2 border'>
                Audi A4 Technology
              </h2>
              <p className=' text-gray-400 text-xl border'>XDrive401 M Sport</p>
              <p className='text-gray-400 font-light border'>
                Petrol | 2300 km
              </p>
              <br />
              <br />
              <p className='text-2xl font-semibold border'>₹ 22,77,590</p>
            </div>
            <div className='p-4 border ml-auto'>
              {/* <p className='text-gray-400 border'>2019</p> */}
              <div className='p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 1024 1024'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z'></path>
                </svg>
              </div>

              <p className='text-2xl font-semibold border'>₹ 22,77,590</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RectangularCard2 = () => {
  return (
    <div className='container mx-auto m-2 shadow-md'>
      <div className='max-w-full bg-white rounded-md overflow-hidden shadow-lg'>
        <div className='flex'>
          <img
            className='w-1/3 object-cover object-center'
            src='https://www.carsinvasion.com/gallery/2006-hummer-h2-sut-limited-edition/2006-hummer-h2-sut-limited-edition-01.jpg' // Replace with your image URL
            alt='Card 2'
          />
          <div className='flex flex-grow'>
            <div className='p-4 border'>
              {/* <p className='text-gray-400 border'>2019</p> */}
              <h2 className='text-3xl font-bold mb-2 border'>Hummer 2006</h2>
              <p className=' text-gray-400 text-xl border'>
                H2 SUT Limited Edition
              </p>
              <p className='text-gray-400 font-light border'>
                Petrol | 7300 km
              </p>
              <br />
              <br />
              <p className='text-2xl font-semibold border'>₹ 79,77,590</p>
            </div>
            <div className='p-4 border ml-auto'>
              {/* <p className='text-gray-400 border'>2019</p> */}
              <div className='p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 1024 1024'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z'></path>
                </svg>
              </div>

              <p className='text-2xl font-semibold border'>₹ 22,77,590</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
