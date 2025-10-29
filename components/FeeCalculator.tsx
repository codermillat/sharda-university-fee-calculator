import React, { useState, useMemo } from 'react';
import { Course, YearlyFeeBreakdown } from '../types';
import { COURSES } from '../data/courses';
import { 
    ADMISSION_FEE, 
    EXAM_FEE_PER_SEMESTER, 
    INTERNATIONAL_STUDENT_FEE_YEAR_1,
    INTERNATIONAL_STUDENT_FEE_ONWARDS,
    REGISTRATION_FEE_ANNUAL
} from '../constants';
import CourseSelector from './CourseSelector';
import GpaInput from './GpaInput';
import ResultsPanel from './ResultsPanel';

const FeeCalculator: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [gpa, setGpa] = useState<number>(3.0);

  const handleCourseSelect = (course: Course | null) => {
    setSelectedCourse(course);
  };

  const handleGpaChange = (newGpa: number) => {
    setGpa(newGpa);
  };
  
  const handleReset = () => {
    setSelectedCourse(null);
    setGpa(3.0);
  };

  const yearlyBreakdowns = useMemo<YearlyFeeBreakdown[] | null>(() => {
    if (!selectedCourse) return null;

    let scholarshipPercentage = 0;
    const { scholarshipGroup, annualFees } = selectedCourse;

    if (gpa >= 3.0) {
        switch (scholarshipGroup) {
            case 1:
                if (gpa >= 3.5) scholarshipPercentage = 50;
                else if (gpa >= 3.0) scholarshipPercentage = 20;
                break;
            case 2:
                scholarshipPercentage = 25;
                break;
            case 3:
                scholarshipPercentage = 20;
                break;
            case 4:
                scholarshipPercentage = 0;
                break;
        }
    }

    return annualFees.map((fee, index) => {
        const year = index + 1;
        const baseTuition = fee;

        const scholarshipAmount = (baseTuition * scholarshipPercentage) / 100;
        const netTuition = baseTuition - scholarshipAmount;
        
        const examFeeTotal = EXAM_FEE_PER_SEMESTER * 2;
        let otherFees = 0;
        
        if (year === 1) {
            otherFees = ADMISSION_FEE + examFeeTotal + INTERNATIONAL_STUDENT_FEE_YEAR_1;
        } else {
            otherFees = REGISTRATION_FEE_ANNUAL + examFeeTotal + INTERNATIONAL_STUDENT_FEE_ONWARDS;
        }

        const totalPayableWithScholarship = netTuition + otherFees;
        const totalPayableWithoutScholarship = baseTuition + otherFees;

        return {
            year,
            baseTuition,
            scholarshipPercentage,
            scholarshipAmount,
            netTuition,
            otherFees,
            totalPayableWithScholarship,
            totalPayableWithoutScholarship,
        };
    });

  }, [selectedCourse, gpa]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Input Panel */}
        <div className="flex flex-col space-y-8">
          <div>
            <p className="text-sm font-semibold text-sharda-blue mb-2">For Prospective Students from Bangladesh</p>
            <h2 className="text-3xl font-bold text-sharda-dark-blue mb-1">Fee Calculator</h2>
            <p className="text-slate-500">Select a course and enter your GPA for a full breakdown.</p>
          </div>
          
          <div className="flex-grow space-y-6">
            <CourseSelector
              courses={COURSES}
              selectedCourse={selectedCourse}
              onCourseSelect={handleCourseSelect}
            />
            <GpaInput gpa={gpa} onGpaChange={handleGpaChange} disabled={!selectedCourse} />
          </div>

          <div className="flex flex-col space-y-4">
              <button
                onClick={handleReset}
                className="w-full bg-slate-200 hover:bg-slate-300/80 text-slate-700 font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Reset Calculator
              </button>
              <div className={`transition-opacity duration-500 ${selectedCourse ? 'opacity-100 min-h-[80px]' : 'opacity-0 min-h-0'}`}>
                {selectedCourse && (
                    <div className="bg-sharda-dark-blue text-white rounded-lg p-4 text-center">
                        <p className="text-sm opacity-80">Estimate for:</p>
                        <p className="font-bold text-lg leading-tight">{selectedCourse.programName.split('(')[0]}</p>
                    </div>
                )}
              </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-gradient-to-br from-sharda-blue to-sharda-dark-blue rounded-xl p-6 md:p-8 text-white shadow-2xl">
          <ResultsPanel
            course={selectedCourse}
            gpa={gpa}
            breakdowns={yearlyBreakdowns}
          />
        </div>
      </div>
    </div>
  );
};

export default FeeCalculator;