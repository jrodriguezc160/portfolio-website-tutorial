import { FaArrowRight } from "react-icons/fa";

export default function ContactMe({ mode }) {
  return (
    <div className="w-full text-center pt-36 pb-10">
      <h1 className={`text-4xl sm:text-4xl ${mode === "moon" ? "text-gray-100" : "text-black"}`}>Interested in working together?</h1>
      <a href="mailto:jrcortes02102005@gmail.com">
        <span
          className={`mt-10 inline-block w-auto rounded-full ${
            mode !== "sun"
              ? mode === "dawn"
                ? "bg-[#a1e6cb90] hover:bg-[#000] hover:shadow-none"
                : "bg-[#061E4690] backdrop-blur-sm hover:shadow-[#125EFE30] hover:shadow-lg hover:bg-[#09296990] text-gray-100"
              : "bg-black hover:shadow-blue-200 hover:shadow-xl hover:bg-blue-700 "
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
