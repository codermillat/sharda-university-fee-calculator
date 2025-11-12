import React, { useState } from 'react';
import { Course } from '../../types';
import { generateCopyText, formatCurrency } from '../utils/calcFees';
import { MANDATORY_FEES } from '../../data/fees';
import { trackCopyButton } from '../utils/analytics';
import { getScholarshipEligibility } from '../utils/scholarshipEligibility';

interface ScholarshipPanelProps {
  course: Course;
  scholarship: number; // e.g., 50 for 50%, 0 for "Without Scholarship"
}

const ScholarshipPanel: React.FC<ScholarshipPanelProps> = ({ course, scholarship }) => {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    const textToCopy = generateCopyText(course, scholarship);
    navigator.clipboard.writeText(textToCopy).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000); // Hide toast after 2 seconds
      // Track copy button click
      trackCopyButton(course.title, scholarship);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy. Please try again or copy manually.');
    });
  };

  const title = scholarship > 0 ? `${scholarship}% Scholarship` : 'Without Scholarship';

  // Calculate grand totals
  let grandTotalWithScholarship = 0;
  let grandTotalWithoutScholarship = 0;

  course.years.forEach((yearTuition, index) => {
    const year = index + 1;
    const scholarshipAmount = (yearTuition * scholarship) / 100;
    const netTuition = yearTuition - scholarshipAmount;
    const mandatoryFee = year === 1 ? MANDATORY_FEES.firstYear : MANDATORY_FEES.subsequentYears;

    grandTotalWithScholarship += netTuition + mandatoryFee;
    grandTotalWithoutScholarship += yearTuition + mandatoryFee;
  });

  return (
    <div className="border-2 border-slate-200 rounded-xl shadow-md bg-white h-full flex flex-col">
      {/* Panel Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-3 sm:p-4 bg-slate-50 rounded-t-xl border-b-2 border-slate-200">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800">{title}</h3>
        <button
          onClick={handleCopy}
          className="w-full sm:w-auto px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform active:scale-95"
          aria-label={`Copy fee breakdown for ${title}`}
        >
          Copy
        </button>
      </div>

      {/* Fee Breakdown Table - Original left/right layout */}
      <div className="p-3 sm:p-4 md:p-6 flex-grow overflow-y-auto">
        <div className="space-y-2 sm:space-y-3">
          {course.years.map((yearTuition, index) => {
            const year = index + 1;
            const scholarshipAmount = (yearTuition * scholarship) / 100;
            const netTuition = yearTuition - scholarshipAmount;
            const mandatoryFee = year === 1 ? MANDATORY_FEES.firstYear : MANDATORY_FEES.subsequentYears;
            const totalYearlyFee = netTuition + mandatoryFee;

            return (
              <div key={year} className="p-2 sm:p-3 bg-slate-50 rounded-lg">
                <p className="font-bold text-sm sm:text-base text-slate-700 mb-1">Year {year}</p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-xs sm:text-sm">
                  <span className="text-slate-600">Tuition Fee:</span>
                  <span className="text-right font-medium">{formatCurrency(yearTuition)}</span>

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
            <span className="font-extrabold text-blue-700 text-sm sm:text-base">{formatCurrency(grandTotalWithScholarship)}</span>
          </div>
          {scholarship > 0 && (
            <div className="flex justify-between items-center mt-1 text-green-700">
              <span className="text-xs sm:text-sm">Savings with {scholarship}% Scholarship:</span>
              <span className="font-semibold text-xs sm:text-sm">-{formatCurrency(grandTotalWithoutScholarship - grandTotalWithScholarship)}</span>
            </div>
          )}
        </div>

        {/* Eligibility Criteria Section */}
        <div className="mt-2 pt-2 border-t border-slate-200 px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
          {(() => {
            const eligibilityInfo = getScholarshipEligibility(scholarship, course);
            return (
              <div className="space-y-1">
                <p className="text-xs text-slate-600">
                  <span className="font-medium">Eligibility:</span> {eligibilityInfo.eligibility}
                </p>
                {eligibilityInfo.note && (
                  <p className="text-xs text-slate-500 italic">
                    {eligibilityInfo.note}
                  </p>
                )}
              </div>
            );
          })()}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-xl animate-fade-in-out text-sm"
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
