export interface Course {
  id: string;
  programName: string;
  school: string;
  annualFees: number[]; // Replaces firstYearTuitionFee, length implies duration
  scholarshipGroup: 1 | 2 | 3 | 4;
}

export interface YearlyFeeBreakdown {
  year: number;
  baseTuition: number;
  scholarshipPercentage: number;
  scholarshipAmount: number;
  netTuition: number;
  otherFees: number;
  totalPayableWithScholarship: number;
  totalPayableWithoutScholarship: number;
}
