// MainPanel.js
import React, { useState } from 'react';
import CarAlerts from './Car Alerts';
import MyOrders from './MyOrders';
import MyPurchases from './MyPurchases';
import PersonalInformation from './PersonalInformaion';

const MainPanel = ({ selectedOption }) => {
  const [currentTab, setCurrentTab] = useState('Home');

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Car Alerts':
        return <CarAlerts />;
      case 'My Orders':
        return <MyOrders />;
      case 'My Purchases':
        return <MyPurchases />;
      case 'Personal Information':
        return <PersonalInformation />;
      default:
        return (
          <>
            <div>Select an option from the side panel</div>
          </>
        );
    }
  };

  return (
    <div className=''>
      <Separator currentTab={currentTab} handleTabClick={handleTabClick} />

      {renderContent()}
    </div>
  );
};

const Separator = ({ currentTab, handleTabClick }) => {
  const tabs = ['Home', 'Account', 'Test Drive'];

  return (
    <nav className='w-full rounded-md p-4'>
      <div className='flex items-center'>
        {tabs.map((tab, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className='mx-2 text-gray-500'>&gt;</span>}
            <button
              type='button'
              className={`${
                currentTab === tab
                  ? 'text-blue-600 font-semibold transform scale-105'
                  : 'text-blue-500'
              } transition duration-150 ease-in-out focus:outline-none text-left`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default MainPanel;
