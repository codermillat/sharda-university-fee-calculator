import React from 'react';
import Header from './src/components/Header';
import FeeCalculator from './src/components/FeeCalculator';

const App: React.FC = () => {
  return (
    <div className="bg-slate-100 min-h-screen text-slate-800">
      <Header />
      <main className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
          <FeeCalculator />
        </div>
      </main>
      <footer className="text-center p-4 sm:p-6 text-xs sm:text-sm text-slate-500">
        <p>&copy; 2024 Sharda University Fee Calculator. All information is indicative.<br className="hidden sm:block"/>Please refer to the official university website for final details.</p>
      </footer>
    </div>
  );
};

export default App;
