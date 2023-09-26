import React from 'react';
import { Link } from 'react-router-dom';

const PopularClassCard = ({ classData }) => {
    const { name, image, price, course, _id } = classData;
    console.log(_id)
    return (
        <div className="card rounded-b-none hover:border-sky-600 border">
            <figure className='h-[180px]'>
                <img src={image} className='w-full h-full' alt="Image not found" />
            </figure>
            <div className="p-2 h-[120px] flex flex-col justify-end">
                <p className='text-xl py-1'>{course}</p>
                <h2 className='text-slate-500'>{name}</h2>
                <div className='flex justify-between items-center'>
                    <p>BDT : {price}</p>
                    <button className='active'><Link to={`/class-details/ ${_id}`}>More</Link></button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;