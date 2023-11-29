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

      <div class='grid grid-cols-1 gap-x-0 gap-y-12 sm:gap-x-12 sm:grid-cols-3 mt-8'>
        <a
          href='youtube.com'
          className='group relative flex h-56 w-full items-end overflow-hidden rounded-xl bg-white shadow-lg sm:colspan:1 transition duration-500 hover:scale-105 hover:shadow-2xl'
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
          href='https://jrodriguezc160.github.io/react-movie-searcher'
          target='_blank'
          rel='noreferrer'
          className='group relative flex h-56 items-end overflow-hidden rounded-xl bg-white shadow-lg sm:colspan:1 transition duration-500 hover:scale-105 hover:shadow-2xl col-span-2'
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
          className='group relative flex h-56 items-end overflow-hidden rounded-xl bg-white shadow-lg sm:colspan:1 transition duration-500 hover:scale-105 hover:shadow-2xl col-span-2'
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
          className='group relative flex h-56 w-full items-end overflow-hidden rounded-xl bg-white shadow-lg sm:colspan:1 transition duration-500 hover:scale-105 hover:shadow-2xl'
        >
          <div className='absolute inset-4 mb-8 rounded-md overflow-hidden'>
            <img
              src='https://eshop.macsales.com/blog/wp-content/uploads/2020/07/StickiesIcon-1-284x284.png'
              loading='lazy'
              alt='Weather'
              class='absolute inset-0 h-full w-90% object-cover object-center mx-auto transition duration-500 group-hover:scale-105'
            />
          </div>

          <span className='relative ml-6 mb-3 inline-block text-sm md:ml-6 md:text-lg'>
            Notes app
          </span>
        </a>
      </div>
    </div>
  );
}

export default Projects;
