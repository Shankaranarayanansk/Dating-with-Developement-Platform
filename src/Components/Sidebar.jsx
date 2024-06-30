import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="bg-gray-200 w-30 min-h-screen p-1 fixed">
      {/* Hamburger Menu Button (Visible on Small Screens) */}
      <div className="flex justify-between items-center mb-4 lg:hidden">
        <button
          className="text-gray-600 focus:outline-none"
          onClick={toggleSidebar}
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar Navigation Links */}
      <ul className={`space-y-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <li><Link to="/web-development">Web Development</Link></li>
        <li><Link to="/app-development">App Development</Link></li>
        <li><Link to="/problem-solving">Problem Solving</Link></li>
        <li><Link to="/tech">Tech</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
