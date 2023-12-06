import React, { useState, useEffect } from "react";
import {
  FiFolder,
  FiHome,
  FiMoon,
  FiSun,
  FiSunset,
  FiTool,
  FiUser,
} from "react-icons/fi";

function SideBar({ mode, changeMode }) {
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const rootElement = document.getElementById("root");
    rootElement.setAttribute("data-mode", mode);
    console.log(`Changed to ${mode} mode`)
  }, [mode]);

  return (
    <div className="absolute z-10 flex justify-center flex-col h-screen w-screen sm:w-auto">
      <div className={`fixed md:left-4 left-auto right-auto mx-5 sm:mx-0 md:top-4 bottom-4 md:w-12 w-[90%] sm:w-fit-content justify-between flex md:flex-col ${mode !== "sun" ? (mode === "dawn" ? "bg-[#214d5e]" : "bg-[#061E4690] backdrop-blur-sm hover:shadow-[#125EFE30] hover:shadow-lg text-gray-100") : "bg-white"} shadow-lg transition-all duration-300 rounded-3xl hover:rounded-2xl`}
      style={{justifySelf:"center", marginRight:"auto"}}>
        <SideBarIcon
          icon={<FiHome />}
          text="Home"
          targetId="home"
          onClick={() => handleScroll("home")}
        />

        <SideBarIcon
          icon={<FiTool />}
          text="Skills"
          targetId="skills"
          onClick={() => handleScroll("skills")}
        />

        <SideBarIcon
          icon={<FiFolder />}
          text="Projects"
          targetId="projects"
          onClick={() => handleScroll("projects")}
        />

        <SideBarIcon
          icon={<FiUser />}
          text="Contact"
          targetId="contact"
          onClick={() => handleScroll("contact")}
        />

        <div className={`flex md:flex-col m-auto mb-1 mr-1 w-fit rounded-3xl ${
          mode !== "sun" ? (mode === "dawn" ? "bg-[#a1e6cb90]" : "bg-[#061E46] backdrop-blur-sm") : "bg-white"
        } gap-1`}>
          <div
            className={`sidebar-icon mode ${mode === "sun" ? "active" : "bg-transparent"}`}
            onClick={() => changeMode("sun")}
          >
            <FiSun />
          </div>

          <div
            className={`sidebar-icon mode ${mode === "dawn" ? "active" : "bg-transparent"}`}
            onClick={() => changeMode("dawn")}
          >
            <FiSunset />
          </div>

          <div
            className={`sidebar-icon mode ${mode === "moon" ? "active" : "bg-transparent"}`}
            onClick={() => changeMode("moon")}
          >
            <FiMoon />
          </div>
        </div>
      </div>
    </div>
  );
}

const SideBarIcon = ({ icon, text = "tooltip 💡", targetId, onClick }) => (
  <a
    className="group sidebar-icon"
    href={`#${targetId}`}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </a>
);

export default SideBar;
