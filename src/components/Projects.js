import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div
      className='max-w-4xl mx-auto justify-center py-12'
      id='tech'
    >
      <p className='text-2xl text-black text-center sm:text-4xl pt-4 font-bold'>
        Projects
      </p>

      {/* Grid */}
      <div class='grid grid-cols-1 gap-x-0 gap-y-6 sm:gap-x-6 sm:grid-cols-3 mt-8'>
        <div
          className='group relative h-56 w-full sm:colspan:1'
          data-aos='fade-right'
          data-aos-duration='800'
          data-aos-delay='200'
        >
          <a
            href='youtube.com'
            className='h-full w-full flex items-end transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden rounded-xl bg-white shadow-lg'
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

        <div
          className='group relative h-56 w-full sm:colspan:1 col-span-2'
          data-aos='fade-left'
          data-aos-duration='1000'
          data-aos-delay='200'
        >
          <a
            href='https://jrodriguezc160.github.io/react-movie-searcher'
            target='_blank'
            rel='noreferrer'
            className='h-full w-full flex items-end transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden rounded-xl bg-white shadow-lg'
          >
            <div className='absolute inset-4 mb-8 rounded-md overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                loading='lazy'
                alt='Movies'
                class='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105'
              />
            </div>

            <span className='relative ml-6 mb-3 inline-block text-sm md:ml-6 md:text-lg'>
              Movies searcher
            </span>
          </a>
        </div>

        <div
          className='group relative h-56 w-full sm:colspan:1 col-span-2'
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-delay='200'
        >
          <a
            href='https://jrodriguezc160.github.io/react-movie-searcher'
            target='_blank'
            rel='noreferrer'
            className='h-full w-full flex items-end transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden rounded-xl bg-white shadow-lg'
          >
            <div className='absolute inset-4 mb-8 rounded-md overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                loading='lazy'
                alt='Portfolio'
                class='absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105'
              />
            </div>

            <span className='relative ml-6 mb-3 inline-block text-sm md:ml-6 md:text-lg'>
              Portfolio
            </span>
          </a>
        </div>

        <div
          className='group relative h-56 w-full sm:colspan:1'
          data-aos='fade-left'
          data-aos-duration='800'
          data-aos-delay='200'
        >
          <a
            href='youtube.com'
            className='h-full w-full flex items-end transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden rounded-xl bg-white shadow-lg'
          >
            <div className='absolute inset-4 mb-8 rounded-md overflow-hidden'>
              <img
                src='https://eshop.macsales.com/blog/wp-content/uploads/2020/07/StickiesIcon-1-284x284.png'
                loading='lazy'
                alt='Sticky notes'
                class='absolute inset-0 h-full w-auto mx-auto object-cover object-center transition duration-500 group-hover:scale-105'
              />
            </div>

            <span className='relative ml-6 mb-3 inline-block text-sm md:ml-6 md:text-lg'>
              Notes app
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
