import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view';

function About() {
  return (
    <div className='max-w-4xl mt-20 mx-auto'>
      <p className='text-2xl text-black md:4xl font-bold text-center'>
        Hey! 👋
      </p>
      <p className='text-base sm:xl text-center text-gray-600 leading-relaxed mt-4'>
        I'm a passionate F1 driver and tiktoker. I'm a <s>three</s> two times
        world-champion and living legend. My favourite number is 33 and I love
        being a father.
      </p>

      <ScrollIntoView selector='#tech' className='p-0 cursor-pointer'>
        <div className='mx-auto p-10'>
          <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500' />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
