import React from 'react';

const Tab = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`focus:outline-none ${
        isActive
          ? 'bg-black text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      } ${
        label === 'Sell Orders'
          ? 'rounded-l-full text-l'
          : label === 'Offers'
          ? 'rounded-r-full'
          : ''
      } px-4 py-2`}
    >
      {label}
    </button>
  );
};

export default Tab;
