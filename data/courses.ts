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
    id: 'mtech-biotech-animal',
    title: 'M.Tech. - Biotechnology (Animal Biotechnology)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-biotech-plant',
    title: 'M.Tech. - Biotechnology (Plant Biotechnology)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-biotech-genetic',
    title: 'M.Tech. - Biotechnology (Genetic Engineering)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-biotech-bio-engg',
    title: 'M.Tech. - Biotechnology (Bio-Engineering and Bio-Informatics)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-food-process',
    title: 'M.Tech. - Food Process Technology',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-civil-environmental',
    title: 'M.Tech. - Civil Engineering (Environmental Engineering)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-civil-structural',
    title: 'M.Tech. - Civil Engineering (Structural Engineering)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-civil-construction',
    title: 'M.Tech. - Civil Engineering (Construction Management)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-civil-geotechnical',
    title: 'M.Tech. - Civil Engineering (Geotechnical and Earthquake Engineering)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-civil-remote-sensing',
    title: 'M.Tech. - Civil Engineering (Remote Sensing and GIS)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-cse-networking-cyber',
    title: 'M.Tech. - Computer Science & Engineering (Networking & Cyber Security)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-cse-software-engg',
    title: 'M.Tech. - Computer Science & Engineering (Software Engineering)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-cse-data-science',
    title: 'M.Tech. - Computer Science & Engineering (Data Science)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-eee-instrumentation',
    title: 'M.Tech. - Electrical and Electronics Engineering (Instrumentation and Control)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-eee-industrial-automation',
    title: 'M.Tech. - Electrical and Electronics Engineering (Industrial Automation)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-eee-power-system',
    title: 'M.Tech. - Electrical and Electronics Engineering (Power System Engineering)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-ece-digital-communication',
    title: 'M.Tech. - Electronics & Communication Engineering (Digital Communication)',
    group: 'SSET',
    durationYears: 2,
    years: [113000, 116390],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'mtech-ece-vlsi',
    title: 'M.Tech. - Electronics & Communication Engineering (VLSI Technology)',
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
    id: 'bba-banking-finance',
    title: 'BBA - Banking & Finance',
    group: 'SBS',
    durationYears: 3,
    years: [231000, 237930, 245068],
    scholarships: [50, 20],
  },
  {
    id: 'bba-international-business',
    title: 'BBA - International Business',
    group: 'SBS',
    durationYears: 3,
    years: [231000, 237930, 245068],
    scholarships: [50, 20],
  },
  {
    id: 'bba-marketing-management',
    title: 'BBA - Marketing Management',
    group: 'SBS',
    durationYears: 3,
    years: [231000, 237930, 245068],
    scholarships: [50, 20],
  },
  {
    id: 'bba-entrepreneurship',
    title: 'BBA - Entrepreneurship',
    group: 'SBS',
    durationYears: 3,
    years: [231000, 237930, 245068],
    scholarships: [50, 20],
  },
  {
    id: 'bba-hrm',
    title: 'BBA - HRM',
    group: 'SBS',
    durationYears: 3,
    years: [231000, 237930, 245068],
    scholarships: [50, 20],
  },
  {
    id: 'bba-health-care-management',
    title: 'BBA - Health Care Management',
    group: 'SBS',
    durationYears: 3,
    years: [231000, 237930, 245068],
    scholarships: [50, 20],
  },
  {
    id: 'bba-supply-chain-logistics',
    title: 'BBA - Supply Chain Management & Logistics',
    group: 'SBS',
    durationYears: 3,
    years: [231000, 237930, 245068],
    scholarships: [50, 20],
  },
  {
    id: 'bba-hons-banking-finance',
    title: 'BBA (Hons./Research) - Banking & Finance',
    group: 'SBS',
    durationYears: 4,
    years: [231000, 237930, 245068, 252420],
    scholarships: [50, 20],
  },
  {
    id: 'bba-hons-international-business',
    title: 'BBA (Hons./Research) - International Business',
    group: 'SBS',
    durationYears: 4,
    years: [231000, 237930, 245068, 252420],
    scholarships: [50, 20],
  },
  {
    id: 'bba-hons-marketing-management',
    title: 'BBA (Hons./Research) - Marketing Management',
    group: 'SBS',
    durationYears: 4,
    years: [231000, 237930, 245068, 252420],
    scholarships: [50, 20],
  },
  {
    id: 'bba-hons-entrepreneurship',
    title: 'BBA (Hons./Research) - Entrepreneurship',
    group: 'SBS',
    durationYears: 4,
    years: [231000, 237930, 245068, 252420],
    scholarships: [50, 20],
  },
  {
    id: 'bba-hons-hrm',
    title: 'BBA (Hons./Research) - HRM',
    group: 'SBS',
    durationYears: 4,
    years: [231000, 237930, 245068, 252420],
    scholarships: [50, 20],
  },
  {
    id: 'bba-hons-health-care-management',
    title: 'BBA (Hons./Research) - Health Care Management',
    group: 'SBS',
    durationYears: 4,
    years: [231000, 237930, 245068, 252420],
    scholarships: [50, 20],
  },
  {
    id: 'bba-hons-supply-chain-logistics',
    title: 'BBA (Hons./Research) - Supply Chain Management & Logistics',
    group: 'SBS',
    durationYears: 4,
    years: [231000, 237930, 245068, 252420],
    scholarships: [50, 20],
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
    id: 'mba-marketing-management',
    title: 'MBA - Marketing Management',
    group: 'SBS',
    durationYears: 2,
    years: [396550, 408447],
    scholarships: [50, 20],
  },
  {
    id: 'mba-international-business',
    title: 'MBA - International Business',
    group: 'SBS',
    durationYears: 2,
    years: [396550, 408447],
    scholarships: [50, 20],
  },
  {
    id: 'mba-business-analytics',
    title: 'MBA - Business Analytics',
    group: 'SBS',
    durationYears: 2,
    years: [396550, 408447],
    scholarships: [50, 20],
  },
  {
    id: 'mba-banking-finance',
    title: 'MBA - Banking & Finance',
    group: 'SBS',
    durationYears: 2,
    years: [396550, 408447],
    scholarships: [50, 20],
  },
  {
    id: 'mba-hrm',
    title: 'MBA - Human Resources Management',
    group: 'SBS',
    durationYears: 2,
    years: [396550, 408447],
    scholarships: [50, 20],
  },
  {
    id: 'mba-entrepreneurship-family-business',
    title: 'MBA - Entrepreneurship & Family Business',
    group: 'SBS',
    durationYears: 2,
    years: [396550, 408447],
    scholarships: [50, 20],
  },
  {
    id: 'mba-supply-chain-logistics',
    title: 'MBA - Supply Chain Management & Logistics',
    group: 'SBS',
    durationYears: 2,
    years: [396550, 408447],
    scholarships: [50, 20],
  },
  {
    id: 'mba-health-care-hospital',
    title: 'MBA - Health Care & Hospital Administration',
    group: 'SBS',
    durationYears: 2,
    years: [396550, 408447],
    scholarships: [50, 20],
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
    id: 'ba-english',
    title: 'B.A. - English',
    group: 'SHSS',
    durationYears: 3,
    years: [125000, 128750, 132613],
    scholarships: [30, 20],
  },
  {
    id: 'ba-history',
    title: 'B.A. - History',
    group: 'SHSS',
    durationYears: 3,
    years: [125000, 128750, 132613],
    scholarships: [30, 20],
  },
  {
    id: 'ba-sociology',
    title: 'B.A. - Sociology',
    group: 'SHSS',
    durationYears: 3,
    years: [125000, 128750, 132613],
    scholarships: [30, 20],
  },
  {
    id: 'ba-political-science',
    title: 'B.A. - Political Science',
    group: 'SHSS',
    durationYears: 3,
    years: [125000, 128750, 132613],
    scholarships: [30, 20],
  },
  {
    id: 'ba-geography',
    title: 'B.A. - Geography',
    group: 'SHSS',
    durationYears: 3,
    years: [125000, 128750, 132613],
    scholarships: [30, 20],
  },
  {
    id: 'ba-international-relation',
    title: 'B.A. - International Relation',
    group: 'SHSS',
    durationYears: 3,
    years: [125000, 128750, 132613],
    scholarships: [30, 20],
  },
  {
    id: 'ba-hons-english',
    title: 'B.A. (Hons./Research) - English',
    group: 'SHSS',
    durationYears: 4,
    years: [125000, 128750, 132613, 136591],
    scholarships: [30, 20],
  },
  {
    id: 'ba-hons-history',
    title: 'B.A. (Hons./Research) - History',
    group: 'SHSS',
    durationYears: 4,
    years: [125000, 128750, 132613, 136591],
    scholarships: [30, 20],
  },
  {
    id: 'ba-hons-sociology',
    title: 'B.A. (Hons./Research) - Sociology',
    group: 'SHSS',
    durationYears: 4,
    years: [125000, 128750, 132613, 136591],
    scholarships: [30, 20],
  },
  {
    id: 'ba-hons-political-science',
    title: 'B.A. (Hons./Research) - Political Science',
    group: 'SHSS',
    durationYears: 4,
    years: [125000, 128750, 132613, 136591],
    scholarships: [30, 20],
  },
  {
    id: 'ba-hons-geography',
    title: 'B.A. (Hons./Research) - Geography',
    group: 'SHSS',
    durationYears: 4,
    years: [125000, 128750, 132613, 136591],
    scholarships: [30, 20],
  },
  {
    id: 'ba-hons-international-relation',
    title: 'B.A. (Hons./Research) - International Relation',
    group: 'SHSS',
    durationYears: 4,
    years: [125000, 128750, 132613, 136591],
    scholarships: [30, 20],
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
    id: 'ma-english',
    title: 'M.A. - English',
    group: 'SHSS',
    durationYears: 2,
    years: [100000, 103000],
    scholarships: [30, 20],
  },
  {
    id: 'ma-modern-history',
    title: 'Master of Arts - Modern History',
    group: 'SHSS',
    durationYears: 2,
    years: [100000, 103000],
    scholarships: [30, 20],
  },
  {
    id: 'ma-sociology',
    title: 'Master of Arts - Sociology',
    group: 'SHSS',
    durationYears: 2,
    years: [100000, 103000],
    scholarships: [30, 20],
  },
  {
    id: 'ma-applied-psychology',
    title: 'Master of Arts - Applied Psychology',
    group: 'SHSS',
    durationYears: 2,
    years: [100000, 103000],
    scholarships: [30, 20],
  },
  {
    id: 'ma-clinical-psychology',
    title: 'Master of Arts - Clinical Psychology',
    group: 'SHSS',
    durationYears: 2,
    years: [100000, 103000],
    scholarships: [30, 20],
  },
  {
    id: 'ma-economics',
    title: 'M.A. Economics',
    group: 'SHSS',
    durationYears: 2,
    years: [130000, 133900],
    scholarships: [30, 20],
  },
  {
    id: 'ma-political-science',
    title: 'Master of Arts - Political Science',
    group: 'SHSS',
    durationYears: 2,
    years: [100000, 103000],
    scholarships: [30, 20],
  },
  {
    id: 'ma-political-science-ir',
    title: 'Master of Arts - Political Science (International Relations)',
    group: 'SHSS',
    durationYears: 2,
    years: [100000, 103000],
    scholarships: [30, 20],
  },
  {
    id: 'certificate-proficiency-english',
    title: 'Certificate of Proficiency (English)',
    group: 'SHSS',
    durationYears: 0.5,
    years: [30900],
    scholarships: [30, 20],
    notes: '6 Months',
  },
  {
    id: 'advance-certificate-proficiency-english',
    title: 'Advance Certificate of Proficiency (English)',
    group: 'SHSS',
    durationYears: 1,
    years: [61800],
    scholarships: [30, 20],
  },

  // ========== SHARDA SCHOOL OF DESIGN, ARCHITECTURE & PLANNING (SDAP) ==========
  // Group 1: [50, 20] - B.Arch, B.Design, Masters in Design

  {
    id: 'barch',
    title: 'Bachelor of Architecture (B.Arch.)',
    group: 'SDAP',
    durationYears: 5,
    years: [219000, 225570, 232337, 239307, 246486],
    scholarships: [50, 20],
  },
  {
    id: 'bva-applied-arts',
    title: 'Bachelor of Visual Arts (Applied Arts)',
    group: 'SDAP',
    durationYears: 4,
    years: [110000, 113300, 116699, 120200],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'bdesign-interior',
    title: 'Bachelor of Design - Interior Design',
    group: 'SDAP',
    durationYears: 4,
    years: [275000, 283250, 291748, 300500],
    scholarships: [50, 20],
  },
  {
    id: 'bdesign-fashion',
    title: 'Bachelor of Design - Fashion Design',
    group: 'SDAP',
    durationYears: 4,
    years: [275000, 283250, 291748, 300500],
    scholarships: [50, 20],
  },
  {
    id: 'bdesign-communication',
    title: 'Bachelor of Design - Communication Design',
    group: 'SDAP',
    durationYears: 4,
    years: [275000, 283250, 291748, 300500],
    scholarships: [50, 20],
  },
  {
    id: 'mdesign-interior',
    title: 'Masters in Design - Interior Design',
    group: 'SDAP',
    durationYears: 2,
    years: [275000, 283250],
    scholarships: [50, 20],
  },
  {
    id: 'mdesign-fashion',
    title: 'Masters in Design - Fashion Design',
    group: 'SDAP',
    durationYears: 2,
    years: [275000, 283250],
    scholarships: [50, 20],
  },

  // ========== SHARDA SCHOOL OF MEDIA, FILM AND ENTERTAINMENT (SMFE) ==========
  // Group 1: [50, 20] - B.A. Film Television & OTT Production, BJMC, MJMC, M. Advertising

  {
    id: 'ba-film-tv',
    title: 'B.A. - Film Television & OTT Production',
    group: 'SMFE',
    durationYears: 3,
    years: [222000, 228660, 235520],
    scholarships: [50, 20],
  },
  {
    id: 'ba-hons-film-tv',
    title: 'B.A. (Hons./Research) - Film Television & OTT Production',
    group: 'SMFE',
    durationYears: 4,
    years: [222000, 228660, 235520, 242585],
    scholarships: [50, 20],
  },
  {
    id: 'ba-jmc',
    title: 'B.A. - Journalism & Mass Communication',
    group: 'SMFE',
    durationYears: 3,
    years: [185000, 190550, 196267],
    scholarships: [50, 20],
  },
  {
    id: 'ba-hons-jmc',
    title: 'B.A. (Hons./Research) - Journalism & Mass Communication',
    group: 'SMFE',
    durationYears: 4,
    years: [185000, 190550, 196267, 202154],
    scholarships: [50, 20],
  },
  {
    id: 'bsc-animation-vfx',
    title: 'B.Sc. - Animation, VFX and Gaming Design (Animation & VFX)',
    group: 'SMFE',
    durationYears: 3,
    years: [185000, 190550, 196267],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'bsc-gaming-design',
    title: 'B.Sc. - Animation, VFX and Gaming Design (Gaming Design)',
    group: 'SMFE',
    durationYears: 3,
    years: [185000, 190550, 196267],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'bsc-hons-animation-vfx',
    title: 'B.Sc. (Hons./Research) - Animation, VFX and Gaming Design (Animation & VFX)',
    group: 'SMFE',
    durationYears: 4,
    years: [185000, 190550, 196267, 202154],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'bsc-hons-gaming-design',
    title: 'B.Sc. (Hons./Research) - Animation, VFX and Gaming Design (Gaming Design)',
    group: 'SMFE',
    durationYears: 4,
    years: [185000, 190550, 196267, 202154],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'ma-jmc',
    title: 'M.A. - Journalism & Mass Communication',
    group: 'SMFE',
    durationYears: 2,
    years: [176000, 181280],
    scholarships: [50, 20],
  },
  {
    id: 'ma-advertising-pr',
    title: 'M.A. - Advertising, Public Relations and Corporate Communication',
    group: 'SMFE',
    durationYears: 2,
    years: [176000, 181280],
    scholarships: [50, 20],
  },

  // ========== SHARDA SCHOOL OF BASIC SCIENCES & RESEARCH (SBSR) ==========
  // Group 3: [30, 20] - Most B.Sc. programs

  {
    id: 'bsc-physics',
    title: 'B.Sc. - Physics',
    group: 'SBSR',
    durationYears: 3,
    years: [110000, 113300, 116699],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-physics',
    title: 'B.Sc. (Hons./Research) - Physics',
    group: 'SBSR',
    durationYears: 4,
    years: [110000, 113300, 116699, 120200],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-physics-computational',
    title: 'B.Sc. - Physics (Computational Physics/Renewable Energy)',
    group: 'SBSR',
    durationYears: 3,
    years: [110000, 113300, 116699],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-physics-computational',
    title: 'B.Sc. (Hons./Research) - Physics (Computational/Renewable Energy)',
    group: 'SBSR',
    durationYears: 4,
    years: [110000, 113300, 116699, 120200],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-chemistry',
    title: 'B.Sc. - Chemistry',
    group: 'SBSR',
    durationYears: 3,
    years: [110000, 113300, 116699],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-chemistry',
    title: 'B.Sc. (Hons./Research) - Chemistry',
    group: 'SBSR',
    durationYears: 4,
    years: [110000, 113300, 116699, 120200],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-computational-chemistry',
    title: 'B.Sc. - Computational Chemistry',
    group: 'SBSR',
    durationYears: 3,
    years: [110000, 113300, 116699],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-computational-chemistry',
    title: 'B.Sc. (Hons./Research) - Computational Chemistry',
    group: 'SBSR',
    durationYears: 4,
    years: [110000, 113300, 116699, 120200],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-environmental-science',
    title: 'B.Sc. - Environmental Science',
    group: 'SBSR',
    durationYears: 3,
    years: [140000, 144200, 148526],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-environmental-science',
    title: 'B.Sc. (Hons./Research) - Environmental Science',
    group: 'SBSR',
    durationYears: 4,
    years: [140000, 144200, 148526, 152982],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-computational-maths-stats',
    title: 'B.Sc. - Computational Mathematics and Statistics',
    group: 'SBSR',
    durationYears: 3,
    years: [110000, 113300, 116699],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-computational-maths-stats',
    title: 'B.Sc. (Hons/Research) - Computational Mathematics and Statistics',
    group: 'SBSR',
    durationYears: 4,
    years: [110000, 113300, 116699, 120200],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-mathematics',
    title: 'B.Sc. - Mathematics',
    group: 'SBSR',
    durationYears: 3,
    years: [110000, 113300, 116699],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-mathematics',
    title: 'B.Sc. (Hons/Research) - Mathematics',
    group: 'SBSR',
    durationYears: 4,
    years: [110000, 113300, 116699, 120200],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-data-science-analytics',
    title: 'B.Sc. - Data Science and Analytics',
    group: 'SBSR',
    durationYears: 3,
    years: [120000, 123600, 127308],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-data-science-analytics',
    title: 'B.Sc. (Hons/Research) - Data Science and Analytics',
    group: 'SBSR',
    durationYears: 4,
    years: [120000, 123600, 127308, 131127],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-zoology',
    title: 'B.Sc. - Zoology',
    group: 'SBSR',
    durationYears: 3,
    years: [110000, 113300, 116699],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-zoology',
    title: 'B.Sc. (Hons./Research) - Zoology',
    group: 'SBSR',
    durationYears: 4,
    years: [110000, 113300, 116699, 120200],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-biochemistry',
    title: 'B.Sc. - Bio Chemistry',
    group: 'SBSR',
    durationYears: 3,
    years: [140000, 144200, 148526],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-biotechnology',
    title: 'B.Sc. - Biotechnology',
    group: 'SBSR',
    durationYears: 3,
    years: [140000, 144200, 148526],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-microbiology',
    title: 'B.Sc. - Microbiology',
    group: 'SBSR',
    durationYears: 3,
    years: [140000, 144200, 148526],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-food-science',
    title: 'B.Sc. - Food Science & Technology',
    group: 'SBSR',
    durationYears: 3,
    years: [140000, 144200, 148526],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-biochemistry',
    title: 'B.Sc. (Hons/Research) - Bio Chemistry',
    group: 'SBSR',
    durationYears: 4,
    years: [140000, 144200, 148526, 152982],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-biotechnology',
    title: 'B.Sc. (Hons/Research) - Biotechnology',
    group: 'SBSR',
    durationYears: 4,
    years: [140000, 144200, 148526, 152982],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-microbiology',
    title: 'B.Sc. (Hons/Research) - Microbiology',
    group: 'SBSR',
    durationYears: 4,
    years: [140000, 144200, 148526, 152982],
    scholarships: [30, 20],
  },
  {
    id: 'bsc-hons-food-science',
    title: 'B.Sc. (Hons/Research) - Food Science & Technology',
    group: 'SBSR',
    durationYears: 4,
    years: [140000, 144200, 148526, 152982],
    scholarships: [30, 20],
  },
  {
    id: 'msc-biotechnology',
    title: 'M.Sc. - Biotechnology',
    group: 'SBSR',
    durationYears: 2,
    years: [130000, 133900],
    scholarships: [30, 20],
  },
  {
    id: 'msc-microbiology',
    title: 'M.Sc. - Microbiology',
    group: 'SBSR',
    durationYears: 2,
    years: [130000, 133900],
    scholarships: [30, 20],
  },
  {
    id: 'msc-food-science',
    title: 'M.Sc. - Food Science & Technology',
    group: 'SBSR',
    durationYears: 2,
    years: [130000, 133900],
    scholarships: [30, 20],
  },
  {
    id: 'msc-biochemistry',
    title: 'M.Sc. - Biochemistry',
    group: 'SBSR',
    durationYears: 2,
    years: [130000, 133900],
    scholarships: [30, 20],
  },
  {
    id: 'msc-data-science-analytics',
    title: 'M.Sc. - Data Science & Analytics',
    group: 'SBSR',
    durationYears: 2,
    years: [130000, 133900],
    scholarships: [30, 20],
  },
  {
    id: 'msc-chemistry',
    title: 'M.Sc. - Chemistry',
    group: 'SBSR',
    durationYears: 2,
    years: [130000, 133900],
    scholarships: [30, 20],
  },
  {
    id: 'msc-physics',
    title: 'M.Sc. - Physics',
    group: 'SBSR',
    durationYears: 2,
    years: [130000, 133900],
    scholarships: [30, 20],
  },
  {
    id: 'msc-mathematics',
    title: 'M.Sc. - Mathematics',
    group: 'SBSR',
    durationYears: 2,
    years: [130000, 133900],
    scholarships: [30, 20],
  },
  {
    id: 'msc-environmental-science',
    title: 'M.Sc. (Environmental Science/Water Resource & Environmental Management)',
    group: 'SBSR',
    durationYears: 2,
    years: [125000, 128750],
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
    id: 'msc-nursing-community-health',
    title: 'M.Sc. Nursing - Community Health Nursing',
    group: 'SNSR',
    durationYears: 2,
    years: [202873, 208959],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'msc-nursing-obstetrics',
    title: 'M.Sc. Nursing - Obstetrics & Gynecology Nursing',
    group: 'SNSR',
    durationYears: 2,
    years: [202873, 208959],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'msc-nursing-paediatrics',
    title: 'M.Sc. Nursing - Child Health Nursing (Paediatrics)',
    group: 'SNSR',
    durationYears: 2,
    years: [202873, 208959],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'msc-nursing-medical-surgical',
    title: 'M.Sc. Nursing - Medical Surgical Nursing',
    group: 'SNSR',
    durationYears: 2,
    years: [202873, 208959],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'msc-nursing-psychiatric',
    title: 'M.Sc. Nursing - Psychiatric Nursing',
    group: 'SNSR',
    durationYears: 2,
    years: [202873, 208959],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'post-basic-bsc-nursing',
    title: 'Post Basic B.Sc. (Nursing)',
    group: 'SNSR',
    durationYears: 2,
    years: [162000, 166860],
    scholarships: [], // Group 4 - No scholarship
  },

  // ========== SHARDA SCHOOL OF MEDICAL SCIENCES & RESEARCH (SMSR) ==========
  // Group 4: [] - MBBS, BDS, Medical M.Sc., MPT

  {
    id: 'mbbs',
    title: 'MBBS (Bachelor of Medicine & Bachelor of Surgery)',
    group: 'SMSR',
    durationYears: 5,
    years: [1269319, 1269319, 1269319, 1269319, 634660],
    scholarships: [], // Group 4 - No scholarship
    notes: '4.5+1 years. Fee for 2025-26 to be decided by UP DGME. Please refer website for updated fee.',
  },
  {
    id: 'bds',
    title: 'BDS (Bachelor of Dental Surgery)',
    group: 'SMSR',
    durationYears: 5,
    years: [365000, 365000, 365000, 365000, 365000],
    scholarships: [], // Group 4 - No scholarship
    notes: '4+1 years. Fee for 2025-26 to be decided by UP DGME. Please refer website for updated fee.',
  },
  {
    id: 'msc-medical-anatomy',
    title: 'M.Sc. - Medical Anatomy',
    group: 'SMSR',
    durationYears: 3,
    years: [140000, 144200, 148526],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'msc-medical-biochemistry',
    title: 'M.Sc. - Medical Bio Chemistry',
    group: 'SMSR',
    durationYears: 3,
    years: [140000, 144200, 148526],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'msc-medical-microbiology',
    title: 'M.Sc. - Medical Microbiology',
    group: 'SMSR',
    durationYears: 3,
    years: [140000, 144200, 148526],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'msc-medical-pharmacology',
    title: 'M.Sc. - Medical Pharmacology',
    group: 'SMSR',
    durationYears: 3,
    years: [140000, 144200, 148526],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'msc-medical-physiology',
    title: 'M.Sc. - Medical Physiology',
    group: 'SMSR',
    durationYears: 3,
    years: [140000, 144200, 148526],
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
  {
    id: 'dpharm',
    title: 'Diploma in Pharmacy (D. Pharm)',
    group: 'Pharmacy',
    durationYears: 2,
    years: [124000, 127720],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'pharmd',
    title: 'Pharm D',
    group: 'Pharmacy',
    durationYears: 6,
    years: [370800, 381924, 393382, 405183, 417339, 429859],
    scholarships: [], // Group 4 - No scholarship
  },
  {
    id: 'mpharm',
    title: 'M. Pharm',
    group: 'Pharmacy',
    durationYears: 2,
    years: [180000, 185400],
    scholarships: [], // Group 4 - No scholarship
  },

  // ========== SHARDA SCHOOL OF ALLIED HEALTH SCIENCES (SAHS) ==========
  // Group 4: [] - No scholarship for most, but some have Group 3

  {
    id: 'bpt',
    title: 'Bachelor of Physiotherapy (BPT)',
    group: 'SAHS',
    durationYears: 4,
    years: [225000, 231750, 238703, 245864],
    scholarships: [], // Group 4 - No scholarship
    notes: '4+0.5 years',
  },
  {
    id: 'mpt',
    title: 'MPT (Master of Physiotherapy)',
    group: 'SAHS',
    durationYears: 2,
    years: [230000, 236900],
    scholarships: [], // Group 4 - No scholarship
    notes: 'Specializations: Orthopaedics, Neurology, Cardiopulmonary, Sports',
  },
  {
    id: 'bsc-radiology',
    title: 'B.Sc. in Radiological Imaging Techniques (Radiology/CT/MRI)',
    group: 'SAHS',
    durationYears: 3,
    years: [200000, 206000, 212180],
    scholarships: [30, 20], // Group 3 - Based on document mentioning "B.sc.- Radiology" in Group 1 list
    notes: '3+0.5 years',
  },
  {
    id: 'bsc-bmlt',
    title: 'B.Sc. in Medical Laboratory Technology (BMLT)',
    group: 'SAHS',
    durationYears: 3,
    years: [170000, 175100, 180353],
    scholarships: [30, 20], // Group 3 - Based on document mentioning "BMLT" in Group 1 list
    notes: '3+0.5 years',
  },
  {
    id: 'bsc-cardiovascular',
    title: 'B.Sc. - Cardiovascular Technology',
    group: 'SAHS',
    durationYears: 4,
    years: [185000, 190550, 196267, 202154],
    scholarships: [30, 20], // Group 3 - Based on document mentioning "Cardiovascular Technology" in Group 1 list
  },
  {
    id: 'bsc-forensic',
    title: 'B.Sc. - Forensic Science',
    group: 'SAHS',
    durationYears: 3,
    years: [175000, 180250, 185658],
    scholarships: [30, 20], // Group 3 - Based on document mentioning "Forensic Science" in Group 1 list
  },
  {
    id: 'bsc-optometry',
    title: 'Bachelor of Optometry',
    group: 'SAHS',
    durationYears: 4,
    years: [165000, 169950, 175049, 180300],
    scholarships: [30, 20], // Group 3 - Based on document mentioning "Optometry" in Group 1 list
  },
  {
    id: 'bsc-nutrition-dietetics',
    title: 'B.Sc. (Nutrition & Dietetics)',
    group: 'SAHS',
    durationYears: 3,
    years: [165000, 169950, 175049],
    scholarships: [30, 20], // Group 3 - Based on document mentioning "Nutrition & Dietetics" in Group 1 list
  },
  {
    id: 'msc-clinical-research',
    title: 'M.Sc. (Clinical Research)',
    group: 'SAHS',
    durationYears: 2,
    years: [153000, 157590],
    scholarships: [30, 20], // Group 3 - Based on document mentioning "Clinical Research" in Group 1 list
  },
  {
    id: 'msc-forensic-science',
    title: 'M.Sc. (Forensic Science)',
    group: 'SAHS',
    durationYears: 2,
    years: [164000, 168920],
    scholarships: [30, 20], // Group 3 - Based on document mentioning "Forensic Science" in Group 1 list
  },
  {
    id: 'msc-nutrition-clinical',
    title: 'M.Sc. (Nutrition & Dietetics) - Clinical Nutrition',
    group: 'SAHS',
    durationYears: 2,
    years: [164000, 168920],
    scholarships: [30, 20], // Group 3 - Based on document mentioning "Nutrition & Dietetics" in Group 1 list
  },
  {
    id: 'msc-nutrition-food-science',
    title: 'M.Sc. (Nutrition & Dietetics) - Food Science and Nutrition',
    group: 'SAHS',
    durationYears: 2,
    years: [164000, 168920],
    scholarships: [30, 20], // Group 3
  },
  {
    id: 'msc-nutrition-public-health',
    title: 'M.Sc. (Nutrition & Dietetics) - Public Health Nutrition',
    group: 'SAHS',
    durationYears: 2,
    years: [164000, 168920],
    scholarships: [30, 20], // Group 3
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
