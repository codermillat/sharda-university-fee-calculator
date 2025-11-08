import { Course } from '../../types';
import { MANDATORY_FEES } from '../../data/fees';

/**
 * Formats a number into the Indian currency format (e.g., ₹1,23,456).
 * @param amount The number to format.
 * @returns The formatted currency string.
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
};

/**
 * Generates the detailed, WhatsApp-optimized fee breakdown text for copying.
 * @param course The selected course object.
 * @param scholarshipPercentage The scholarship percentage to apply (e.g., 50 for 50%).
 * @returns A formatted string ready for clipboard.
 */
export const generateCopyText = (course: Course, scholarshipPercentage: number): string => {
  let text = `*Estimate for: ${course.title}*\n`;
  text += `*Duration:* ${course.durationYears} years\n`;
  text += `*Option:* ${scholarshipPercentage > 0 ? `${scholarshipPercentage}% Scholarship` : 'No Scholarship'}\n\n`;

  let grandTotalWithoutScholarship = 0;
  let grandTotalWithScholarship = 0;

  course.years.forEach((yearTuition, index) => {
    const year = index + 1;
    const scholarshipAmount = (yearTuition * scholarshipPercentage) / 100;
    const netTuition = yearTuition - scholarshipAmount;
    const mandatoryFee = year === 1 ? MANDATORY_FEES.firstYear : MANDATORY_FEES.subsequentYears;

    const yearTotalWithScholarship = netTuition + mandatoryFee;
    const yearTotalWithoutScholarship = yearTuition + mandatoryFee;

    grandTotalWithScholarship += yearTotalWithScholarship;
    grandTotalWithoutScholarship += yearTotalWithoutScholarship;

    text += `*Year ${year}*\n`;
    text += `Tuition Fee: ${formatCurrency(yearTuition)}\n`;
    if (scholarshipPercentage > 0) {
      text += `Scholarship (${scholarshipPercentage}%): –${formatCurrency(scholarshipAmount)}\n`;
      text += `Net Tuition: ${formatCurrency(netTuition)}\n`;
    }
    if (year === 1) {
      text += `Admission Fee: ${formatCurrency(mandatoryFee)} (Including Registration fee, Examination fee, Medical Insurance, eFRRO assistance)\n`;
    } else {
      text += `Other Fees: ${formatCurrency(mandatoryFee)} (Registration fee, Examination fee, Medical Insurance, eFRRO assistance)\n`;
    }
    text += `✅ *Total Year ${year} = ${formatCurrency(yearTotalWithScholarship)}*\n\n`;
  });

  text += '---\n\n';
  text += `*GRAND TOTAL (Tuition + mandatory fees)*\n`;
  if (scholarshipPercentage > 0) {
    text += `Without scholarship: ${formatCurrency(grandTotalWithoutScholarship)}\n`;
    text += `*After ${scholarshipPercentage}% scholarship: ${formatCurrency(grandTotalWithScholarship)}*\n`;
  } else {
    text += `*Total: ${formatCurrency(grandTotalWithScholarship)}*\n`;
  }

  return text;
};
