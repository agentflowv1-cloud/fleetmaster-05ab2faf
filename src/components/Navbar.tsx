import React from 'react';

function Navbar() {
  return (
    <nav className='flex justify-between items-center py-4 md:py-6 bg-gray-100'>
      <h1 className='text-2xl font-bold'>FleetMaster</h1>
      <ul className='flex items-center space-x-4 md:space-x-6 lg:space-x-8'>
        <li>
          <a href='#' className='text-lg font-medium text-gray-600 hover:text-gray-900'>Home</a>
        </li>
        <li>
          <a href='#' className='text-lg font-medium text-gray-600 hover:text-gray-900'>About</a>
        </li>
        <li>
          <a href='#' className='text-lg font-medium text-gray-600 hover:text-gray-900'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;