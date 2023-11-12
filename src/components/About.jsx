import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1e1e1e] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-purple-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Get To Know Me</p>
            </div>
            <div>
              <p>
"Crafting top-notch software isn't just a job for me – it's my passion. I thrive on turning your unique ideas into digital realities. Whether you're a solo dreamer, a small-business maven, or a giant in the corporate jungle, I'm here to transform your tech dreams into code magic. Ready to redefine what's possible? Imagine having a software sorcerer at your beck and call. What would you conjure up today?"</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;