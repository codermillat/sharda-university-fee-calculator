import { Course } from '../types';

/**
 * Defines the list of all available courses, their fee structures, and scholarship eligibility.
 *
 * SCHOLARSHIP GROUPS:
 * - Group 1: [50, 20] - Tiered scholarship (50% for GPA 3.5-5.0, 20% for GPA 3.0-3.4)
 * - Group 2: [25] - Fixed 25% scholarship (B.Sc. Nursing)
 * - Group 3: [30, 20] - Fixed 20% and 30% scholarship (GPA 3.0-5.0)
 * - Group 4: [] - No scholarship
 *
 * SCHEMA:
 * - id: A unique identifier for the course
 * - title: The full name of the course
 * - group: The school or department offering the course
 * - durationYears: The duration of the course in years
 * - years: An array of numbers representing the tuition fee for each year
 * - scholarships: An array of integers representing the available scholarship percentages
 * - notes: (Optional) Any specific notes about the course
 */

const BASE_COURSES: Course[] = [
  // ========== SHARDA SCHOOL OF ENGINEERING & TECHNOLOGY (SSET) ==========
  // Group 1: [50, 20] - B.Tech All Specializations, BCA, MCA

  {
    id: 'btech-cse',
    title: 'B.Tech. Computer Science & Engineering (CSE)',
    group: 'SSET',
    durationYears: 4,
    years: [270000, 278100, 286443, 295036],
    scholarships: [50, 20],
  },
  {
    id: 'btech-cse-blockchain',
    title: 'B.Tech. CSE (Block Chain Technology)',
    group: 'SSET',
    durationYears: 4,
    years: [280000, 288400, 297052, 305964],
    scholarships: [50, 20],
  },
  {
    id: 'btech-cse-ai-ml',
    title: 'B.Tech. CSE (Artificial Intelligence & Machine Learning)',
    group: 'SSET',
    durationYears: 4,
    years: [280000, 288400, 297052, 305964],
    scholarships: [50, 20],
  },
  {
    id: 'btech-cse-ar-vr',
    title: 'B.Tech. CSE (Augmented & Virtual Reality)',
    group: 'SSET',
    durationYears: 4,
    years: [280000, 288400, 297052, 305964],
    scholarships: [50, 20],
  },
  {
    id: 'btech-cse-cyber',
    title: 'B.Tech. CSE (Cyber Security & Forensics)',
    group: 'SSET',
    durationYears: 4,
    years: [280000, 288400, 297052, 305964],
    scholarships: [50, 20],
    notes: 'In association with EC-Council',
  },
  {
    id: 'btech-cse-iot',
    title: 'B.Tech. CSE (AI for IoT applications)',
    group: 'SSET',
    durationYears: 4,
    years: [280000, 288400, 297052, 305964],
    scholarships: [50, 20],
    notes: 'In association with AERIS',
  },
  {
    id: 'btech-cse-cloud',
    title: 'B.Tech. CSE (Cloud Technology & Virtualization)',
    group: 'SSET',
    durationYears: 4,
    years: [280000, 288400, 297052, 305964],
    scholarships: [50, 20],
    notes: 'In association with AWS',
  },
  {
    id: 'btech-cse-data-science',
    title: 'B.Tech. CSE (Data Science & Analytics)',
    group: 'SSET',
    durationYears: 4,
    years: [300000, 309000, 318270, 327818],
    scholarships: [50, 20],
    notes: 'In association with Oracle',
  },
  {
    id: 'btech-cse-fullstack',
    title: 'B.Tech. CSE (Full Stack Development)',
    group: 'SSET',
    durationYears: 4,
    years: [300000, 309000, 318270, 327818],
    scholarships: [50, 20],
    notes: 'In association with Xebia',
  },
  {
    id: 'btech-it',
    title: 'B.Tech. Information Technology (IT)',
    group: 'SSET',
    durationYears: 4,
    years: [212000, 218360, 224911, 231658],
    scholarships: [50, 20],
  },
  {
    id: 'btech-eee-ev',
    title: 'B.Tech. EEE (Electric Vehicle Technology)',
    group: 'SSET',
    durationYears: 4,
    years: [185400, 190962, 196691, 202592],
    scholarships: [50, 20],
  },
  {
    id: 'btech-eee-renewable',
    title: 'B.Tech. EEE (Renewable Energy Systems)',
    group: 'SSET',
    durationYears: 4,
    years: [185400, 190962, 196691, 202592],
    scholarships: [50, 20],
  },
  {
    id: 'btech-ece-robotics',
    title: 'B.Tech. ECE (Robotics and Automation)',
    group: 'SSET',
    durationYears: 4,
    years: [185400, 190962, 196691, 202592],
    scholarships: [50, 20],
  },
  {
    id: 'btech-ece-vlsi',
    title: 'B.Tech. ECE (VLSI Design and Technology)',
    group: 'SSET',
    durationYears: 4,
    years: [185400, 190962, 196691, 202592],
    scholarships: [50, 20],
  },
  {
    id: 'btech-ece-iot',
    title: 'B.Tech. Electronics & Computer Engg. (IoT)',
    group: 'SSET',
    durationYears: 4,
    years: [185400, 190962, 196691, 202592],
    scholarships: [50, 20],
  },
  {
    id: 'btech-ece-ai-ml',
    title: 'B.Tech. Electronics & Computer Engg. (AI and ML)',
    group: 'SSET',
    durationYears: 4,
    years: [185400, 190962, 196691, 202592],
    scholarships: [50, 20],
  },
  {
    id: 'btech-me-automotive',
    title: 'B.Tech. ME (Automotive Electrical Vehicles)',
    group: 'SSET',
    durationYears: 4,
    years: [185400, 190962, 196691, 202592],
    scholarships: [50, 20],
  },
  {
    id: 'btech-me-mechatronics',
    title: 'B.Tech. ME (Mechatronics)',
    group: 'SSET',
    durationYears: 4,
    years: [185400, 190962, 196691, 202592],
    scholarships: [50, 20],
  },
  {
    id: 'btech-civil',
    title: 'B.Tech. Civil Engineering',
    group: 'SSET',
    durationYears: 4,
    years: [185400, 190962, 196691, 202592],
    scholarships: [50, 20],
  },
  {
    id: 'btech-biotech-stem',
    title: 'B.Tech. Biotechnology (Stem Cell & Tissue Engg.)',
    group: 'SSET',
    durationYears: 4,
    years: [206000, 212180, 218545, 225102],
    scholarships: [50, 20],
  },
  {
    id: 'btech-biotech-genetic',
    title: 'B.Tech. Biotechnology (Genetic Engineering)',
    group: 'SSET',
    durationYears: 4,
    years: [206000, 212180, 218545, 225102],
    scholarships: [50, 20],
  },
  {
    id: 'bca-ai-ml',
    title: 'BCA (AI and Machine Learning)',
    group: 'SSET',
    durationYears: 3,
    years: [180000, 185400, 190962],
    scholarships: [50, 20],
  },
  {
    id: 'bca-cloud-iot',
    title: 'BCA (Cloud Computing and IoT)',
    group: 'SSET',
    durationYears: 3,
    years: [180000, 185400, 190962],
    scholarships: [50, 20],
  },
  {
    id: 'bsc-cs-ai-ml',
    title: 'B.Sc. Computer Science (AI and Machine Learning)',
    group: 'SSET',
    durationYears: 3,
    years: [116000, 119480, 123064],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'bsc-cs-cloud-iot',
    title: 'B.Sc. Computer Science (Cloud Computing and IoT)',
    group: 'SSET',
    durationYears: 3,
    years: [116000, 119480, 123064],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'bsc-it',
    title: 'B.Sc. Information Technology',
    group: 'SSET',
    durationYears: 3,
    years: [116000, 119480, 123064],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mca',
    title: 'MCA',
    group: 'SSET',
    durationYears: 2,
    years: [180000, 185400],
    scholarships: [50, 20],
  },
  {
    id: 'msc-cs',
    title: 'M.Sc. Computer Science',
    group: 'SSET',
    durationYears: 2,
    years: [122000, 125660],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'msc-genetic-engg',
    title: 'M.Sc. Genetic Engineering',
    group: 'SSET',
    durationYears: 2,
    years: [118450, 122004],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-biotech',
    title: 'M.Tech. Biotechnology (Animal/Plant/Genetic/Bio-Engg)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-food-process',
    title: 'M.Tech. Food Process Technology',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-civil',
    title: 'M.Tech. Civil Engineering (Multiple Specializations)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-cse',
    title: 'M.Tech. CSE (Networking/Cyber Security/Software Engg/Data Science)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-eee',
    title: 'M.Tech. EEE (Instrumentation/Automation/Power System)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-ece',
    title: 'M.Tech. ECE (Digital Communication/VLSI Technology)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-me',
    title: 'M.Tech. Mechanical Engineering',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },

  // ========== SHARDA SCHOOL OF BUSINESS STUDIES (SBS) ==========
  // Group 1: [50, 20] - BBA, MBA, B.Com

  {
    id: 'bcom',
    title: 'B.Com.',
    group: 'SBS',
    durationYears: 3,
    years: [175000, 180250, 185658],
    scholarships: [50, 20],
  },
  {
    id: 'bcom-hons',
    title: 'B.Com. (Hons./Research)',
    group: 'SBS',
    durationYears: 4,
    years: [175000, 180250, 185658, 191227],
    scholarships: [50, 20],
    notes: '4-year Hons./Research option',
  },
  {
    id: 'bcom-finance-ica',
    title: 'B.Com. (Finance & Accounting with ICA)',
    group: 'SBS',
    durationYears: 3,
    years: [200000, 206000, 212180],
    scholarships: [50, 20],
  },
  {
    id: 'bcom-international-acc',
    title: 'B.Com. (International Accounting & Finance)',
    group: 'SBS',
    durationYears: 3,
    years: [215000, 221450, 228094],
    scholarships: [50, 20],
    notes: 'With ACCA, UK',
  },
  {
    id: 'bba',
    title: 'BBA',
    group: 'SBS',
    durationYears: 3,
    years: [231000, 237930, 245068],
    scholarships: [50, 20],
    notes: 'Multiple Specializations available',
  },
  {
    id: 'bba-hons',
    title: 'BBA (Hons./Research)',
    group: 'SBS',
    durationYears: 4,
    years: [231000, 237930, 245068, 252420],
    scholarships: [50, 20],
    notes: '4-year Hons./Research option',
  },
  {
    id: 'bba-finance-acc',
    title: 'BBA (Finance & Accounting)',
    group: 'SBS',
    durationYears: 3,
    years: [271000, 279130, 287504],
    scholarships: [50, 20],
    notes: 'With ACCA, UK',
  },
  {
    id: 'mcom',
    title: 'M.Com.',
    group: 'SBS',
    durationYears: 2,
    years: [120000, 123600],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mba',
    title: 'MBA',
    group: 'SBS',
    durationYears: 2,
    years: [396550, 408447],
    scholarships: [50, 20],
    notes: 'Multiple Specializations available',
  },
  {
    id: 'mba-dual',
    title: 'MBA (Dual Specialization)',
    group: 'SBS',
    durationYears: 2,
    years: [450000, 463500],
    scholarships: [50, 20],
  },
  {
    id: 'executive-mba',
    title: 'Executive MBA',
    group: 'SBS',
    durationYears: 2,
    years: [50000, 41000],
    scholarships: [50, 20],
  },

  // ========== SHARDA SCHOOL OF LAW (SOL) ==========
  // Group 1: [50, 20] - LLB Integrated

  {
    id: 'bba-llb',
    title: 'B.B.A. LL.B. (Hons.) Integrated',
    group: 'SOL',
    durationYears: 5,
    years: [232000, 238960, 246129, 253513, 261118],
    scholarships: [50, 20],
  },
  {
    id: 'ba-llb',
    title: 'B.A. LL.B. (Hons.) Integrated',
    group: 'SOL',
    durationYears: 5,
    years: [232000, 238960, 246129, 253513, 261118],
    scholarships: [50, 20],
  },
  {
    id: 'llm',
    title: 'LL.M. (Corporate/Criminal/Human Rights/International Law)',
    group: 'SOL',
    durationYears: 1,
    years: [176000],
    scholarships: [30, 20], // Group 3
  },

  // ========== SHARDA SCHOOL OF HUMANITIES & SOCIAL SCIENCES (SHSS) ==========
  // Group 3: [30, 20] - Most BA programs

  {
    id: 'ba',
    title: 'B.A.',
    group: 'SHSS',
    durationYears: 3,
    years: [125000, 128750, 132613],
    scholarships: [30, 20],
    notes: 'English, History, Sociology, Pol Science, etc.',
  },
  {
    id: 'ba-hons',
    title: 'B.A. (Hons./Research)',
    group: 'SHSS',
    durationYears: 4,
    years: [125000, 128750, 132613, 136591],
    scholarships: [30, 20],
    notes: '4-year Hons./Research option',
  },
  {
    id: 'ba-psychology',
    title: 'B.A. Psychology',
    group: 'SHSS',
    durationYears: 3,
    years: [132000, 135960, 140039],
    scholarships: [30, 20],
  },
  {
    id: 'ba-psychology-hons',
    title: 'B.A. (Hons./Research) Psychology',
    group: 'SHSS',
    durationYears: 4,
    years: [132000, 135960, 140039, 144240],
    scholarships: [30, 20],
    notes: '4-year Hons./Research option',
  },
  {
    id: 'ba-economics',
    title: 'B.A. Economics',
    group: 'SHSS',
    durationYears: 3,
    years: [115000, 118450, 122004],
    scholarships: [30, 20],
  },
  {
    id: 'ba-economics-hons',
    title: 'B.A. (Hons./Research) Economics',
    group: 'SHSS',
    durationYears: 4,
    years: [115000, 118450, 122004, 125664],
    scholarships: [30, 20],
    notes: '4-year Hons./Research option',
  },
  {
    id: 'ma',
    title: 'M.A. (Multiple Specializations)',
    group: 'SHSS',
    durationYears: 2,
    years: [100000, 103000],
    scholarships: [30, 20],
    notes: 'English, History, Sociology, Psychology, etc.',
  },
  {
    id: 'ma-economics',
    title: 'M.A. Economics',
    group: 'SHSS',
    durationYears: 2,
    years: [130000, 133900],
    scholarships: [30, 20],
  },

  // ========== SHARDA SCHOOL OF BASIC SCIENCES & RESEARCH (SBSR) ==========
  // Group 3: [30, 20] - Most B.Sc. programs

  {
    id: 'bsc-physics-chem-maths',
    title: 'B.Sc. (Physics/Chemistry/Maths/Zoology)',
    group: 'SBSR',
    durationYears: 3,
    years: [110000, 113300, 116699],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-physics-chem-maths',
    title: 'B.Sc. (Hons./Research) (Physics/Chem/Maths/Zoology)',
    group: 'SBSR',
    durationYears: 4,
    years: [110000, 113300, 116699, 120200],
    scholarships: [30, 20],
    notes: '4-year Hons./Research option',
  },
  {
    id: 'bsc-biochem-biotech',
    title: 'B.Sc. (Bio Chemistry/Biotech/Microbiology/Food Science)',
    group: 'SBSR',
    durationYears: 3,
    years: [140000, 144200, 148526],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-biochem-biotech',
    title: 'B.Sc. (Hons./Research) (Bio Chem/Biotech/Micro/Food Sci)',
    group: 'SBSR',
    durationYears: 4,
    years: [140000, 144200, 148526, 152982],
    scholarships: [30, 20],
    notes: '4-year Hons./Research option',
  },
  {
    id: 'msc-sbsr',
    title: 'M.Sc. (Multiple Specializations)',
    group: 'SBSR',
    durationYears: 2,
    years: [130000, 133900],
    scholarships: [30, 20],
  },

  // ========== SHARDA SCHOOL OF NURSING SCIENCES & RESEARCH (SNSR) ==========
  // Group 2: [25] - B.Sc. Nursing
  // Group 4: [] - M.Sc. Nursing

  {
    id: 'bsc-nursing',
    title: 'B.Sc. Nursing',
    group: 'SNSR',
    durationYears: 4,
    years: [240000, 247200, 254616, 262254],
    scholarships: [25],
  },
  {
    id: 'msc-nursing',
    title: 'M.Sc. Nursing',
    group: 'SNSR',
    durationYears: 2,
    years: [240000, 247200],
    scholarships: [], // Group 4 - No scholarship
  },

  // ========== SHARDA SCHOOL OF MEDICAL SCIENCES & RESEARCH (SMSR) ==========
  // Group 4: [] - MBBS, BDS, Medical M.Sc., MPT

  {
    id: 'mbbs',
    title: 'MBBS',
    group: 'SMSR',
    durationYears: 5,
    years: [1269319, 1269319, 1269319, 1269319, 634660],
    scholarships: [], // Group 4 - No scholarship
    notes: '4.5 years tuition + 1 year internship',
  },
  {
    id: 'bds',
    title: 'BDS (Bachelor of Dental Surgery)',
    group: 'SMSR',
    durationYears: 5,
    years: [1269319, 1269319, 1269319, 1269319, 634660],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'msc-medical',
    title: 'Medical M.Sc.',
    group: 'SMSR',
    durationYears: 2,
    years: [240000, 247200],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'mpt',
    title: 'MPT (Master of Physiotherapy)',
    group: 'SMSR',
    durationYears: 2,
    years: [240000, 247200],
    scholarships: [], // Group 4 - No scholarship
  },

  // ========== PHARMACY ==========
  // Group 4: [] - No scholarship

  {
    id: 'bpharm',
    title: 'Bachelor of Pharmacy (B. Pharm)',
    group: 'Pharmacy',
    durationYears: 4,
    years: [240000, 247200, 254616, 262254],
    scholarships: [], // Group 4 - No scholarship
  },
];

const createLateralEntryCourse = (config: { baseId: string; title: string; notes?: string }): Course => {
  const baseCourse = BASE_COURSES.find(course => course.id === config.baseId);

  if (!baseCourse) {
    throw new Error(`Unable to create lateral entry course. Base course with id "${config.baseId}" not found.`);
  }

  const lateralDuration = Math.max(baseCourse.durationYears - 1, 1);
  const tuitionYears = baseCourse.years.slice(baseCourse.years.length - lateralDuration);

  return {
    id: `${config.baseId}-lateral`,
    title: config.title,
    group: baseCourse.group,
    durationYears: lateralDuration,
    years: tuitionYears,
    scholarships: baseCourse.scholarships.length > 0 ? baseCourse.scholarships : [50, 20],
    notes: config.notes ?? 'Lateral Entry (Direct Second Year)',
  };
};

const LATERAL_ENTRY_CONFIGS: Array<{ baseId: string; title: string; notes?: string }> = [
  { baseId: 'btech-cse', title: 'B.Tech. Lateral Entry - Computer Science & Engineering (CSE)' },
  { baseId: 'btech-cse-blockchain', title: 'B.Tech. Lateral Entry - CSE (Block Chain Technology)' },
  { baseId: 'btech-cse-ai-ml', title: 'B.Tech. Lateral Entry - CSE (Artificial Intelligence & Machine Learning)' },
  { baseId: 'btech-cse-ar-vr', title: 'B.Tech. Lateral Entry - CSE (Augmented & Virtual Reality)' },
  { baseId: 'btech-cse-cyber', title: 'B.Tech. Lateral Entry - CSE (Cyber Security & Forensics)' },
  { baseId: 'btech-cse-iot', title: 'B.Tech. Lateral Entry - CSE (AI for IoT applications)' },
  { baseId: 'btech-cse-cloud', title: 'B.Tech. Lateral Entry - CSE (Cloud Technology & Virtualization)' },
  { baseId: 'btech-cse-data-science', title: 'B.Tech. Lateral Entry - CSE (Data Science & Analytics)' },
  { baseId: 'btech-cse-fullstack', title: 'B.Tech. Lateral Entry - CSE (Full Stack Development)' },
  { baseId: 'btech-it', title: 'B.Tech. Lateral Entry - Information Technology (IT)' },
  { baseId: 'btech-eee-ev', title: 'B.Tech. Lateral Entry - EEE (Electric Vehicle Technology)' },
  { baseId: 'btech-eee-renewable', title: 'B.Tech. Lateral Entry - EEE (Renewable Energy Systems)' },
  { baseId: 'btech-ece-robotics', title: 'B.Tech. Lateral Entry - ECE (Robotics and Automation)' },
  { baseId: 'btech-ece-vlsi', title: 'B.Tech. Lateral Entry - ECE (VLSI Design and Technology)' },
  { baseId: 'btech-ece-iot', title: 'B.Tech. Lateral Entry - Electronics & Computer Engg. (IoT)' },
  { baseId: 'btech-ece-ai-ml', title: 'B.Tech. Lateral Entry - Electronics & Computer Engg. (AI and ML)' },
  { baseId: 'btech-me-automotive', title: 'B.Tech. Lateral Entry - Mechanical Engineering (Automotive Electrical Vehicles)' },
  { baseId: 'btech-me-mechatronics', title: 'B.Tech. Lateral Entry - Mechanical Engineering (Mechatronics)' },
  { baseId: 'btech-civil', title: 'B.Tech. Lateral Entry - Civil Engineering' },
  { baseId: 'btech-biotech-stem', title: 'B.Tech. Lateral Entry - Biotechnology (Stem Cell & Tissue Engg.)' },
  { baseId: 'btech-biotech-genetic', title: 'B.Tech. Lateral Entry - Biotechnology (Genetic Engineering)' },
];

const LATERAL_ENTRY_COURSES: Course[] = LATERAL_ENTRY_CONFIGS.map(createLateralEntryCourse);

export const COURSES: Course[] = [...BASE_COURSES, ...LATERAL_ENTRY_COURSES];
