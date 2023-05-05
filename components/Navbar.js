import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full z-10">
      <nav className="flex items-center justify-between flex-wrap bg-white bg-opacity-90 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-auto">
          <img className="h-8 w-auto md:mx-8" src="vercel.svg" alt="Logo" />
        </div>
        <div className="block lg:hidden">
          <button onClick={handleToggle} className="flex items-center px-3 py-2 border rounded text-gray-900 border-gray-900 hover:text-white hover:bg-gray-900 hover:border-gray-900">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div class="text-sm lg:text-base lg:flex-grow text-right  lg:mr-8 xl:mr-8">
        <a href="home" class="block mt-4 md:mx-8 lg:inline-block lg:mt-0 text-gray-900 font-bold mr-4">Home</a>
        <a href="about" class="block mt-4 md:mx-8 lg:inline-block lg:mt-0 text-gray-900 font-bold mr-4">About Us</a>
        <a href="services" class="block mt-4 md:mx-8 lg:inline-block lg:mt-0 text-gray-900 font-bold mr-4">Services</a>
        <a href="pricing" class="block mt-4 md:mx-8 lg:inline-block lg:mt-0 text-gray-900 font-bold mr-4">Pricing</a>
        <a href="contact" class="block mt-4 md:mx-8 lg:inline-block lg:mt-0 text-gray-900 font-bold">Contact Us</a>
        </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
