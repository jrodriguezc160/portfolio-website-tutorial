import React, { useEffect } from "react";
import profile from "../images/profile.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Card({ mode = "sun"}) {
  useEffect(() => {
    const card = document.querySelector(".card-selector");
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    const THRESHOLD = 5;

    function handleHover(e) {
      if (card) {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } =
          currentTarget;

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

        card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
      }
    }

    function resetStyles(e) {
      if (card) {
        card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
      }
    }

    if (card && !motionMatchMedia.matches) {
      card.addEventListener("mousemove", handleHover);
      card.addEventListener("mouseleave", resetStyles);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleHover);
        card.removeEventListener("mouseleave", resetStyles);
      }
    };
  }, []);

  return (
    <div className="w-full pt-8">
      <div
        className={`flex flex-col justify-center max-w-xs mx-auto ${
          mode !== "sun" ? (mode === "dawn" ? "bg-[#a1e6cb90]" : "bg-[#061E4690] backdrop-blur-sm hover:shadow-[#125EFE30] hover:shadow-2xl text-gray-100") : "bg-white"
        } shadow-xl rounded-xl p-5 card-selector transition-shadow duration-500 hover:shadow-2xl`}
      >
        <div className="">
          <img
            src={profile}
            alt="profile"
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
          />
        </div>
        <div className="text-center mt-5">
          <p className={`text-4xl sm:text-3xl ${mode !== "sun" ? (mode === "dawn" ? "text-gray-900" : "text-white") : "text-gray-900"} font-bold`}>
            Javier Rodríguez
          </p>
          <p className={`text-xs sm:text-base ${mode !== "sun" ? (mode === "dawn" ? "text-gray-800 border-emerald-300" : "text-gray-400") : "text-gray-600"} pt-2 pb-4 px-5 w-auto inline-block border-b-2`}>
            Web Developer + Designer
          </p>

          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white 
              transition ease-in-out duration-700"
              href="https://github.com/jrodriguezc160"
            >
              <FaGithub />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800 rounded-full hover:text-white 
              transition ease-in-out duration-700"
              href="https://github.com/jrodriguezc160"
            >
              <FaLinkedin />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-sky-400 hover:bg-sky-400 rounded-full hover:text-white 
              transition ease-in-out duration-700"
              href="https://github.com/jrodriguezc160"
            >
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
