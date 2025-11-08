export interface Course {
  id: string;
  title: string;
  group: string;
  durationYears: number;
  years: number[];
  scholarships: number[];
  notes?: string;
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
