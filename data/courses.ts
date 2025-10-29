import { Course } from '../types';

// Data extracted from the brochure for year-wise fees.
export const COURSES: Course[] = [
  // === SCHOOL OF ENGINEERING & TECHNOLOGY ===
  // Group 1
  { id: 'btech_cse', programName: 'B.Tech. Computer Science & Engineering (CSE) (4 Years)', school: 'School of Engineering & Technology', annualFees: [270000, 278100, 286443, 295036], scholarshipGroup: 1 },
  { id: 'btech_cse_spec', programName: 'B.Tech. CSE with Specialization (AI/ML, etc.) (4 Years)', school: 'School of Engineering & Technology', annualFees: [280000, 288400, 297052, 305964], scholarshipGroup: 1 },
  { id: 'btech_it', programName: 'B.Tech. Information Technology (IT) (4 Years)', school: 'School of Engineering & Technology', annualFees: [212000, 218360, 224911, 231658], scholarshipGroup: 1 },
  { id: 'btech_eee', programName: 'B.Tech. Electrical & Electronics Engineering (EEE) (4 Years)', school: 'School of Engineering & Technology', annualFees: [185400, 190962, 196691, 202592], scholarshipGroup: 1 },
  { id: 'btech_ece', programName: 'B.Tech. Electronics & Communication Engg. (ECE) (4 Years)', school: 'School of Engineering & Technology', annualFees: [185400, 190962, 196691, 202592], scholarshipGroup: 1 },
  { id: 'btech_me', programName: 'B.Tech. Mechanical Engineering (ME) (4 Years)', school: 'School of Engineering & Technology', annualFees: [185400, 190962, 196691, 202592], scholarshipGroup: 1 },
  { id: 'btech_civil', programName: 'B.Tech. Civil Engineering (4 Years)', school: 'School of Engineering & Technology', annualFees: [185400, 190962, 196691, 202592], scholarshipGroup: 1 },
  { id: 'btech_biotech', programName: 'B.Tech. Biotechnology (4 Years)', school: 'School of Engineering & Technology', annualFees: [206000, 212180, 218545, 225102], scholarshipGroup: 1 },
  { id: 'bca', programName: 'Bachelor of Computer Applications (BCA) (3 Years)', school: 'School of Engineering & Technology', annualFees: [180000, 185400, 190962], scholarshipGroup: 1 },
  { id: 'mca', programName: 'Master of Computer Applications (MCA) (2 Years)', school: 'School of Engineering & Technology', annualFees: [180000, 185400], scholarshipGroup: 1 },
  // Group 3
  { id: 'bsc_cs_3y', programName: 'B.Sc. - Computer Science (3 Years)', school: 'School of Engineering & Technology', annualFees: [116000, 119480, 123064], scholarshipGroup: 3 },
  { id: 'bsc_it_3y', programName: 'B.Sc. - Information Technology (3 Years)', school: 'School of Engineering & Technology', annualFees: [116000, 119480, 123064], scholarshipGroup: 3 },
  { id: 'msc_cs_2y', programName: 'M.Sc. (Computer Science) (2 Years)', school: 'School of Engineering & Technology', annualFees: [122000, 125660], scholarshipGroup: 3 },

  // === SCHOOL OF BUSINESS STUDIES ===
  // Group 1
  { id: 'bcom_3y', programName: 'B.Com. (3 Years)', school: 'School of Business Studies', annualFees: [175000, 180250, 185658], scholarshipGroup: 1 },
  { id: 'bcom_hons_4y', programName: 'B.Com. (Hons./Research) (4 Years)', school: 'School of Business Studies', annualFees: [175000, 180250, 185658, 191227], scholarshipGroup: 1 },
  { id: 'bba_3y', programName: 'BBA (3 Years)', school: 'School of Business Studies', annualFees: [231000, 237930, 245068], scholarshipGroup: 1 },
  { id: 'bba_hons_4y', programName: 'BBA (Hons./Research) (4 Years)', school: 'School of Business Studies', annualFees: [231000, 237930, 245068, 252420], scholarshipGroup: 1 },
  { id: 'mba_2y', programName: 'MBA (2 Years)', school: 'School of Business Studies', annualFees: [396550, 408447], scholarshipGroup: 1 },
  { id: 'mba_dual_2y', programName: 'MBA - Dual Specialization (2 Years)', school: 'School of Business Studies', annualFees: [450000, 463500], scholarshipGroup: 1 },

  // === SCHOOL OF LAW ===
  // Group 1
  { id: 'bba_llb_5y', programName: 'B.B.A. LL.B. (Hons.) Integrated (5 Years)', school: 'School of Law', annualFees: [232000, 238960, 246129, 253513, 261118], scholarshipGroup: 1 },
  { id: 'ba_llb_5y', programName: 'B.A. LL.B. (Hons.) Integrated (5 Years)', school: 'School of Law', annualFees: [232000, 238960, 246129, 253513, 261118], scholarshipGroup: 1 },

  // === SCHOOL OF DESIGN, ARCHITECTURE & PLANNING ===
  // Group 1
  { id: 'barch_5y', programName: 'Bachelor of Architecture (B.Arch.) (5 Years)', school: 'School of Design, Architecture & Planning', annualFees: [219000, 225570, 232337, 239307, 246486], scholarshipGroup: 1 },
  { id: 'bdesign_4y', programName: 'Bachelor of Design (4 Years)', school: 'School of Design, Architecture & Planning', annualFees: [275000, 283250, 291748, 300500], scholarshipGroup: 1 },
  { id: 'mdesign_2y', programName: 'Masters in Design (2 Years)', school: 'School of Design, Architecture & Planning', annualFees: [275000, 283250], scholarshipGroup: 1 },
  // Group 3
  { id: 'bva_4y', programName: 'Bachelor of Visual Arts (Applied Arts) (4 Years)', school: 'School of Design, Architecture & Planning', annualFees: [110000, 113300, 116699, 120200], scholarshipGroup: 3 },
  
  // === SCHOOL OF MEDIA, FILM AND ENTERTAINMENT ===
  // Group 1
  { id: 'ba_film_3y', programName: 'B.A. - Film TV & OTT Production (3 Years)', school: 'School of Media, Film and Entertainment', annualFees: [222000, 228660, 235520], scholarshipGroup: 1 },
  { id: 'ba_film_hons_4y', programName: 'B.A. (Hons./Res) - Film TV & OTT (4 Years)', school: 'School of Media, Film and Entertainment', annualFees: [222000, 228660, 235520, 242585], scholarshipGroup: 1 },
  { id: 'ba_jmc_3y', programName: 'B.A. - Journalism & Mass Comm (3 Years)', school: 'School of Media, Film and Entertainment', annualFees: [185000, 190550, 196267], scholarshipGroup: 1 },
  { id: 'ba_jmc_hons_4y', programName: 'B.A. (Hons./Res) - Journalism & Mass Comm (4 Years)', school: 'School of Media, Film and Entertainment', annualFees: [185000, 190550, 196267, 202154], scholarshipGroup: 1 },
  { id: 'ma_jmc_2y', programName: 'M.A. - Journalism & Mass Communication (2 Years)', school: 'School of Media, Film and Entertainment', annualFees: [176000, 181280], scholarshipGroup: 1 },
  { id: 'ma_adv_2y', programName: 'M.A. - Advertising, PR & Corp Comm (2 Years)', school: 'School of Media, Film and Entertainment', annualFees: [176000, 181280], scholarshipGroup: 1 },
  // Group 3
  { id: 'bsc_anim_3y', programName: 'B.Sc. - Animation, VFX & Gaming (3 Years)', school: 'School of Media, Film and Entertainment', annualFees: [185000, 190550, 196267], scholarshipGroup: 3 },
  { id: 'bsc_anim_hons_4y', programName: 'B.Sc. (Hons./Res) - Animation, VFX & Gaming (4 Years)', school: 'School of Media, Film and Entertainment', annualFees: [185000, 190550, 196267, 202154], scholarshipGroup: 3 },

  // === SCHOOL OF ALLIED HEALTH SCIENCES ===
  // Group 1
  { id: 'bsc_radio_3_5y', programName: 'B.Sc. Radiological Imaging (3.5 Years)', school: 'School of Allied Health Sciences', annualFees: [200000, 206000, 212180, 106090], scholarshipGroup: 1 }, // 3.5 years
  { id: 'bsc_bmlt_3_5y', programName: 'B.Sc. Medical Laboratory Tech (BMLT) (3.5 Years)', school: 'School of Allied Health Sciences', annualFees: [170000, 175100, 180353, 90176], scholarshipGroup: 1 }, // 3.5 years
  { id: 'bsc_cardio_4y', programName: 'B.Sc. - Cardiovascular Technology (4 Years)', school: 'School of Allied Health Sciences', annualFees: [185000, 190550, 196267, 202154], scholarshipGroup: 1 },
  { id: 'bsc_forensic_3y', programName: 'B.Sc. - Forensic Science (3 Years)', school: 'School of Allied Health Sciences', annualFees: [175000, 180250, 185658], scholarshipGroup: 1 },
  { id: 'b_opto_4y', programName: 'Bachelor of Optometry (4 Years)', school: 'School of Allied Health Sciences', annualFees: [165000, 169950, 175049, 180300], scholarshipGroup: 1 },
  { id: 'bsc_nutrition_3y', programName: 'B.Sc. (Nutrition & Dietetics) (3 Years)', school: 'School of Allied Health Sciences', annualFees: [165000, 169950, 175049], scholarshipGroup: 1 },
  { id: 'msc_clinical_2y', programName: 'M.Sc. (Clinical Research) (2 Years)', school: 'School of Allied Health Sciences', annualFees: [153000, 157590], scholarshipGroup: 1 },
  { id: 'msc_forensic_2y', programName: 'M.Sc. (Forensic Science) (2 Years)', school: 'School of Allied Health Sciences', annualFees: [164000, 168920], scholarshipGroup: 1 },
  { id: 'msc_nutrition_2y', programName: 'M.Sc. (Nutrition & Dietetics) (2 Years)', school: 'School of Allied Health Sciences', annualFees: [164000, 168920], scholarshipGroup: 1 },
  // Group 4
  { id: 'mpt_2y', programName: 'Master of Physiotherapy (MPT) (2 Years)', school: 'School of Allied Health Sciences', annualFees: [230000, 236900], scholarshipGroup: 4 },

  // === SCHOOL OF NURSING SCIENCE & RESEARCH ===
  // Group 2
  { id: 'bsc_nursing_4y', programName: 'B.Sc. (Nursing) (4 Years)', school: 'School of Nursing Science & Research', annualFees: [240000, 247200, 254616, 262254], scholarshipGroup: 2 },
  // Group 3
  { id: 'pb_bsc_nursing_2y', programName: 'Post Basic B.Sc. (Nursing) (2 Years)', school: 'School of Nursing Science & Research', annualFees: [162000, 166860], scholarshipGroup: 3 },
  // Group 4
  { id: 'msc_nursing_2y', programName: 'M.Sc. (Nursing) (2 Years)', school: 'School of Nursing Science & Research', annualFees: [202873, 208959], scholarshipGroup: 4 },

  // === SCHOOL OF BASIC SCIENCES & RESEARCH ===
  // Group 3
  { id: 'bsc_phy_3y', programName: 'B.Sc. - Physics (3 Years)', school: 'School of Basic Sciences & Research', annualFees: [110000, 113300, 116699], scholarshipGroup: 3 },
  { id: 'bsc_phy_hons_4y', programName: 'B.Sc. (Hons./Research) - Physics (4 Years)', school: 'School of Basic Sciences & Research', annualFees: [110000, 113300, 116699, 120200], scholarshipGroup: 3 },
  { id: 'bsc_chem_3y', programName: 'B.Sc. - Chemistry (3 Years)', school: 'School of Basic Sciences & Research', annualFees: [110000, 113300, 116699], scholarshipGroup: 3 },
  { id: 'bsc_chem_hons_4y', programName: 'B.Sc. (Hons./Research) - Chemistry (4 Years)', school: 'School of Basic Sciences & Research', annualFees: [110000, 113300, 116699, 120200], scholarshipGroup: 3 },
  { id: 'bsc_math_3y', programName: 'B.Sc. - Mathematics (3 Years)', school: 'School of Basic Sciences & Research', annualFees: [110000, 113300, 116699], scholarshipGroup: 3 },
  { id: 'bsc_math_hons_4y', programName: 'B.Sc. (Hons./Research) - Mathematics (4 Years)', school: 'School of Basic Sciences & Research', annualFees: [110000, 113300, 116699, 120200], scholarshipGroup: 3 },
  { id: 'bsc_zool_3y', programName: 'B.Sc. - Zoology (3 Years)', school: 'School of Basic Sciences & Research', annualFees: [110000, 113300, 116699], scholarshipGroup: 3 },
  { id: 'bsc_zool_hons_4y', programName: 'B.Sc. (Hons./Research) - Zoology (4 Years)', school: 'School of Basic Sciences & Research', annualFees: [110000, 113300, 116699, 120200], scholarshipGroup: 3 },
  { id: 'bsc_biochem_3y', programName: 'B.Sc. (BioChem, Biotech, etc.) (3 Years)', school: 'School of Basic Sciences & Research', annualFees: [140000, 144200, 148526], scholarshipGroup: 3 },
  { id: 'bsc_biochem_hons_4y', programName: 'B.Sc. (Hons./Res) (BioChem, Biotech, etc.) (4 Years)', school: 'School of Basic Sciences & Research', annualFees: [140000, 144200, 148526, 152982], scholarshipGroup: 3 },

  // === SCHOOL OF MEDICAL & DENTAL SCIENCES ===
  // Group 4
  { id: 'mbbs_4_5y', programName: 'MBBS (4.5 Years + 1 yr Internship)', school: 'School of Medical Sciences & Research', annualFees: [1269319, 1269319, 1269319, 1269319, 634660], scholarshipGroup: 4 }, // 4.5 years
  { id: 'bds_4y', programName: 'Bachelor of Dental Surgery (BDS) (4 Years + 1 yr Internship)', school: 'School of Dental Sciences', annualFees: [365000, 365000, 365000, 365000], scholarshipGroup: 4 },
  { id: 'med_msc_3y', programName: 'M.Sc. (Medical Anatomy, etc.) (3 Years)', school: 'School of Medical Sciences & Research', annualFees: [140000, 144200, 148526], scholarshipGroup: 4 },

  // === SCHOOL OF PHARMACY ===
  // Group 4
  { id: 'bpharm_4y', programName: 'Bachelor of Pharmacy (B. Pharm) (4 Years)', school: 'School of Pharmacy', annualFees: [240000, 247200, 254616, 262254], scholarshipGroup: 4 },
  { id: 'dpharm_2y', programName: 'Diploma in Pharmacy (D. Pharm) (2 Years)', school: 'School of Pharmacy', annualFees: [124000, 127720], scholarshipGroup: 4 },
  { id: 'pharmd_6y', programName: 'Pharm D (6 Years)', school: 'School of Pharmacy', annualFees: [370800, 381924, 393382, 405183, 417339, 429859], scholarshipGroup: 4 }
];
