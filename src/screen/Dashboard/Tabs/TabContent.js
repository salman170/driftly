// TabContent.js
import React from 'react';

const TabContent = ({ label }) => {
  return (
    <div className='p-2'>
      {label === 'Sell Orders' && <SellOrdersTab />}{' '}
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

const RectangularCard = () => {
  return (
    <div className='container mx-auto m-2 shadow-md'>
      <div className='max-w-full bg-white rounded-md overflow-hidden shadow-lg'>
        <div className='flex'>
          <img
            className='w-1/3 object-cover object-center'
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/cards/dashboard-card-pic.png' // Replace with your image URL
            alt='Card Image'
          />
          <div className='p-4 border'>
            <p className='text-gray-400 border'>2019</p>
            <h2 className='text-3xl font-bold mb-2 border'>
              Audi A4 Technology
            </h2>
            <p className=' text-gray-400 text-xl border'>XDrive401 M Sport</p>
            <p className='text-gray-400 font-light border'>Petrol | 2300 km</p>
            <br />
            <br />
            <p className='text-2xl font-semibold border'>₹ 22,77,590</p>
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
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/cards/dashboard-card-pic.png' // Replace with your image URL
            alt='Card Image'
          />
          <div className='p-4'>
            <h2 className='text-xl font-bold mb-2'>Audi A4 Technology</h2>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
