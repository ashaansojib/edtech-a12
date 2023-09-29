import React from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <div className='my-container grid grid-cols-4 justify-between items-center gap-4 py-10'>
            <div>
                <h1 className='font-semibold text-3xl'>Our top Featured Solutions</h1>
                <p className='py-3 text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, a.</p>
                <Link to="/about" className='active'>Get Started</Link>
            </div>
            <div className='f-content py-4 bg-[#F8FBFF]'>
                <div className='flex justify-center items-center'>
                    <img className='f-img-bg' src="/f1.png" alt="" />
                </div>
                <div className='text-center'>
                    <h3 className='py-3 text-2xl font-semibold'>Robotic Automation</h3>
                    <Link to="http://localhost:5173/class-details/6486f6b3cec8ab66a146d467" className='default border rounded-full'>Learn More</Link>
                </div>
            </div>
            <div className='f-content py-4 bg-[#F8FBFF]'>
                <div className='flex justify-center items-center'>
                    <img className='f-img-bg' src="/f2.png" alt="" />
                </div>
                <div className='text-center'>
                    <h3 className='py-3 text-2xl font-semibold'>Machine Learning</h3>
                    <Link to="http://localhost:5173/class-details/6486f6b3cec8ab66a146d467" className='default border rounded-full'>Learn More</Link>
                </div>
            </div>
            <div className='f-content py-4 bg-[#F8FBFF]'>
                <div className='flex justify-center items-center'>
                    <img className='f-img-bg' src="/f3.png" alt="" />
                </div>
                <div className='text-center'>
                    <h3 className='py-3 text-2xl font-semibold'>Cognitive Engagement</h3>
                    <Link to="http://localhost:5173/class-details/6486f6b3cec8ab66a146d467" className='default border rounded-full'>Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;