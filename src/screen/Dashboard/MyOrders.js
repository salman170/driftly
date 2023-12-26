import React from 'react';
import ResponsiveTabs from './Tabs/ResponsiveTabs';

const MyOrders = () => {
  return (
    <div>
      <div className='text-3xl ml-3 border'>My Orders</div>
      <div className='container border ml-3'>
        <ResponsiveTabs />
      </div>
    </div>
  );
};

export default MyOrders;
