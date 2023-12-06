import React from "react";
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";

function Skills({ mode = "sun" }) {
  return (
    <div className="max-w-4xl mx-auto justify-center mb-24" id="tech">
      <p className={`text-4xl text-black text-center pt-24 ${mode !== "sun" ? (mode === "dawn" ? "text-gray-900" : "text-white") : "text-gray-900"} font-bold`}>
        Tech I use
      </p>

      <div className="flex flex-wrap justify-center pt-6">
        <div
          className={`flex flex-col w-40 p-10 m-6 overflow-hidden ${
            mode !== "sun"
              ? mode === "dawn"
                ? "bg-[#a1e6cb90] hover:bg-[#a1e6cb] hover:shadow-none"
                : "bg-[#061E4690] backdrop-blur-sm hover:shadow-[#125EFE30] hover:shadow-lg hover:bg-[#09296990] text-gray-100"
              : "bg-white hover:shadow-[#DA70D675] hover:shadow-xl "
          } shadow-lg rounded-xl sm:w-52 transition ease-in-out duration-700 hover:scale-110`}
        >
          <FaFigma color="orchid" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Figma
          </p>
        </div>

        <div
          className={`flex flex-col w-40 p-10 m-6 overflow-hidden ${
            mode !== "sun"
              ? mode === "dawn"
                ? "bg-[#a1e6cb90] hover:bg-[#a1e6cb] hover:shadow-none"
                : "bg-[#061E4690] backdrop-blur-sm hover:shadow-[#125EFE30] hover:shadow-lg hover:bg-[#09296990] text-gray-100"
              : "bg-white hover:shadow-slate-200 hover:shadow-xl "
          } shadow-lg rounded-xl sm:w-52 transition ease-in-out duration-700 hover:scale-110`}
        >
          <FaGithub color="slategrey" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            GitHub
          </p>
        </div>

        <div
          className={`flex flex-col w-40 p-10 m-6 overflow-hidden ${
            mode !== "sun"
              ? mode === "dawn"
                ? "bg-[#a1e6cb90] hover:bg-[#a1e6cb] hover:shadow-none"
                : "bg-[#061E4690] backdrop-blur-sm hover:shadow-[#125EFE30] hover:shadow-lg hover:bg-[#09296990] text-gray-100"
              : "bg-white hover:shadow-orange-200 hover:shadow-xl"
          } shadow-lg rounded-xl sm:w-52 transition ease-in-out duration-700 hover:scale-110`}
        >
          <FaHtml5 color="darkorange" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            HTML 5
          </p>
        </div>

        <div
          className={`flex flex-col w-40 p-10 m-6 overflow-hidden ${
            mode !== "sun"
              ? mode === "dawn"
                ? "bg-[#a1e6cb90] hover:bg-[#a1e6cb] hover:shadow-none"
                : "bg-[#061E4690] backdrop-blur-sm hover:shadow-[#125EFE30] hover:shadow-lg hover:bg-[#09296990] text-gray-100"
              : "bg-white hover:shadow-blue-200 hover:shadow-xl"
          } shadow-lg rounded-xl sm:w-52 transition ease-in-out duration-700 hover:scale-110`}
        >
          <FaCss3 color="blue" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            CSS
          </p>
        </div>

        <div
          className={`flex flex-col w-40 p-10 m-6 overflow-hidden ${
            mode !== "sun"
              ? mode === "dawn"
                ? "bg-[#a1e6cb90] hover:bg-[#a1e6cb] hover:shadow-none"
                : "bg-[#061E4690] backdrop-blur-sm hover:shadow-[#125EFE30] hover:shadow-lg hover:bg-[#09296990] text-gray-100"
              : "bg-white hover:shadow-yellow-200 hover:shadow-xl"
          } shadow-lg rounded-xl sm:w-52 transition ease-in-out duration-700 hover:scale-110`}
        >
          <FaJs color="gold" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            JavaScript
          </p>
        </div>

        <div
          className={`flex flex-col w-40 p-10 m-6 overflow-hidden ${
            mode !== "sun"
              ? mode === "dawn"
                ? "bg-[#a1e6cb90] hover:bg-[#a1e6cb] hover:shadow-none"
                : "bg-[#061E4690] backdrop-blur-sm hover:shadow-[#125EFE30] hover:shadow-lg hover:bg-[#09296990] text-gray-100"
              : "bg-white hover:shadow-sky-200 hover:shadow-xl"
          } shadow-lg rounded-xl sm:w-52 transition ease-in-out duration-700 hover:scale-110`}
        >
          <FaReact color="skyblue" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            React
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
