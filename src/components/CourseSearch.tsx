import React, { useState, useMemo } from 'react';
import { Course } from '../../types';
import { COURSES } from '../../data/courses';

interface CourseSearchProps {
  onCourseSelect: (course: Course) => void;
}

const CourseSearch: React.FC<CourseSearchProps> = ({ onCourseSelect }) => {
  const [query, setQuery] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<string>('all');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

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
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* School Selector */}
        <div>
          <label htmlFor="school-select" className="block text-lg font-semibold text-gray-800 mb-2">
            Select School
          </label>
          <select
            id="school-select"
            value={selectedSchool}
            onChange={(e) => {
              setSelectedSchool(e.target.value);
              setQuery('');
              setIsOpen(false);
              setActiveIndex(-1);
            }}
            className="w-full px-4 py-3 text-base border-2 border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="all">All Schools</option>
            {schools.map(school => (
              <option key={school} value={school}>
                {schoolNames[school] || school}
              </option>
            ))}
          </select>
        </div>

        {/* Course Search */}
        <div>
          <label htmlFor="course-search" className="block text-lg font-semibold text-gray-800 mb-2">
            Search Course
          </label>
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
            className="w-full px-4 py-3 text-base border-2 border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            autoComplete="off"
          />
        </div>
      </div>

      {/* Course Dropdown List */}
      {isOpen && hasCourses && (
        <div className="relative z-10 w-full mt-2 bg-white border border-slate-300 rounded-lg shadow-xl max-h-96 overflow-y-auto">
          {Object.entries(filteredCourses).map(([school, courses]) => (
            <div key={school}>
              {/* School Header */}
              <div className="sticky top-0 bg-blue-600 text-white px-4 py-2 font-bold text-sm">
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
                      className={`px-4 py-3 cursor-pointer text-base hover:bg-blue-50 transition ${
                        globalIndex === activeIndex ? 'bg-blue-100' : ''
                      }`}
                      role="option"
                      aria-selected={globalIndex === activeIndex}
                    >
                      <span className="font-bold block">{course.title}</span>
                      <span className="text-sm text-slate-500">{course.durationYears} Years</span>
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
