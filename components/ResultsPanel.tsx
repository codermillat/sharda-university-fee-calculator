import React, { useState, useMemo, useEffect } from 'react';
import { Course, YearlyFeeBreakdown } from '../types';

// Hoisted helper function to prevent re-creation on every render
const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount).replace('₹', 'INR ');
};

// Hoisted AccordionItem component to prevent re-creation on every render
const AccordionItem: React.FC<{
  yearBreakdown: YearlyFeeBreakdown;
  view: 'scholarship' | 'full';
  isOpen: boolean;
  onToggle: () => void;
}> = ({ yearBreakdown, view, isOpen, onToggle }) => {
    const total = view === 'scholarship' ? yearBreakdown.totalPayableWithScholarship : yearBreakdown.totalPayableWithoutScholarship;
    
    return (
        <div className={`bg-white/10 rounded-lg overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/20' : ''}`}>
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center p-3 font-bold text-md text-left"
                aria-expanded={isOpen}
            >
                <span>Year {yearBreakdown.year}</span>
                <div className="flex items-center space-x-2">
                    <span className="text-sharda-orange">{formatCurrency(total)}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
            <div
                className={`transition-all duration-500 ease-in-out grid ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="p-4 pt-0 text-sm space-y-2 border-t border-white/10 mt-2">
                        <div className="flex justify-between items-center pt-2">
                            <span className="opacity-80">Tuition Fee</span>
                            <span>{formatCurrency(yearBreakdown.baseTuition)}</span>
                        </div>
                        {view === 'scholarship' && yearBreakdown.scholarshipAmount > 0 && (
                            <div className="flex justify-between items-center text-green-300">
                                <span className="opacity-80">Scholarship ({yearBreakdown.scholarshipPercentage}%)</span>
                                <span>- {formatCurrency(yearBreakdown.scholarshipAmount)}</span>
                            </div>
                        )}
                        <div className="flex justify-between items-center">
                            <span className="opacity-80">Other Fees</span>
                            <span>+ {formatCurrency(yearBreakdown.otherFees)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Fix: Define the props interface for the ResultsPanel component.
interface ResultsPanelProps {
  course: Course | null;
  gpa: number;
  breakdowns: YearlyFeeBreakdown[] | null;
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({ course, gpa, breakdowns }) => {
  const [view, setView] = useState<'scholarship' | 'full'>('scholarship');
  const [openYear, setOpenYear] = useState<number | null>(1);

  const handleToggleYear = (year: number) => {
    setOpenYear(openYear === year ? null : year);
  };

  const grandTotal = useMemo(() => {
    if (!breakdowns) return 0;
    return breakdowns.reduce((acc, year) => {
        return acc + (view === 'scholarship' ? year.totalPayableWithScholarship : year.totalPayableWithoutScholarship);
    }, 0);
  }, [breakdowns, view]);

  // When a new course is selected, reset the open accordion to the first year.
  useEffect(() => {
    setOpenYear(1);
  }, [course?.id]);

  if (!course || !breakdowns) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center min-h-[400px]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        <h3 className="text-xl font-bold">Your Fee Estimate</h3>
        <p className="opacity-70 mt-1">Select a course to see your breakdown.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold opacity-80">Estimate for:</h3>
        <p className="text-2xl font-bold mb-1">{course.programName}</p>
        <p className="text-sm opacity-80">Your GPA: {gpa.toFixed(2)}</p>
      </div>

      {/* View Toggles */}
      <div className="mt-4 grid grid-cols-2 gap-2 bg-black/20 p-1 rounded-full">
        <button 
          onClick={() => setView('scholarship')}
          className={`px-4 py-2 text-sm font-bold rounded-full transition-colors duration-300 ${view === 'scholarship' ? 'bg-white text-sharda-blue' : 'bg-transparent text-white/80 hover:bg-white/10'}`}
        >
          With Scholarship
        </button>
        <button 
          onClick={() => setView('full')}
          className={`px-4 py-2 text-sm font-bold rounded-full transition-colors duration-300 ${view === 'full' ? 'bg-white text-sharda-blue' : 'bg-transparent text-white/80 hover:bg-white/10'}`}
        >
          Full Fee
        </button>
      </div>
      
      {/* Yearly Breakdown Accordion */}
      <div className="my-4 flex-grow space-y-2 overflow-y-auto pr-2 min-h-[200px]">
        {breakdowns.map((yearBreakdown) => (
          <AccordionItem
            key={yearBreakdown.year}
            yearBreakdown={yearBreakdown}
            view={view}
            isOpen={openYear === yearBreakdown.year}
            onToggle={() => handleToggleYear(yearBreakdown.year)}
          />
        ))}
      </div>

      {/* Grand Total */}
      <div className="mt-auto bg-black/20 p-4 rounded-lg text-center">
        <p className="text-sm uppercase tracking-wider opacity-80 font-semibold">
            Grand Total ({course.annualFees.length} {course.annualFees.length > 1 ? 'Years' : 'Year'})
        </p>
        <p className="text-4xl font-extrabold text-sharda-orange drop-shadow-lg">{formatCurrency(grandTotal)}</p>
      </div>
    </div>
  );
};

export default ResultsPanel;
