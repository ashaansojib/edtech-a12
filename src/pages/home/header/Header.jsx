import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Header = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <header className='top-banner'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="md:h-[550px] w-full"
            >
                <SwiperSlide>
                    <div className='slider-bg h-full md:p-10 flex justify-center items-center'>
                        <div className='md:w-3/4 text-center'>
                            <p className='my-badge'>ONLY BEST LIFECOACHES</p>
                            <h2 className='md:text-6xl text-3xl font-bold mb-4 text-white'>We Provide Service 4 Years</h2>
                            <p className='text-slate-100'>English texts for beginners to practice reading and comprehension online and for free. Practicing your comprehension of written English will both improve. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore, deserunt voluptatum repudiandae ullam nostrum sed iure assumenda commodi itaque?</p>
                            <button className='m-4 my-btn'>Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-bg2 h-full md:p-10 flex justify-center items-center'>
                        <div className='md:w-3/4 text-center'>
                            <p className='my-badge'>ONLY BEST LIFECOACHES</p>
                            <h2 className='md:text-6xl text-3xl font-bold mb-4 text-white'>We Teach You Take Life Control</h2>
                            <p className='text-slate-100'>Reading practice to help you understand texts with a wide vocabulary where you ... Our online English classes feature lots of useful learning materials. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ut. Molestiae eius voluptas in deserunt cum totam laudantium accusantium doloribus rem, minima consectetur nulla fugiat sunt nemo quibusdam perferendis. Quae.</p>
                            <button className='m-4 my-btn'>Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </header>
    );
};

export default Header;