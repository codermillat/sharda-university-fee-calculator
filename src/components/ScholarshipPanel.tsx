import React, { useState } from 'react';
import { Course } from '../types';
import { generateCopyText, formatCurrency } from '../utils/calcFees';
import { MANDATORY_FEES } from '../data/fees';

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
      setTimeout(() => setShowToast(false), 2000); // Hide toast after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy. Please try again or copy manually.');
    });
  };

  const title = scholarship > 0 ? `${scholarship}% Scholarship` : 'No Scholarship';

  return (
    <div className="border-2 border-slate-200 rounded-xl shadow-md mb-8 bg-white">
      {/* Panel Header */}
      <div className="flex justify-between items-center p-4 bg-slate-50 rounded-t-xl border-b-2 border-slate-200">
        <h3 className="text-xl md:text-2xl font-bold text-slate-800">{title}</h3>
        <button
          onClick={handleCopy}
          className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform active:scale-95"
          aria-label={`Copy fee breakdown for ${title}`}
        >
          Copy
        </button>
      </div>

      {/* Fee Breakdown Table */}
      <div className="p-4 md:p-6">
        <div className="space-y-4">
          {course.years.map((yearTuition, index) => {
            const year = index + 1;
            const scholarshipAmount = (yearTuition * scholarship) / 100;
            const netTuition = yearTuition - scholarshipAmount;
            const mandatoryFee = year === 1 ? MANDATORY_FEES.firstYear : MANDATORY_FEES.subsequentYears;
            const totalYearlyFee = netTuition + mandatoryFee;

            return (
              <div key={year} className="p-3 bg-slate-50 rounded-lg">
                <p className="font-bold text-lg text-slate-700 mb-2">Year {year}</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm md:text-base">
                  <span className="text-slate-600">Tuition Fee:</span>
                  <span className="text-right font-medium">{formatCurrency(yearTuition)}</span>

                  {scholarship > 0 && (
                    <>
                      <span className="text-slate-600">Scholarship ({scholarship}%):</span>
                      <span className="text-right font-medium text-green-600">-{formatCurrency(scholarshipAmount)}</span>
                      <span className="font-semibold text-slate-700">Net Tuition:</span>
                      <span className="text-right font-bold">{formatCurrency(netTuition)}</span>
                    </>
                  )}

                  <span className="text-slate-600">{year === 1 ? 'Admission Fee:' : 'Other Fees:'}</span>
                  <span className="text-right font-medium">{formatCurrency(mandatoryFee)}</span>

                  <div className="col-span-2 mt-1 pt-1 border-t border-slate-300"></div>

                  <span className="font-bold text-blue-700 text-base">Total for Year {year}:</span>
                  <span className="text-right font-bold text-blue-700 text-base">{formatCurrency(totalYearlyFee)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl animate-fade-in-out"
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
