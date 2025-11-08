import { Course } from '../types';

/**
 * Defines the list of all available courses, their fee structures, and scholarship eligibility.
 *
 * SCHEMA:
 * - id: A unique identifier for the course (e.g., "btech-cse").
 * - title: The full name of the course.
 * - group: The school or department offering the course (e.g., "SSET").
 * - durationYears: The duration of the course in years.
 * - years: An array of numbers representing the tuition fee for each year. The length must match durationYears.
 * - scholarships: An array of integers representing the available scholarship percentages (e.g., [50, 20]). An empty array means no scholarships are available.
 * - notes: (Optional) Any specific notes about the course.
 */
export const COURSES: Course[] = [
  // === 4 EXAMPLE COURSES AS PER REQUIREMENTS ===

  {
    id: "btech-cse",
    title: "B.Tech. Computer Science & Engineering (CSE)",
    group: "SSET",
    durationYears: 4,
    years: [270000, 278100, 286443, 295036],
    scholarships: [50, 20],
  },
  {
    id: "bsc-cs",
    title: "B.Sc. Computer Science",
    group: "SSET",
    durationYears: 3,
    years: [116000, 119480, 123064],
    scholarships: [30, 20],
  },
  {
    id: "bsc-nursing",
    title: "B.Sc. Nursing",
    group: "SNSR",
    durationYears: 4,
    years: [240000, 247200, 254616, 262254],
    scholarships: [25],
  },
  {
    id: "mbbs",
    title: "MBBS",
    group: "SMSR",
    // Note: 4.5 years tuition + 1 year internship. Representing as 5 years for fee calculation.
    durationYears: 5,
    years: [1269319, 1269319, 1269319, 1269319, 634660],
    scholarships: [],
  },

  // === ADDITIONAL COURSES FROM PROVIDED LIST ===

  // SSET (Group 1 -> [50, 20])
  {
    id: "btech-it",
    title: "B.Tech. Information Technology (IT)",
    group: "SSET",
    durationYears: 4,
    years: [212000, 218360, 224911, 231658],
    scholarships: [50, 20],
  },
  {
    id: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    group: "SSET",
    durationYears: 3,
    years: [180000, 185400, 190962],
    scholarships: [50, 20],
  },

  // SBS (Group 1 -> [50, 20])
  {
    id: "bba",
    title: "BBA",
    group: "SBS",
    durationYears: 3,
    years: [231000, 237930, 245068],
    scholarships: [50, 20],
  },
  {
    id: "mba",
    title: "MBA",
    group: "SBS",
    durationYears: 2,
    years: [396550, 408447],
    scholarships: [50, 20],
  },

  // SBSR (Group 3 -> [30, 20])
  {
    id: "bsc-physics",
    title: "B.Sc. Physics",
    group: "SBSR",
    durationYears: 3,
    years: [110000, 113300, 116699],
    scholarships: [30, 20],
  },

  // Pharmacy (Group 4 -> [])
  {
    id: "bpharm",
    title: "Bachelor of Pharmacy (B. Pharm)",
    group: "Pharmacy",
    durationYears: 4,
    years: [240000, 247200, 254616, 262254],
    scholarships: [],
  },
];
