import React, { useState, useMemo } from 'react';
import { Course } from '../../types';
import { generateCopyText, formatCurrency } from '../utils/calcFees';
import { MANDATORY_FEES } from '../../data/fees';

interface ScholarshipPanelProps {
  course: Course;
  scholarship: number; // e.g., 50 for 50%, 0 for "No Scholarship"
}

const ScholarshipPanel: React.FC<ScholarshipPanelProps> = ({ course, scholarship }) => {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    const textToCopy = generateCopyText(course, scholarship);
    navigator.clipboard.writeText(textToCopy).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy. Please try again or copy manually.');
    });
  };

  // Calculate grand total for all years
  const grandTotal = useMemo(() => {
    return course.years.reduce((total, yearTuition, index) => {
      const year = index + 1;
      const scholarshipAmount = (yearTuition * scholarship) / 100;
      const netTuition = yearTuition - scholarshipAmount;
      const mandatoryFee = year === 1 ? MANDATORY_FEES.firstYear : MANDATORY_FEES.subsequentYears;
      return total + netTuition + mandatoryFee;
    }, 0);
  }, [course, scholarship]);

  const title = scholarship > 0 ? `${scholarship}% Scholarship` : 'No Scholarship';

  return (
    <div className="border-2 border-slate-200 rounded-lg shadow-md bg-white h-full flex flex-col">
      {/* Compact Panel Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-3 bg-slate-50 rounded-t-lg border-b border-slate-200">
        <h3 className="text-base sm:text-lg font-bold text-slate-800">{title}</h3>
        <button
          onClick={handleCopy}
          className="w-full sm:w-auto px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 transition-transform transform active:scale-95"
          aria-label={`Copy fee breakdown for ${title}`}
        >
          Copy
        </button>
      </div>

      {/* Compact Fee Breakdown */}
      <div className="p-3 sm:p-4 flex-grow overflow-y-auto">
        <div className="space-y-2">
          {course.years.map((yearTuition, index) => {
            const year = index + 1;
            const scholarshipAmount = (yearTuition * scholarship) / 100;
            const netTuition = yearTuition - scholarshipAmount;
            const mandatoryFee = year === 1 ? MANDATORY_FEES.firstYear : MANDATORY_FEES.subsequentYears;
            const totalYearlyFee = netTuition + mandatoryFee;

            return (
              <div key={year} className="p-2 bg-slate-50 rounded text-xs sm:text-sm">
                <p className="font-semibold text-slate-700 mb-1.5 text-sm">Year {year}</p>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                  <span className="text-slate-600 text-xs">Tuition:</span>
                  <span className="text-right font-medium text-xs">{formatCurrency(yearTuition)}</span>

                  {scholarship > 0 && (
                    <>
                      <span className="text-slate-600 text-xs">Scholarship:</span>
                      <span className="text-right font-medium text-green-600 text-xs">-{formatCurrency(scholarshipAmount)}</span>
                      <span className="font-medium text-slate-700 text-xs">Net Tuition:</span>
                      <span className="text-right font-semibold text-xs">{formatCurrency(netTuition)}</span>
                    </>
                  )}

                  <span className="text-slate-600 text-xs">{year === 1 ? 'Admission:' : 'Other Fees:'}</span>
                  <span className="text-right font-medium text-xs">{formatCurrency(mandatoryFee)}</span>

                  <div className="col-span-2 mt-1 pt-1 border-t border-slate-300"></div>

                  <span className="font-semibold text-blue-700 text-xs">Year {year} Total:</span>
                  <span className="text-right font-bold text-blue-700 text-xs">{formatCurrency(totalYearlyFee)}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grand Total Section */}
        <div className="mt-3 pt-3 border-t-2 border-slate-300 bg-blue-50 rounded p-2.5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-slate-800 text-sm sm:text-base">Grand Total:</span>
            <span className="text-right font-extrabold text-blue-700 text-base sm:text-lg">{formatCurrency(grandTotal)}</span>
          </div>
          <p className="text-xs text-slate-600 mt-1">All {course.durationYears} years combined</p>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-xl animate-fade-in-out text-sm z-50"
          role="status"
          aria-live="polite"
        >
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ScholarshipPanel;
