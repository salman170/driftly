// MainPanel.js
import React from 'react';

const MainPanel = ({ selectedOption }) => {
  const renderContent = () => {
    switch (selectedOption) {
      case 'Car Alerts':
        return (
          <>
            <img
              src='https://www.techniques-ingenieur.fr/actualite/wp-content/uploads/2015/10/google-doodle1024-1024x300.jpg'
              alt='Placeholder'
              className='w-full h-64 object-cover mb-4'
            />
            <p className='text-lg'>Car Alerts Side Panel</p>
          </>
        );
      case 'My Orders':
        return (
          <div>
            <img
              src='https://www.techniques-ingenieur.fr/actualite/wp-content/uploads/2015/10/google-doodle1024-1024x300.jpg'
              alt='Placeholder'
              className='w-full h-64 object-cover mb-4'
            />
            <p className='text-lg'>My Orders Side Panel</p>
          </div>
        );
      case 'My Purchases':
        return (
          <div>
            <img
              src='https://www.techniques-ingenieur.fr/actualite/wp-content/uploads/2015/10/google-doodle1024-1024x300.jpg'
              alt='Placeholder'
              className='w-full h-64 object-cover mb-4'
            />
            <p className='text-lg'>My Purchases Side Panel</p>
          </div>
        );
      case 'Personal Information':
        return (
          <div>
            <img
              src='https://www.techniques-ingenieur.fr/actualite/wp-content/uploads/2015/10/google-doodle1024-1024x300.jpg'
              alt='Placeholder'
              className='w-full h-64 object-cover mb-4'
            />
            <p className='text-lg'>Personal Information Side Panel</p>
          </div>
        );
      default:
        return (
          <>
            <div>Select an option from the side panel</div>
          </>
        );
    }
  };

  return (
    <div className='flex-1 p-4'>
      <Seperator />
      <h2 className='text-xl font-semibold mb-4'>Main Panel</h2>
      {renderContent()}
    </div>
  );
};

const Seperator = () => {
  return (
    <>
      <nav class='bg-grey-light w-full rounded-md'>
        <ol class='list-reset flex'>
          <li>
            <a
              href='#'
              class='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
            >
              Home
            </a>
          </li>
          <li>
            <span class='mx-2 text-neutral-500 dark:text-neutral-400'>
              &gt;
            </span>
          </li>
          <li>
            <a
              href='#'
              class='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
            >
              Library
            </a>
          </li>
          <li>
            <span class='mx-2 text-neutral-500 dark:text-neutral-400'>
              &gt;
            </span>
          </li>
          <li class='text-neutral-500 dark:text-neutral-400'>Data</li>
        </ol>
      </nav>
    </>
  );
};


const myOrdersPanel = () => {
  return (
    <>
    
    </>
  );
}
export default MainPanel;
