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

  return (
    <div>
      <CourseSearch onCourseSelect={handleCourseSelect} />

      {selectedCourse && (
        <div className="mt-12 animate-fade-in">
          <h2 className="text-3xl font-extrabold text-center mb-4 text-slate-800">
            Fee Structure for: <span className="text-blue-600">{selectedCourse.title}</span>
          </h2>
          <p className="text-center text-slate-500 mb-8">
            Duration: {selectedCourse.durationYears} Years · School: {schoolNames[selectedCourse.group] || selectedCourse.group}
          </p>

          {/* Scholarship Panels Grid - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAllScholarshipOptions(selectedCourse).map(scholarshipPercent => (
              <ScholarshipPanel
                key={scholarshipPercent}
                course={selectedCourse}
                scholarship={scholarshipPercent}
              />
            ))}
          </div>
        </div>
      )}

      {!selectedCourse && (
        <div className="text-center mt-16 text-slate-500">
          <p className="text-2xl mb-2">🎓</p>
          <p className="text-lg">Please select a course to see the detailed fee breakdown.</p>
        </div>
      )}
    </div>
  );
};

export default FeeCalculator;
