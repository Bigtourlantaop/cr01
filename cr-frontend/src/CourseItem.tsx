import { Course } from "./interfaces";
import React from 'react';

type CourseItemProps = {
    course: Course,

};

const CourseItem = (props: CourseItemProps) => {
    const course: Course = props.course;
    return (
    <li className='Course'>
        {course.number} - {course.title}
    </li>
    );
};

export default CourseItem;