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

  return (
    <div className="absolute z-10 flex flex-col h-screen">
      <div className="fixed md:left-4 left-auto md:top-4 bottom-4 md:w-12 w-[90%] flex md:flex-col bg-white shadow-lg transition-all duration-300 rounded-3xl hover:rounded-2xl">
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

        <div className="flex flex-col m-auto mb-1 w-fit rounded-3xl bg-gray-50 gap-1">
          <div
            className={`sidebar-icon mode ${mode === "sun" ? "active" : ""}`}
            onClick={() => changeMode("sun")}
          >
            <FiSun />
          </div>

          <div
            className={`sidebar-icon mode ${mode === "dawn" ? "active" : ""}`}
            onClick={() => changeMode("dawn")}
          >
            <FiSunset />
          </div>

          <div
            className={`sidebar-icon mode ${mode === "moon" ? "active" : ""}`}
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
