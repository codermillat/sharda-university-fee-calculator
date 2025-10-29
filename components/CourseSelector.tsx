import React, { useMemo } from 'react';
import { Course } from '../types';

interface CourseSelectorProps {
  courses: Course[];
  selectedCourse: Course | null;
  onCourseSelect: (course: Course | null) => void;
}

const CourseSelector: React.FC<CourseSelectorProps> = ({ courses, selectedCourse, onCourseSelect }) => {

  const groupedCourses = useMemo(() => {
    return courses.reduce((acc, course) => {
        const { school } = course;
        if (!acc[school]) {
            acc[school] = [];
        }
        acc[school].push(course);
        return acc;
    }, {} as Record<string, Course[]>);
  }, [courses]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const courseId = e.target.value;
    const course = courses.find(c => c.id === courseId) || null;
    onCourseSelect(course);
  };

  return (
    <div>
      <label htmlFor="course-select" className="block text-sm font-semibold text-slate-700 mb-2">
        1. Select Your Course
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>
        </div>
        <select
          id="course-select"
          value={selectedCourse?.id || ''}
          onChange={handleChange}
          className="w-full pl-10 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sharda-blue focus:border-sharda-blue transition bg-white appearance-none text-slate-800"
        >
          <option value="" disabled>Select a course...</option>
          {Object.entries(groupedCourses).map(([school, coursesInGroup]) => (
            <optgroup key={school} label={school}>
              {coursesInGroup.sort((a, b) => a.programName.localeCompare(b.programName)).map(course => (
                <option key={course.id} value={course.id}>
                  {course.programName}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default CourseSelector;