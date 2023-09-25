import React from 'react';
import { useLoaderData } from 'react-router-dom';

const InstructorDetail = () => {
    const ins = useLoaderData();
    console.log(ins)
    return (
        <div>
            <h1>Instructor details</h1>
        </div>
    );
};

export default InstructorDetail;