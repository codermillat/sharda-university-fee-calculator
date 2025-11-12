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

  // Track course search
  useEffect(() => {
    if (query.length > 2) {
      trackCourseSearch(query);
    }
  }, [query]);

  // Get school full names mapping
  const schoolNames: { [key: string]: string } = {
    'SSET': 'Sharda School of Engineering & Technology',
    'SBS': 'Sharda School of Business Studies',
    'SOL': 'Sharda School of Law',
    'SHSS': 'Sharda School of Humanities & Social Sciences',
    'SBSR': 'Sharda School of Basic Sciences & Research',
    'SNSR': 'Sharda School of Nursing Sciences & Research',
    'SMSR': 'Sharda School of Medical Sciences & Research',
    'Pharmacy': 'Pharmacy',
  };

  // Programme filter options
  const programmeOptions = [
    { value: 'all', label: 'Select Programme' },
    { value: 'graduate', label: 'Graduate' },
    { value: 'post_graduate', label: 'Post Graduate' },
    { value: 'integrated', label: 'Integrated' },
  ];

  // Helpers to infer programme and stream
  const getProgrammeLevel = (course: Course): 'graduate' | 'post_graduate' | 'diploma' | 'integrated' => {
    const t = course.title.toLowerCase();
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
    if (course.group === 'Pharmacy') return 'Pharmacy';
    if (course.group === 'SMSR') {
      const t = course.title.toLowerCase();
      if (t.includes('dental') || t.includes('bds')) return 'Dental';
      if (t.includes('physiotherapy') || t.includes('allied')) return 'Allied Health Sciences';
      return 'Medical';
    }
    return 'Engineering';
  };

  // Dynamic Stream filter options based on selected programme
  const streamOptions = useMemo(() => {
    // Start from all non-diploma courses
    let base = COURSES.filter(c => getProgrammeLevel(c) !== 'diploma');
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

    // Filter by search query
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      courses = courses.filter(course =>
        course.title.toLowerCase().includes(lowerCaseQuery) ||
        course.id.toLowerCase().includes(lowerCaseQuery) ||
        course.group.toLowerCase().includes(lowerCaseQuery)
      );
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
        <div>
          <label htmlFor="course-search" className="block text-sm sm:text-base font-semibold text-gray-800 mb-1.5 sm:mb-2 text-center md:text-left">
            Search Course
          </label>
          <div className="relative">
            <input
              id="course-search"
              type="text"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
                setIsOpen(true);
                setActiveIndex(-1);
              }}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 150)}
            placeholder="Type course name (e.g., B.Tech CSE, MBBS, Nursing...)"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 pr-10 sm:pr-12 text-sm sm:text-base border-2 border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              autoComplete="off"
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
        </div>
      </div>

      {/* Inline Course List - grouped by school, always visible */}
      {hasCourses && (
        <div className="mt-2 sm:mt-3">
          {(Object.entries(filteredCourses) as Array<[string, Course[]]>).map(([school, courses]) => (
            <div key={school} className="mb-3 sm:mb-4">
              <div className="bg-slate-100 text-slate-800 px-3 sm:px-4 py-1.5 font-bold text-sm sm:text-base rounded-md">
                {schoolNames[school] || school}
              </div>
              <ul className="divide-y divide-slate-200 border border-slate-200 rounded-md overflow-hidden bg-white">
                {courses.map((course) => (
                  <li
                    key={course.id}
                    onClick={() => handleSelect(course)}
                    className="px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-blue-50 cursor-pointer transition group"
                    role="button"
                    aria-label={`Select ${course.title}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 text-sm sm:text-base">{course.title}</p>
                        <p className="text-xs sm:text-sm text-slate-500 mb-1.5">{course.durationYears} Years</p>
                        <div className="bg-white">
                          <div className="inline-flex items-center gap-2 mb-1">
                            <span className="text-[10px] sm:text-xs font-semibold text-slate-700 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">Yearly Fee</span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-1">
                            {course.years.map((fee, idx) => (
                              <div key={idx} className="flex items-center justify-between text-xs sm:text-sm text-slate-700">
                                <span className="text-slate-600">Year {idx + 1}</span>
                                <span className="font-semibold">{formatCurrency(fee)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-slate-400 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Floating Course Dropdown List for keyboard search */}
      {isOpen && hasCourses && (
        <div className="relative z-10 w-full mt-2 bg-white border border-slate-300 rounded-lg shadow-xl max-h-80 sm:max-h-96 overflow-y-auto">
          {(Object.entries(filteredCourses) as Array<[string, Course[]]>).map(([school, courses]) => (
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
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseSearch;
