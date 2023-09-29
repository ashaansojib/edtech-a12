import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const InstructorDetail = () => {
    const { email, name, photo, role } = useLoaderData();
    const [rating, setRating] = useState(5)
    return (
        <div className='my-container py-10'>
            <div className='grid grid-cols-3 gap-3 justify-between items-start'>
                <div className='p-3 border rounded-md'>
                    <img src={photo} alt="" />
                    <div className='p-2 shadow-lg lg:space-y-3'>
                        <p>Cell: +8801892932859</p>
                        <p>Email: <span className='text-blue-600 cursor-pointer'>{email}</span></p>
                        <p>Course: 60+ running</p>
                        <p>Follower: 9,200,098</p>
                        <p>Experience: 6 Years</p>
                        <p>Address: Rangpur, Bangladesh</p>
                    </div>
                </div>
                <div className='py-2 col-span-2'>
                    <h2 className='text-3xl font-semibold uppercase'>{name}</h2>
                    {/* <Rating style={{ maxWidth: 100 }} value={rating} onChange={setRating}></Rating> */}
                    <p className='italic text-gray-800 pb-3'>Position - {role}</p>
                    <p>"As an instructor, my passion is to inspire and empower others through education. I thrive on the opportunity to share knowledge, ignite curiosity, and help individuals reach their full potential. I believe that learning is a lifelong journey, and I'm dedicated to creating engaging and enriching learning experiences for my students. Whether it's in a classroom, online, or through any platform, I am committed to making a positive impact on the lives of those I teach, fostering a love for learning, and helping them achieve their goals."</p>
                </div>

            </div>
        </div>
    );
};

export default InstructorDetail;