import React, { useState } from 'react';
import { Course } from '../../types';
import CourseSearch from './CourseSearch';
import ScholarshipPanel from './ScholarshipPanel';

// School full names mapping
const schoolNames: { [key: string]: string } = {
  'SSET': 'Sharda School of Engineering & Technology',
  'SBS': 'Sharda School of Business Studies',
  'SOL': 'Sharda School of Law',
  'SHSS': 'Sharda School of Humanities & Social Sciences',
  'SBSR': 'Sharda School of Basic Sciences & Research',
  'SNSR': 'Sharda School of Nursing Sciences & Research',
  'SMSR': 'Sharda School of Medical Sciences & Research',
  'Pharmacy': 'Pharmacy',
};

const FeeCalculator: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleClear = () => {
    setSelectedCourse(null);
  };

  // Get all scholarship options for the course (including "No Scholarship")
  const getAllScholarshipOptions = (course: Course): number[] => {
    const options = [0]; // Always include "No Scholarship"
    // Add all scholarship percentages
    course.scholarships.forEach(scholarship => {
      if (!options.includes(scholarship)) {
        options.push(scholarship);
      }
    });
    // Sort in descending order (50, 30, 25, 20, 0)
    return options.sort((a, b) => b - a);
  };

  const scholarshipOptions = selectedCourse ? getAllScholarshipOptions(selectedCourse) : [];
  const numCards = scholarshipOptions.length;

  return (
    <div className="w-full">
      {/* Course Search Section - Centered */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <CourseSearch 
            onCourseSelect={handleCourseSelect} 
            selectedCourse={selectedCourse}
            onClear={handleClear}
          />
        </div>
      </div>

      {/* Course Selection Prompt - Centered */}
      {!selectedCourse && (
        <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
          <div className="text-center text-slate-500 px-4 max-w-2xl">
            <p className="text-2xl mb-2">🎓</p>
            <p className="text-sm sm:text-base md:text-lg mb-4">
              Please select a course to see the detailed fee breakdown.
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Calculate fees for B.Tech CSE, MBBS, B.Sc Nursing, BBA, MBA and other courses at Sharda University. 
              Get instant fee breakdown with scholarship options for study in India from Bangladesh.
            </p>
          </div>
        </div>
      )}

      {/* Fee Breakdown - Centered */}
      {selectedCourse && (
        <div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-12 animate-fade-in w-full px-4">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3 md:mb-4 text-slate-800">
              Fee Structure for: <span className="text-blue-600">{selectedCourse.title}</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-500">
              Duration: {selectedCourse.durationYears} Years · School: {schoolNames[selectedCourse.group] || selectedCourse.group}
            </p>
          </div>

          {/* Scholarship Panels Grid - Centered */}
          <div className="flex justify-center w-full">
            <div className={`grid gap-3 sm:gap-4 md:gap-6 ${
              numCards === 1 ? 'grid-cols-1 max-w-md' :
              numCards === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl' :
              'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl'
            } w-full`}>
              {scholarshipOptions.map(scholarshipPercent => (
                <ScholarshipPanel
                  key={scholarshipPercent}
                  course={selectedCourse}
                  scholarship={scholarshipPercent}
                />
              ))}
            </div>
          </div>

          {/* Additional SEO Content - Centered */}
          <div className="flex justify-center mt-8 w-full">
            <div className="w-full max-w-4xl p-4 bg-slate-50 rounded-lg text-sm text-slate-600">
              <p className="mb-2">
                <strong>Need more information?</strong> For updated course details, admission process, and scholarship information, 
                visit the{' '}
                <a 
                  href="https://bangladesh.shardauniversity.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  official Sharda University Bangladesh portal
                </a>
                {' '}or connect with current students via{' '}
                <a 
                  href="https://wa.me/918800996151" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  WhatsApp
                </a>
                .
              </p>
              <p>
                Explore career opportunities after B.Tech Computer Science, B.Sc Computer Science future scope, and learn about 
                high-paying jobs in software development, data science, AI/ML, cyber security, and cloud computing.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SEO-friendly visible content for search engines - Centered at bottom */}
      <div className="flex justify-center mt-12 mb-6">
        <div className="w-full max-w-5xl px-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h2 className="text-xl font-bold text-slate-800 mb-3 text-center">Sharda University Fee Calculator for Bangladeshi Students</h2>
            <p className="text-sm text-slate-700 mb-3">
              Calculate Sharda University fees for B.Tech Computer Science Engineering (CSE), MBBS, B.Sc Nursing, BBA, MBA, and other courses. 
              Get detailed year-wise fee breakdown with scholarship calculator. Check admission process, course fees, and scholarship eligibility 
              for study in India from Bangladesh. Explore career options after B.Tech CSE, B.Sc Computer Science future scope, and high paying jobs 
              after computer science engineering. Find best college in Greater Noida for B.Tech, Sharda University admission process 2025, 
              and scholarship information for international students.
            </p>
            <p className="text-sm text-slate-700 mb-3">
              Sharda University, located in Greater Noida, Uttar Pradesh, is one of the leading universities in India for international students, 
              especially from Bangladesh. The university offers a wide range of undergraduate and postgraduate programs including B.Tech in Computer 
              Science Engineering, MBBS, B.Sc Nursing, BBA, MBA, and many more. This fee calculator helps you estimate the total cost of education 
              including tuition fees, admission fees, and other mandatory charges. You can also calculate potential scholarships based on your GPA 
              and see how much you can save on your education costs.
            </p>
            <p className="text-sm text-slate-700 mb-3">
              Understanding the fee structure is crucial for planning your education abroad. Our calculator provides detailed breakdowns for each 
              year of your program, showing tuition fees, scholarship discounts, admission fees, and other charges. This helps you make informed 
              decisions about your education investment and plan your finances accordingly. Whether you're interested in computer science, medicine, 
              business, or nursing, this tool helps you compare costs and scholarship options for different programs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-3">
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>B.Tech CSE Fee Calculator with Scholarship Options</li>
                  <li>MBBS Fee Structure for Bangladeshi Students</li>
                  <li>B.Sc Nursing Fees and Admission Process</li>
                  <li>BBA and MBA Course Fees</li>
                  <li>Year-wise Fee Breakdown</li>
                  <li>Grand Total Calculation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Additional Services:</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Scholarship Calculator based on GPA</li>
                  <li>Career Guidance for Computer Science Students</li>
                  <li>Study Abroad Information for Bangladeshi Students</li>
                  <li>Copy Fee Breakdown to Clipboard</li>
                  <li>Compare Multiple Scholarship Options</li>
                  <li>Mobile-Friendly Interface</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <h3 className="font-semibold text-slate-800 mb-2">About Sharda University</h3>
              <p className="text-sm text-slate-700 mb-2">
                Sharda University is a leading educational institution in Greater Noida, offering world-class education to students from over 95 countries. 
                The university is known for its excellent infrastructure, experienced faculty, and strong industry connections. For Bangladeshi students, 
                Sharda University offers various scholarship programs based on academic performance, making quality education more accessible.
              </p>
              <p className="text-sm text-slate-700">
                The university offers programs in engineering, medicine, business, law, humanities, and many other fields. With state-of-the-art facilities, 
                modern laboratories, and a vibrant campus life, Sharda University provides an excellent environment for international students to pursue 
                their higher education goals in India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeCalculator;
