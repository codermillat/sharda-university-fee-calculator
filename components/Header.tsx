import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-sharda-blue">Sharda University Fee Calculator</h1>
          <p className="text-sm text-slate-600 mt-1">For Prospective Students from Bangladesh</p>
        </div>
      </div>
    </header>
  );
};

export default Header;