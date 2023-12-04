import Card from "./components/Card";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/Contact";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState("sun");

  useEffect(() => {
    const storedMode = localStorage.getItem("storedModeLocal");
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

  const changeMode = (newMode) => {
    setMode(newMode);
    console.log("Cambiando al modo " + newMode);
    localStorage.setItem("storedModeLocal", newMode);
  };

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div className={`min-h-screen pb-10 sm:px-5 bg-gray-100 ${mode}-mode app`}>
      <SideBar mode={mode} changeMode={changeMode} />
      <div data-aos="fade-down" data-aos-duration="800" id="home">
        <Card mode={mode} />
      </div>

      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About mode={mode} />
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="h-full"
        id="skills"
      >
        <Skills mode={mode} />
      </div>

      <div data-aos="fade-up" data-aos-duration="800" id="projects">
        <Projects mode={mode} />
      </div>

      <div data-aos="fade-up" data-aos-duration="800" id="contact">
        <ContactMe mode={mode} />
      </div>
      <Footer mode={mode} />
    </div>
  );
}

export default App;
