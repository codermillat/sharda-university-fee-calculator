import React, { useState, useMemo, useEffect } from 'react';
import { Course } from '../../types';
import { COURSES } from '../../data/courses';
import { trackCourseSearch, trackClearButton, trackProgrammeSelection, trackStreamSelection } from '../utils/analytics';
import { formatCurrency } from '../utils/calcFees';

interface CourseSearchProps {
  onCourseSelect: (course: Course) => void;
  selectedCourse: Course | null;
  onClear: () => void;
}

const CourseSearch: React.FC<CourseSearchProps> = ({ onCourseSelect, selectedCourse, onClear }) => {
  const [query, setQuery] = useState('');
  // Removed school filter
  const [selectedProgramme, setSelectedProgramme] = useState<string>('all');
  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Sync query with selected course
  useEffect(() => {
    if (selectedCourse) {
      setQuery(selectedCourse.title);
    } else {
      setQuery('');
    }
  }, [selectedCourse]);

  // Get school full names mapping (moved up for use in search function)
  const schoolNames: { [key: string]: string } = {
    'SSET': 'Sharda School of Engineering & Technology',
    'SBS': 'Sharda School of Business Studies',
    'SOL': 'Sharda School of Law',
    'SHSS': 'Sharda School of Humanities & Social Sciences',
    'SBSR': 'Sharda School of Basic Sciences & Research',
    'SNSR': 'Sharda School of Nursing Sciences & Research',
    'SMSR': 'Sharda School of Medical Sciences & Research',
    'SAHS': 'Sharda School of Allied Health Sciences',
    'SDAP': 'Sharda School of Design, Architecture & Planning',
    'SMFE': 'Sharda School of Media, Film and Entertainment',
    'Pharmacy': 'School of Pharmacy',
  };

  // Track course search with debouncing
  useEffect(() => {
    if (query.trim().length > 2) {
      const timeoutId = setTimeout(() => {
        trackCourseSearch(query);
      }, 300); // Debounce search tracking
      return () => clearTimeout(timeoutId);
    }
  }, [query]);

  // Programme filter options
  const programmeOptions = [
    { value: 'all', label: 'Select Programme' },
    { value: 'certificate', label: 'Certificate' },
    { value: 'graduate', label: 'Graduate' },
    { value: 'post_graduate', label: 'Post Graduate' },
    { value: 'integrated', label: 'Integrated' },
  ];

  // Helpers to infer programme and stream
  const getProgrammeLevel = (course: Course): 'graduate' | 'post_graduate' | 'diploma' | 'integrated' | 'certificate' => {
    const t = course.title.toLowerCase();
    if (t.includes('certificate') || t.includes('certificate of') || t.includes('advance certificate')) return 'certificate';
    if (t.includes('integrated') || t.includes('ll.b') || t.includes('llb')) return 'integrated';
    if (t.startsWith('m.') || t.startsWith('m ') || t.startsWith('mba') || t.startsWith('mca') || t.startsWith('m.sc') || t.startsWith('mtech') || t.startsWith('m.tech') || t.startsWith('mcom') || t.startsWith('m.com') || t.startsWith('ll.m') || t.startsWith('llm')) {
      return 'post_graduate';
    }
    if (t.startsWith('d.') || t.startsWith('d ') || t.includes('d. pharm') || t.includes('d pharm') || t.includes('diploma')) return 'diploma';
    return 'graduate';
  };

  const getStream = (course: Course): string => {
    if (course.group === 'SSET') return 'Engineering';
    if (course.group === 'SBS') return 'Management';
    if (course.group === 'SOL') return 'Law';
    if (course.group === 'SHSS') return 'Humanities & Social Sciences';
    if (course.group === 'SBSR') return 'Basic Sciences';
    if (course.group === 'SNSR') return 'Nursing';
    if (course.group === 'SAHS') return 'Allied Health Sciences';
    if (course.group === 'SDAP') return 'Design & Architecture';
    if (course.group === 'SMFE') return 'Media & Entertainment';
    if (course.group === 'Pharmacy') return 'Pharmacy';
    if (course.group === 'SMSR') {
      const t = course.title.toLowerCase();
      if (t.includes('dental') || t.includes('bds')) return 'Dental';
      return 'Medical';
    }
    return 'Engineering';
  };

  // Dynamic Stream filter options based on selected programme
  const streamOptions = useMemo(() => {
    // Start from all non-diploma courses (include certificate courses)
    let base = COURSES.filter(c => {
      const level = getProgrammeLevel(c);
      return level !== 'diploma';
    });
    // If programme selected, narrow down to that programme
    if (selectedProgramme !== 'all') {
      base = base.filter(c => getProgrammeLevel(c) === selectedProgramme);
    }
    const uniqueStreams = Array.from(new Set(base.map(getStream)));
    const options: Array<{ value: string; label: string }> = [{ value: 'all', label: 'Select Stream' }].concat(
      uniqueStreams
        .sort()
        .map(s => ({ value: s, label: s }))
    );
    return options;
  }, [selectedProgramme]);

  // Ensure selected stream stays valid for the chosen programme
  useEffect(() => {
    const availableValues = new Set(streamOptions.map(o => o.value));
    if (!availableValues.has(selectedStream)) {
      setSelectedStream('all');
    }
  }, [streamOptions, selectedStream]);

  // (helpers moved above)

  // Normalize text for better search matching (remove special chars, normalize spaces)
  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[.,\-()&]/g, ' ') // Replace special chars with spaces
      .replace(/\s+/g, ' ') // Normalize multiple spaces
      .trim();
  };

  // Enhanced search function with better matching
  const matchesSearchQuery = (course: Course, searchQuery: string): boolean => {
    if (!searchQuery.trim()) return true;

    const query = normalizeText(searchQuery);
    const normalizedTitle = normalizeText(course.title);
    const normalizedId = normalizeText(course.id);
    const group = course.group.toLowerCase();
    const schoolName = normalizeText(schoolNames[course.group] || '');
    const stream = normalizeText(getStream(course));

    // Split query into words for better matching
    const queryWords = query.split(/\s+/).filter(word => word.length > 0);

    // Check if all query words match somewhere in the course data
    const allWordsMatch = queryWords.every(word => {
      // Direct matches in normalized text
      if (normalizedTitle.includes(word) || normalizedId.includes(word) || 
          group.includes(word) || schoolName.includes(word) || stream.includes(word)) {
        return true;
      }

      // Abbreviation matching (e.g., "cse" matches "Computer Science & Engineering")
      const abbreviations: { [key: string]: string[] } = {
        'cse': ['computer science', 'computer science engineering', 'cse'],
        'it': ['information technology', 'it'],
        'eee': ['electrical', 'electronics', 'eee'],
        'ece': ['electronics', 'communication', 'ece'],
        'me': ['mechanical', 'me'],
        'mba': ['master of business', 'mba', 'business administration'],
        'bba': ['bachelor of business', 'bba', 'business administration'],
        'bca': ['bachelor of computer', 'bca', 'computer application'],
        'mca': ['master of computer', 'mca', 'computer application'],
        'mbbs': ['mbbs', 'medicine', 'medical'],
        'bds': ['dental', 'bds', 'dentistry'],
        'nursing': ['nursing', 'bsc nursing'],
        'pharm': ['pharmacy', 'pharm'],
        'llb': ['law', 'llb', 'legal', 'll b'],
        'llm': ['law', 'llm', 'll m', 'master of law', 'legal'],
        'bsc': ['bachelor of science', 'bsc', 'b sc'],
        'msc': ['master of science', 'msc', 'm sc'],
        'btech': ['bachelor of technology', 'b tech', 'btech'],
        'mtech': ['master of technology', 'm tech', 'mtech'],
        'ai': ['artificial intelligence', 'ai', 'machine learning', 'ml'],
        'ml': ['machine learning', 'ml', 'artificial intelligence', 'ai'],
        'cyber': ['cybersecurity', 'cyber security', 'cyber', 'forensics'],
        'blockchain': ['blockchain', 'block chain', 'crypto'],
        'cloud': ['cloud', 'cloud computing', 'virtualization'],
        'data': ['data science', 'data analytics', 'analytics'],
        'fullstack': ['full stack', 'fullstack', 'full stack'],
        'iot': ['internet of things', 'iot', 'internet'],
        'ar': ['augmented reality', 'ar', 'virtual reality', 'vr'],
        'vr': ['virtual reality', 'vr', 'augmented reality', 'ar'],
        'ir': ['international relation', 'international relations', 'ir'],
        'international': ['international relation', 'international relations', 'international business'],
        'relation': ['international relation', 'international relations'],
      };

      // Check abbreviation matches
      for (const [abbr, keywords] of Object.entries(abbreviations)) {
        if (word === abbr || word.includes(abbr) || abbr.includes(word)) {
          if (keywords.some(keyword => normalizedTitle.includes(keyword) || normalizedId.includes(keyword))) {
            return true;
          }
        }
      }

      // Partial word matching (e.g., "comp" matches "Computer")
      const titleWords = normalizedTitle.split(/\s+/);
      if (titleWords.some(titleWord => titleWord.startsWith(word) || word.startsWith(titleWord) || titleWord.includes(word))) {
        return true;
      }

      // Also check course ID words
      const idWords = normalizedId.split(/\s+/);
      if (idWords.some(idWord => idWord.startsWith(word) || word.startsWith(idWord) || idWord.includes(word))) {
        return true;
      }

      return false;
    });

    return allWordsMatch;
  };

  // Filter courses by school and search query
  const filteredCourses = useMemo<{ [key: string]: Course[] }>(() => {
    let courses = COURSES;

    // Always exclude Diploma-level courses
    courses = courses.filter(course => getProgrammeLevel(course) !== 'diploma');

    // Filter by programme
    if (selectedProgramme !== 'all') {
      courses = courses.filter(course => getProgrammeLevel(course) === selectedProgramme);
    }

    // Filter by stream
    if (selectedStream !== 'all') {
      courses = courses.filter(course => getStream(course) === selectedStream);
    }

    // Filter by search query with enhanced matching
    if (query && query.trim()) {
      courses = courses.filter(course => matchesSearchQuery(course, query));
    }

    // Group by school
    const grouped: { [key: string]: Course[] } = {};
    courses.forEach(course => {
      if (!grouped[course.group]) {
        grouped[course.group] = [];
      }
      grouped[course.group].push(course);
    });

    return grouped;
  }, [query, selectedProgramme, selectedStream]);

  const handleSelect = (course: Course) => {
    setQuery(course.title);
    onCourseSelect(course);
    setIsOpen(false);
    // Smooth scroll to fee structure section
    setTimeout(() => {
      const el = document.getElementById('fee-structure');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
    setActiveIndex(-1);
    trackClearButton();
    onClear();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Get all courses in a flat array for keyboard navigation
    const allCourses: Course[] = [];
    (Object.values(filteredCourses) as Course[][]).forEach((schoolCourses: Course[]) => {
      allCourses.push(...schoolCourses);
    });

    if (e.key === 'ArrowDown') {
      setActiveIndex(prev => (prev < allCourses.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter' && activeIndex > -1) {
      handleSelect(allCourses[activeIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Check if there are any courses to show
  const hasCourses = Object.keys(filteredCourses).length > 0;
  const allCoursesFlat: Course[] = [];
  (Object.values(filteredCourses) as Course[][]).forEach((schoolCourses: Course[]) => {
    allCoursesFlat.push(...schoolCourses);
  });

  return (
    <div className="w-full">
      <div className="mb-1">
        <p className="text-xs sm:text-sm font-semibold text-slate-700 text-center md:text-left">Filter Programme</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 mb-2 sm:mb-3">
        {/* Programme Selector */}
        <div>
          <label htmlFor="programme-select" className="block text-sm sm:text-base font-semibold text-gray-800 mb-1.5 sm:mb-2 text-center md:text-left">
            Select Programme
          </label>
          <select
            id="programme-select"
            value={selectedProgramme}
            onChange={(e) => {
              const programme = e.target.value;
              setSelectedProgramme(programme);
              // Reset stream when programme changes
              setSelectedStream('all');
              // Clear search query when filter changes
              setQuery('');
              setIsOpen(false);
              setActiveIndex(-1);
              // Track programme selection
              if (programme !== 'all') {
                trackProgrammeSelection(programme);
              }
            }}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            {programmeOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Stream Selector */}
        <div>
          <label htmlFor="stream-select" className="block text-sm sm:text-base font-semibold text-gray-800 mb-1.5 sm:mb-2 text-center md:text-left">
            Select Stream
          </label>
          <select
            id="stream-select"
            value={selectedStream}
            onChange={(e) => {
              const stream = e.target.value;
              setSelectedStream(stream);
              // Clear search query when filter changes
              setQuery('');
              setIsOpen(false);
              setActiveIndex(-1);
              // Track stream selection
              if (stream !== 'all') {
                trackStreamSelection(stream);
              }
            }}
            disabled={selectedProgramme === 'all'}
            title={selectedProgramme === 'all' ? 'Select a Programme first' : 'Select Stream'}
            className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 rounded-lg shadow-sm transition ${
              selectedProgramme === 'all'
                ? 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            }`}
          >
            {streamOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {selectedProgramme === 'all' && (
            <p className="mt-0.5 text-[11px] text-slate-500 text-center md:text-left">Choose a Programme to enable Stream.</p>
          )}
        </div>

        {/* Course Search with Clear Button */}
        <div className="relative">
          <label htmlFor="course-search" className="block text-sm sm:text-base font-semibold text-gray-800 mb-1.5 sm:mb-2 text-center md:text-left">
            Search Course
      </label>
          <div className="relative">
      <input
        id="course-search"
        type="text"
        value={query}
        onChange={e => {
                const newQuery = e.target.value;
                setQuery(newQuery);
                // Show dropdown if there's a query and courses exist
                if (newQuery.trim().length > 0) {
          setIsOpen(true);
                } else {
                  setIsOpen(false);
                }
          setActiveIndex(-1);
        }}
        onKeyDown={handleKeyDown}
              onFocus={() => {
                if (query.trim().length > 0) {
                  setIsOpen(true);
                }
              }}
              onBlur={() => {
                // Delay closing to allow click events on dropdown items
                setTimeout(() => setIsOpen(false), 200);
              }}
              placeholder="Search courses (e.g., CSE, B.Tech, MBBS, AI, Blockchain, Nursing...)"
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 pr-10 sm:pr-12 text-sm sm:text-base border-2 border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        autoComplete="off"
              aria-label="Search courses"
              aria-autocomplete="list"
              aria-expanded={isOpen && query.trim().length > 0}
            />
            {query && (
              <button
                onClick={handleClear}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none focus:text-slate-600 p-1 transition"
                aria-label="Clear course search"
                type="button"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Floating Course Dropdown List for keyboard search - positioned below search input */}
          {isOpen && query.trim().length > 0 && (
            <div className="absolute z-50 w-full mt-2 bg-white border-2 border-blue-200 rounded-lg shadow-xl max-h-80 sm:max-h-96 overflow-y-auto">
              {hasCourses ? (
                (Object.entries(filteredCourses) as Array<[string, Course[]]>).map(([school, courses]) => (
                  <div key={school}>
                    {/* School Header */}
                    <div className="sticky top-0 bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 font-bold text-xs sm:text-sm">
                      {schoolNames[school] || school}
                    </div>
                    {/* Courses in this school */}
                    <ul role="listbox">
                      {courses.map((course, index) => {
                        const globalIndex = allCoursesFlat.indexOf(course);
                        return (
            <li
              key={course.id}
              onClick={() => handleSelect(course)}
                            onMouseEnter={() => setActiveIndex(globalIndex)}
                            className={`px-3 sm:px-4 py-2 sm:py-3 cursor-pointer text-sm sm:text-base hover:bg-blue-50 transition ${
                              globalIndex === activeIndex ? 'bg-blue-100' : ''
              }`}
              role="option"
                            aria-selected={globalIndex === activeIndex}
            >
              <span className="font-bold block">{course.title}</span>
                            <span className="text-xs sm:text-sm text-slate-500">{course.durationYears} Years</span>
            </li>
                        );
                      })}
                    </ul>
                  </div>
                ))
              ) : (
                <div className="px-4 py-8 text-center">
                  <svg className="w-12 h-12 mx-auto text-slate-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-sm font-medium text-slate-600 mb-1">No courses found</p>
                  <p className="text-xs text-slate-500">Try searching with different keywords like "CSE", "B.Tech", "MBBS", or "Nursing"</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Inline Course List - grouped by school, hidden when searching */}
      {hasCourses && !(isOpen && query.trim().length > 0) && (
        <div className="mt-4 sm:mt-5">
          {(Object.entries(filteredCourses) as Array<[string, Course[]]>).map(([school, courses]) => (
            <div key={school} className="mb-5 sm:mb-6">
              {/* School Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-5 py-2.5 sm:py-3 font-bold text-sm sm:text-base rounded-t-lg shadow-md">
                {schoolNames[school] || school}
              </div>
              
              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 bg-slate-50 p-3 sm:p-4 rounded-b-lg border border-slate-200 border-t-0">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => handleSelect(course)}
                    className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 cursor-pointer transition-all duration-200 group overflow-hidden"
                    role="button"
                    aria-label={`Select ${course.title}`}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelect(course);
                      }
                    }}
                  >
                    {/* Course Header */}
                    <div className="px-4 py-3 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                            {course.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {course.durationYears} Years
                            </span>
                            {course.scholarships.length > 0 && (
                              <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Scholarship Available
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                            <svg className="w-4 h-4 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fee Details */}
                    <div className="px-4 py-3">
                      <div className="mb-2">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Yearly Fee Structure</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                        {course.years.map((fee, idx) => (
                          <div 
                            key={idx} 
                            className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-2 sm:p-2.5 border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all group/item"
                          >
                            <div className="text-[10px] sm:text-xs font-medium text-slate-500 mb-1">Year {idx + 1}</div>
                            <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover/item:text-blue-600 transition-colors">
                              {formatCurrency(fee)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseSearch;
