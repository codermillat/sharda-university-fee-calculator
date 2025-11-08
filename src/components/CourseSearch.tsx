import React, { useState, useMemo, useEffect } from 'react';
import { Course } from '../../types';
import { COURSES } from '../../data/courses';
import { trackSchoolSelection, trackCourseSearch, trackClearButton } from '../utils/analytics';

interface CourseSearchProps {
  onCourseSelect: (course: Course) => void;
  selectedCourse: Course | null;
  onClear: () => void;
}

const CourseSearch: React.FC<CourseSearchProps> = ({ onCourseSelect, selectedCourse, onClear }) => {
  const [query, setQuery] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<string>('all');
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

  // Get all unique schools
  const schools = useMemo(() => {
    const uniqueSchools = Array.from(new Set(COURSES.map(course => course.group)));
    return uniqueSchools.sort();
  }, []);

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

  // Filter courses by school and search query
  const filteredCourses = useMemo(() => {
    let courses = COURSES;

    // Filter by school
    if (selectedSchool !== 'all') {
      courses = courses.filter(course => course.group === selectedSchool);
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
  }, [query, selectedSchool]);

  const handleSelect = (course: Course) => {
    setQuery(course.title);
    onCourseSelect(course);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery('');
    setSelectedSchool('all');
    setIsOpen(false);
    setActiveIndex(-1);
    trackClearButton();
    onClear();
  };

  const handleSchoolChange = (school: string) => {
    setSelectedSchool(school);
    setQuery('');
    setIsOpen(false);
    setActiveIndex(-1);
    if (school !== 'all') {
      trackSchoolSelection(schoolNames[school] || school);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Get all courses in a flat array for keyboard navigation
    const allCourses: Course[] = [];
    Object.values(filteredCourses).forEach(schoolCourses => {
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
  Object.values(filteredCourses).forEach(schoolCourses => {
    allCoursesFlat.push(...schoolCourses);
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* School Selector */}
        <div>
          <label htmlFor="school-select" className="block text-sm sm:text-base font-semibold text-gray-800 mb-1.5 sm:mb-2 text-center md:text-left">
            Select School
          </label>
          <select
            id="school-select"
            value={selectedSchool}
            onChange={(e) => handleSchoolChange(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="all">All Schools</option>
            {schools.map(school => (
              <option key={school} value={school}>
                {schoolNames[school] || school}
              </option>
            ))}
          </select>
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
              placeholder="e.g., B.Tech CSE, MBBS, Nursing..."
              className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base border-2 border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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

      {/* Course Dropdown List - Centered */}
      {isOpen && hasCourses && (
        <div className="relative z-10 w-full mt-2 bg-white border border-slate-300 rounded-lg shadow-xl max-h-80 sm:max-h-96 overflow-y-auto">
          {Object.entries(filteredCourses).map(([school, courses]) => (
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
