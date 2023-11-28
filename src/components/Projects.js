import React from 'react';
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from 'react-icons/fa';

function Projects() {
  return (
    <div
      className='max-w-4xl mx-auto justify-center py-12'
      id='tech'
    >
      <p className='text-2xl text-black text-center sm:text-4xl pt-4 font-bold'>
        Projects
      </p>

      <div class='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 mt-8'>
        <a
          href='youtube.com'
          className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:h-80 transition duration-500 hover:scale-105'
        >
          <div className='absolute inset-4 mb-8 rounded-md overflow-hidden'>
            <img
              src='https://emojis.wiki/thumbs/emojis/sun-behind-cloud.webp'
              loading='lazy'
              alt='Weather'
              class='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105'
            />
          </div>

          <span className='relative ml-6 mb-3 inline-block text-sm md:ml-6 md:text-lg'>
            Weather app
          </span>
        </a>

        <a
          href='youtube.com'
          className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:h-80 transition duration-500 hover:scale-105 col-span-2'
        >
          <div className='absolute inset-4 mb-8 rounded-md overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              loading='lazy'
              alt='Weather'
              class='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105'
            />
          </div>

          <span className='relative ml-6 mb-3 inline-block text-sm md:ml-6 md:text-lg'>
            Movies searcher
          </span>
        </a>

        <a
          href='youtube.com'
          className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:h-80 transition duration-500 hover:scale-105 col-span-2'
        >
          <div className='absolute inset-4 mb-8 rounded-md overflow-hidden'>
            <img
              src='https://emojis.wiki/thumbs/emojis/sun-behind-cloud.webp'
              loading='lazy'
              alt='Weather'
              class='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105'
            />
          </div>

          <span className='relative ml-6 mb-3 inline-block text-sm md:ml-6 md:text-lg'>
            Weather app
          </span>
        </a>

        <a
          href='youtube.com'
          className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:h-80 transition duration-500 hover:scale-105'
        >
          <div className='absolute inset-4 mb-8 rounded-md overflow-hidden'>
            <img
              src='https://emojis.wiki/thumbs/emojis/sun-behind-cloud.webp'
              loading='lazy'
              alt='Weather'
              class='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105'
            />
          </div>

          <span className='relative ml-6 mb-3 inline-block text-sm md:ml-6 md:text-lg'>
            Weather app
          </span>
        </a>

        
      </div>
    </div>
  );
}

export default Projects;
