import React, { useRef } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const scrollToWorkRef = useRef();

  const handleButtonClick = () => {
    scrollToWorkRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div name='home' className='w-full h-screen bg-[#1D1D1D]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-orange-600 text-3xl' >Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          ALI HAGGAG
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button 
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600'
            onClick={handleButtonClick}
          >
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>

      {/* This is the section you want to scroll to */}
      <div ref={scrollToWorkRef}></div>
    </div>
  );
};

export default Home;
