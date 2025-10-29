import React from 'react';
import logo from '../public/logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-2 sm:mb-0">
          <img 
            src={logo}
            alt="Sharda University Logo" 
            className="h-14 mr-4"
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-xl md:text-2xl font-bold text-sharda-blue">Sharda University Fee Calculator</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;