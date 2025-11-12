import { Course } from '../../types';

export interface ScholarshipEligibility {
  eligibility: string;
  note?: string;
}

/**
 * Determines the eligibility criteria for a scholarship based on the scholarship percentage and course
 * @param scholarship - The scholarship percentage (e.g., 50, 30, 25, 20, 0)
 * @param course - The course object containing title and scholarships array
 * @returns Object containing eligibility text and optional note
 */
export const getScholarshipEligibility = (
  scholarship: number,
  course: Course
): ScholarshipEligibility => {
  const courseTitle = course.title.toLowerCase();
  const courseScholarships = course.scholarships;
  const hasBoth50And20 = courseScholarships.includes(50) && courseScholarships.includes(20);
  const has30 = courseScholarships.includes(30);
  const has25 = courseScholarships.includes(25);
  const isBScNursing = has25 || (courseTitle.includes('b.sc') && courseTitle.includes('nursing') && !courseTitle.includes('m.sc'));

  // 50% Scholarship - Tiered programs
  if (scholarship === 50) {
    return {
      eligibility: 'GPA 3.5-5.0',
      note: 'Applicable on Tuition Fees Only'
    };
  }

  // 30% Scholarship - Educational Excellence
  if (scholarship === 30) {
    return {
      eligibility: 'Educational Excellence (Very Limited, First Come First Serve)',
      note: 'Applicable on Tuition Fees Only'
    };
  }

  // 25% Scholarship - B.Sc Nursing only
  if (scholarship === 25) {
    return {
      eligibility: 'GPA 3.0 or above',
      note: 'Applicable on Tuition Fees Only'
    };
  }

  // 20% Scholarship
  if (scholarship === 20) {
    // If course has both 50% and 20%, it's a tiered program
    if (hasBoth50And20) {
      return {
        eligibility: 'GPA 3.0-3.4',
        note: 'Applicable on Tuition Fees Only'
      };
    }
    // Otherwise, it's a rest program with fixed 20%
    return {
      eligibility: 'GPA 3.0-5.0',
      note: 'Applicable on Tuition Fees Only'
    };
  }

  // Without Scholarship (0%)
  if (scholarship === 0) {
    return {
      eligibility: 'Not eligible for scholarship under this policy'
    };
  }

  // Default fallback
  return {
    eligibility: 'Please check with university for eligibility criteria',
    note: 'Applicable on Tuition Fees Only'
  };
};

