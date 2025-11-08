import { describe, it, expect } from 'vitest';
import { formatCurrency, generateCopyText } from '../calcFees';
import { Course } from '../../types';
import { MANDATORY_FEES } from '../../data/fees';

// Mock course data for testing
const mockCourseWithScholarship: Course = {
  id: 'btech-cse-test',
  title: 'B.Tech. Test CSE',
  group: 'SSET',
  durationYears: 4,
  years: [100000, 110000, 120000, 130000],
  scholarships: [50, 20],
};

const mockCourseWithoutScholarship: Course = {
  id: 'mbbs-test',
  title: 'MBBS Test',
  group: 'SMSR',
  durationYears: 2,
  years: [200000, 210000],
  scholarships: [],
};

describe('calcFees utility functions', () => {
  describe('formatCurrency', () => {
    it('formats a simple number correctly', () => {
      expect(formatCurrency(123456)).toBe('₹1,23,456');
    });

    it('formats a number with decimals by rounding', () => {
      expect(formatCurrency(98765.50)).toBe('₹98,766');
    });

    it('formats zero correctly', () => {
      expect(formatCurrency(0)).toBe('₹0');
    });
  });

  describe('generateCopyText', () => {
    it('generates correct text for a course with a 50% scholarship', () => {
      const scholarship = 50;
      const text = generateCopyText(mockCourseWithScholarship, scholarship);

      expect(text).toContain('*Estimate for: B.Tech. Test CSE*');
      expect(text).toContain('*Duration:* 4 years');
      expect(text).toContain('*Option:* 50% Scholarship');

      // Year 1
      const totalYear1 = 50000 + MANDATORY_FEES.firstYear;
      expect(text).toContain(`✅ *Total Year 1 = ${formatCurrency(totalYear1)}*`);

      // Year 2
      const totalYear2 = 55000 + MANDATORY_FEES.subsequentYears;
      expect(text).toContain(`✅ *Total Year 2 = ${formatCurrency(totalYear2)}*`);

      // Grand Totals
      const totalTuition = 100000 + 110000 + 120000 + 130000;
      const totalMandatory = MANDATORY_FEES.firstYear + (MANDATORY_FEES.subsequentYears * 3);
      const totalWithoutScholarship = totalTuition + totalMandatory;
      const totalWithScholarship = (totalTuition * 0.5) + totalMandatory;

      expect(text).toContain(`Without scholarship: ${formatCurrency(totalWithoutScholarship)}`);
      expect(text).toContain(`*After 50% scholarship: ${formatCurrency(totalWithScholarship)}*`);
    });

    it('generates correct text for a course with No Scholarship', () => {
      const scholarship = 0;
      const text = generateCopyText(mockCourseWithoutScholarship, scholarship);

      expect(text).toContain('*Estimate for: MBBS Test*');
      expect(text).toContain('*Duration:* 2 years');
      expect(text).toContain('*Option:* No Scholarship');
      expect(text).not.toContain('Scholarship (');
      expect(text).not.toContain('Net Tuition:');

      // Year 1
      const totalYear1 = 200000 + MANDATORY_FEES.firstYear;
      expect(text).toContain(`✅ *Total Year 1 = ${formatCurrency(totalYear1)}*`);

      // Grand Total
      const totalTuition = 200000 + 210000;
      const totalMandatory = MANDATORY_FEES.firstYear + MANDATORY_FEES.subsequentYears;
      const grandTotal = totalTuition + totalMandatory;

      expect(text).toContain(`*Total: ${formatCurrency(grandTotal)}*`);
    });
  });
});
