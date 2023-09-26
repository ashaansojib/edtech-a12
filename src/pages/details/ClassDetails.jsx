import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ClassDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            class details
        </div>
    );
};

export default ClassDetails;