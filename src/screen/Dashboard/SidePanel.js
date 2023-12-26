// SidePanel.js
import React, { useState } from 'react';

const SidePanel = ({ onOptionClick }) => {
  const options = [
    {
      label: 'Car Alerts',
      iconSrc:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/car-alerts.webp',
    },
    {
      label: 'My Orders',
      iconSrc:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/my-orders.webp',
    },
    {
      label: 'My Purchases',
      iconSrc:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/my-purchases.webp',
    },
    {
      label: 'Personal Information',
      iconSrc:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/personal-information.webp',
    },
  ];

  const [activeOption, setActiveOption] = useState('My Orders');

  const handleOptionClick = (label) => {
    onOptionClick(label);
    setActiveOption(label);
  };

  return (
    <div className='w-1/4 border' style={{ minWidth: '200px' }}>
      <div className='flex items-center border p-4'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/icons/driftly-dummy-profile-picture.webp'
          alt=''
          className='w-10 h-10 mr-2 border'
        />
        <div className='border mt-5'>
          <div className='text-sm font-light border'>Hello</div>
          <h2 className='text-xl font-semibold mb-4 border'>Aditya P</h2>
        </div>
      </div>

      <div className='p-4 mx-auto'>
        <ul>
          {options.map(({ label, iconSrc }) => (
            <li
              key={label}
              onClick={() => handleOptionClick(label)}
              className={`cursor-pointer flex items-center mb-2 ${
                activeOption === label
                  ? 'text-black transform scale-105'
                  : 'text-gray-400 hover:text-black hover:scale-105'
              } no-underline border p-4 transition-transform`}
            >
              <img
                src={iconSrc}
                alt={`icon-${label}`}
                className='w-12 h-12 mr-2'
              />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
