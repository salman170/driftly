// ResponsiveTabs.js
import React, { useState } from 'react';
import Tab from './Tab';
import TabContent from './TabContent';

const ResponsiveTabs = () => {
  const [activeTab, setActiveTab] = useState('Sell Orders');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='container mx-auto mt-2'>
      <div className='flex flex-wrap border'>
        <Tab
          label='Sell Orders'
          onClick={() => handleTabClick('Sell Orders')}
          isActive={activeTab === 'Sell Orders'}
        />
        <Tab
          label='Offers'
          onClick={() => handleTabClick('Offers')}
          isActive={activeTab === 'Offers'}
        />

        {/* Add more tabs as needed */}
      </div>

      <div className='mt-4'>
        <TabContent label={activeTab} />
      </div>
    </div>
  );
};

export default ResponsiveTabs;
