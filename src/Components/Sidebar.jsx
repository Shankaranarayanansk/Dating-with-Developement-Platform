import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <aside className={`bg-gray-200 min-h-screen p-1  mr-2 fixed transition-all duration-300 ${isOpen ? 'w-30' : 'w-12'}`} style={{borderRight: '8px solid black'}}>
      {/* Hamburger Menu Button */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-gray-600 focus:outline-none"
          onClick={toggleSidebar}
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar Navigation Links */}
      <ul className={`space-y-4 ${isOpen ? 'block' : 'hidden'}`}>
        <li><Link to="/web-development" onClick={closeSidebar}>Web Development</Link></li>
        <li><Link to="/app-development" onClick={closeSidebar}>App Development</Link></li>
        <li><Link to="/problem-solving" onClick={closeSidebar}>Problem Solving</Link></li>
        <li><Link to="/tech" onClick={closeSidebar}>Tech</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;