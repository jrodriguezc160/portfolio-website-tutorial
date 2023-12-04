import { FaArrowRight } from "react-icons/fa";

export default function ContactMe({ mode }) {
  return (
    <div className="w-full text-center pt-36 pb-10">
      <h1 className="text-2xl sm:text-4xl">Interested in working together?</h1>
      <a href="mailto:jrcortes02102005@gmail.com">
        <span
          className={`mt-10 inline-block w-auto rounded-full ${
            mode !== "sun"
              ? mode === "dawn"
                ? "bg-[#a1e6cb90] hover:bg-[#000] hover:shadow-none"
                : "bg-[#181818] backdrop-blur-sm hover:shadow-blue-200 hover:shadow-md"
              : "bg-white hover:shadow-blue-200 hover:shadow-xl hover:bg-blue-700 "
          } text-white text-base md:text-xl py-4 px-8 cursor-pointer transition duration-500 hover:scale-105 hover:shadow-xl`}
        >
          <div className="flex flex-row items-center">
            <span className="mr-3">Get in touch</span>
            <FaArrowRight />
          </div>
        </span>
      </a>
    </div>
  );
}
