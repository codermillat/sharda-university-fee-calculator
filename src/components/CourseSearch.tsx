import React, { useState, useMemo } from 'react';
import { Course } from '../types';
import { COURSES } from '../data/courses';

interface CourseSearchProps {
  onCourseSelect: (course: Course) => void;
}

const CourseSearch: React.FC<CourseSearchProps> = ({ onCourseSelect }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const filteredCourses = useMemo(() => {
    if (!query) return [];
    const lowerCaseQuery = query.toLowerCase();
    return COURSES.filter(course =>
      course.title.toLowerCase().includes(lowerCaseQuery) ||
      course.id.toLowerCase().includes(lowerCaseQuery) ||
      course.group.toLowerCase().includes(lowerCaseQuery)
    );
  }, [query]);

  const handleSelect = (course: Course) => {
    setQuery(course.title);
    onCourseSelect(course);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setActiveIndex(prev => (prev < filteredCourses.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter' && activeIndex > -1) {
      handleSelect(filteredCourses[activeIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mb-8">
      <label htmlFor="course-search" className="block text-xl font-semibold text-gray-800 mb-3 text-center">
        Search and Select a Course
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
        onBlur={() => setTimeout(() => setIsOpen(false), 150)} // Delay to allow click
        placeholder="e.g., B.Tech CSE, MBBS, Nursing..."
        className="w-full px-5 py-3 text-lg border-2 border-slate-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        autoComplete="off"
      />
      {isOpen && filteredCourses.length > 0 && (
        <ul
          className="absolute z-10 w-full mt-2 bg-white border border-slate-300 rounded-lg shadow-xl max-h-80 overflow-y-auto"
          role="listbox"
        >
          {filteredCourses.map((course, index) => (
            <li
              key={course.id}
              onClick={() => handleSelect(course)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`px-5 py-3 cursor-pointer text-base hover:bg-blue-50 transition ${
                index === activeIndex ? 'bg-blue-100' : ''
              }`}
              role="option"
              aria-selected={index === activeIndex}
            >
              <span className="font-bold block">{course.title}</span>
              <span className="text-sm text-slate-500">{course.group}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseSearch;
