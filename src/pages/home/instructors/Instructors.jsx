import React from 'react';
import InstructorCard from './InstructorCard';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../hooks/SectionTitle';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: instructors = [], refetch} = useQuery(['instructors'], async()=>{
        const res = await axiosSecure.get('instructor-user')
        return res.data;
    })
    // console.log(instructors)
    // const filterUser = instructors?.filter( user => user._id === '6486eed0037176a0e47bd8da');
    // console.log(filterUser)
    return (
        <div className='my-container py-10'>
            <SectionTitle heading="Our Popular Instructors" subHeading="My English teacher is a very skillful person. Everybody in my class is fond of him. He takes the classes in a funny and interesting way. We love English a lot; he encourages all of us to speak in English. Only because of him, we understood the beauty of this wonderful language."></SectionTitle>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 p-8 gap-4'>
                {
                    instructors.map(instructor => <InstructorCard
                    key={instructor._id}
                    instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;