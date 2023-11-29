import React from 'react';
import { FiFolder, FiHome, FiSun, FiTool, FiUser } from 'react-icons/fi';

function SideBar() {
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='absolute z-10 flex flex-col h-screen'>
      <div className='fixed left-4 top-4 bottom-4 w-12 flex flex-col bg-white shadow-lg transition-all duration-300 rounded-3xl hover:rounded-2xl'>
        <SideBarIcon
          icon={<FiHome />}
          text='Home'
          targetId='home'
          onClick={() => handleScroll('home')}
        />

        <SideBarIcon
          icon={<FiTool />}
          text='Skills'
          targetId='skills'
          onClick={() => handleScroll('skills')}
        />

        <SideBarIcon
          icon={<FiFolder />}
          text='Projects'
          targetId='projects'
          onClick={() => handleScroll('projects')}
        />

        <SideBarIcon
          icon={<FiUser />}
          text='Contact'
          targetId='contact'
          onClick={() => handleScroll('contact')}
        />

        <div className='sidebar-icon mt-auto mb-1'>
          <FiSun />
        </div>
      </div>
    </div>
  );
}

const SideBarIcon = ({ icon, text = 'tooltip 💡', targetId, onClick }) => (
  <a
    className='group sidebar-icon'
    href={`#${targetId}`}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    {icon}
    <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
  </a>
);

export default SideBar;
