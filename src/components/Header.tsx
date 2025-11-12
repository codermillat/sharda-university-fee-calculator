import React from 'react';

import { trackExternalLink } from '../utils/analytics';

const Header: React.FC = () => {
  const handleApplyClick = () => {
    trackExternalLink('https://global.sharda.ac.in/bangladesh/?utm_source=studyatsharda_youtube&utm_medium=StudyAtShardaBD&utm_campaign=SU_Admissions_2025&utm_content=organic', 'Apply Now - Direct Application');
  };

  return (
    <header className="bg-white shadow-md" role="banner">
      <div className="max-w-[1600px] mx-auto py-3 sm:py-4 md:py-6 px-3 sm:px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left flex-1">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">
            Sharda University Fee Calculator 2025
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1" role="doc-subtitle">
            For Prospective Students from Bangladesh | Calculate B.Tech CSE, MBBS, B.Sc Nursing Fees & Scholarships
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="https://global.sharda.ac.in/bangladesh/?utm_source=studyatsharda_youtube&utm_medium=StudyAtShardaBD&utm_campaign=SU_Admissions_2025&utm_content=organic"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleApplyClick}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md transition-colors text-sm sm:text-base"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
