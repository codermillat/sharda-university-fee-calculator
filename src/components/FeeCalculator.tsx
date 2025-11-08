import React, { useState } from 'react';
import { Course } from '../../types';
import CourseSearch from './CourseSearch';
import ScholarshipPanel from './ScholarshipPanel';

const FeeCalculator: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
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
            Duration: {selectedCourse.durationYears} Years · School: {selectedCourse.group}
          </p>

          <div>
            {/* "No Scholarship" Panel is always first */}
            <ScholarshipPanel course={selectedCourse} scholarship={0} />

            {/* Panels for each available scholarship */}
            {selectedCourse.scholarships.map(scholarshipPercent => (
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
