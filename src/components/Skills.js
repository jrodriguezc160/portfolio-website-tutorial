import React from 'react';
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from 'react-icons/fa';

function Skills() {
  return (
    <div
      className='max-w-4xl mx-auto justify-center py-12'
      id='tech'
    >
      <p className='text-2xl text-black text-center sm:text-4xl pt-4 font-bold'>
        Tech I use
      </p>

      <div className='flex flex-wrap justify-center pt-2'>
        <div className='small-card-selector flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 transition ease-in-out duration-700 hover:shadow-orchid hover:scale-110'>
          <FaFigma
            color='orchid'
            className='mx-auto text-4xl'
          />
          <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
            Figma
          </p>
        </div>

        <div className='small-card-selector flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 transition ease-in-out duration-700 hover:shadow-slate-500 hover:scale-110'>
          <FaGithub
            color='slategrey'
            className='mx-auto text-4xl'
          />
          <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
            GitHub
          </p>
        </div>

        <div className='small-card-selector flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 transition ease-in-out duration-700 hover:shadow-orange-500 hover:scale-110'>
          <FaHtml5
            color='darkorange'
            className='mx-auto text-4xl'
          />
          <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
            HTML 5
          </p>
        </div>

        <div className='small-card-selector flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 transition ease-in-out duration-700 hover:shadow-blue-700 hover:scale-110'>
          <FaCss3
            color='blue'
            className='mx-auto text-4xl'
          />
          <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
            CSS
          </p>
        </div>

        <div className='small-card-selector flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 transition ease-in-out duration-700 hover:shadow-yellow-300 hover:scale-110'>
          <FaJs
            color='gold'
            className='mx-auto text-4xl'
          />
          <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
            JavaScript
          </p>
        </div>

        <div className='small-card-selector flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 transition ease-in-out duration-700 hover:shadow-sky-300 hover:scale-110'>
          <FaReact
            color='skyblue'
            className='mx-auto text-4xl'
          />
          <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
            React
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
