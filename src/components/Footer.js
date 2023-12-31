import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer({ mode }) {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
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

      <div
        className={`flex justify-center mt-4 ${
          mode === "moon" ? "text-gray-100" : "text-black"
        }`}
      >
        <p className=" mb-4">
          Made with{" "}
          <span className="mr-2" role="link" aria-label="heart">
            {mode !== "dawn" ? "💙" : "💚"}
          </span>
          by{" "}
          <a
            className={`${mode !== "dawn" ? "text-blue-500" : "text-emerald-200"} hover:underline`}
            href="mailto:jrcortes02102005@gmail.com"
          >
            Javier Rodríguez Cortés
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
