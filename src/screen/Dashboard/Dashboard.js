// App.js
import React, { useState } from 'react';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel';
import Header from '../../others/Header';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Header />
      <div className='container mx-auto flex border p-4'>
        <SidePanel onOptionClick={handleOptionClick} />
        <MainPanel selectedOption={selectedOption} />
      </div>
    </>
  );
};

export default Dashboard;
