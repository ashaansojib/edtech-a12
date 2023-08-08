import React from 'react';
import SectionTitle from '../../hooks/SectionTitle';

const YourClass = () => {
    return (
        <div className='my-container'>
            <SectionTitle heading="Best Classes In the Years" subHeading="May the progress of education continue from any part of the country under the care of the best teachers" />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-between items-center'>
                <div className='p-2 border'>
                    <div>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4yaIOaOzkTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='p-2'>
                        <h2>Every chapter will have practice as desired</h2>
                        <p>Online batch library provides opportunity to practice chapter-wise questions of all subjects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourClass;