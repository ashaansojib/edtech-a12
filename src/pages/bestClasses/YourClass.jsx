import React from 'react';
import SectionTitle from '../../hooks/SectionTitle';

const YourClass = () => {
    return (
        <div className='my-container'>
            <SectionTitle heading="Best Classes In the Years" subHeading="May the progress of education continue from any part of the country under the care of the best teachers" />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-between items-center pb-3'>
                <div className='p-2 border'>
                    <div>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/eqMtHvLTwn8?si=vi8rLNf5t602GVuV" title="YouTube video player"></iframe>
                    </div>
                    <div className='p-2'>
                        <h2 className='font-semibold'>কেনো শিখবো Socket ? কি কি কাজ করা যায় ? Real Time Web Application</h2>
                        <p>Online batch library provides opportunity to practice chapter-wise questions of all subjects.</p>
                    </div>
                </div>
                <div className='p-2 border'>
                    <div>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UUddpbgPEJM?si=rd2tA5-K996LibYX" title="YouTube video player"></iframe>
                    </div>
                    <div className='p-2'>
                        <h2 className='font-semibold'>WebSocket in NodeJS | Socket.IO - Real Time Messaging</h2>
                        <p>Online batch library provides opportunity to practice chapter-wise questions of all subjects.</p>
                    </div>
                </div>
                <div className='p-2 border'>
                    <div>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4yaIOaOzkTE" title="YouTube video player"></iframe>
                    </div>
                    <div className='p-2'>
                        <h2 className='font-semibold'>Every chapter will have practice as desired</h2>
                        <p>Online batch library provides opportunity to practice chapter-wise questions of all subjects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourClass;