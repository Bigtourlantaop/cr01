import React, { useState, useEffect } from 'react';
import './App.css';
import { Course } from './interfaces';
import CourseItem from './CourseItem.tsx';

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(courses => {
        setCourses(courses);
      });
  },[]);

  return (
    <div className ="App">
      <ul>
      {courses.map((item) => (
        <CourseItem key={item.id} course={item} />
      ))}
      </ul>
    </div>
  );
} 

export default App;


