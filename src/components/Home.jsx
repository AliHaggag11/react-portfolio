import React, { useRef } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const scrollToWorkRef = useRef();

  const handleButtonClick = () => {
    scrollToWorkRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-purple-600 text-3xl' >Hi, I'm </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ali Haggag
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I'm not just your average full-stack developer – I'm a digital architect crafting extraordinary online experiences. While I dabble in design, my real forte lies in building responsive and dynamic full-stack web applications. Let's not just navigate the digital world; let's conquer it together. Ready to transform your online presence into something truly exceptional?
        </p>
        <div>
          <button 
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600'
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
