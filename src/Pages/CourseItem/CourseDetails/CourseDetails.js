import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse)
    return (
        <div>
            <h3>This is course details</h3>
        </div>
    );
};

export default CourseDetails;