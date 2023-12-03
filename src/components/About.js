import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center flex items-center justify-center">
        Hey!&nbsp;
        <img
          src="https://emojigraph.org/media/apple/waving-hand-light-skin-tone_1f44b-1f3fb.png"
          alt="hand"
          className="text-2xl h-9 inline-block waving-hand"
        />
      </p>

      <p className="text-base sm:xl text-center text-gray-600 leading-relaxed mt-4">
        I'm a passionate <b>web developer</b> and <b>graphic designer</b> that
        loves creating unique experiences on the internet. I combine my skills
        in design with my experience as a developer to craft beautiful and
        intuitive web apps.
      </p>

      <ScrollIntoView selector="#tech" className="p-0 cursor-pointer">
        <div className="mx-auto p-10">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
