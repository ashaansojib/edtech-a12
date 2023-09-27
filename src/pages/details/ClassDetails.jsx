import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ClassDetails = () => {
    const { name, image, price, course, email, seate } = useLoaderData();
    return (
        <div className='my-container py-8'>
            <div>
                <h1 className='text-3xl font-semibold'>{course}</h1>
                <p className='py-2 text-gray-700'>Instructor - {name}</p>
                <p>In today's interconnected world, proficiency in the English language has become an invaluable skill. The English language is not only a tool for communication but also a key that unlocks a world of opportunities. This English course has been designed to empower you with the knowledge and skills necessary to excel in both written and spoken English. Whether you're a native speaker looking to refine your language abilities or a non-native speaker seeking fluency, this course is your pathway to success.</p>
                <img className='p-2' src={image} alt="" />
            </div>
            <div>
                <h3 className='text-2xl font-semibold'>Course Details:</h3>
                <li className='px-2'>Course Fees: {price}BDT</li>
                <li className='px-2'>Enrolled Students: {seate}</li>
                <li className='px-2'>450 Pre-Recorded Class</li>
                <li className='px-2'>Enrolled in: 24 Sep, 2023</li>
                <li className='px-2'>Mailto: {email}</li>
            </div>
            <h3 className='text-2xl font-semibold'>Conclusion: </h3>
            <p>As we conclude this English course, we hope you've found it to be a rewarding and enriching experience. The mastery of English is not just about acquiring a language; it's about opening doors to new cultures, opportunities, and ideas. We trust that you've not only honed your language skills but also gained a deeper appreciation for the nuances of communication.</p>
        </div>
    );
};

export default ClassDetails;