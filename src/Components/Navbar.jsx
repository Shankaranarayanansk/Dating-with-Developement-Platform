import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUsers, FiTrendingUp, FiPhone } from 'react-icons/fi';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-1.5 lg:px-12 flex items-center justify-between sticky top-0 z-50">
      {/* Logo and Title */}
      <div className="flex items-center space-x-8">
        <img src={Logo} alt="Logo" className="h-12 w-auto" />
        <span className="text-white text-xl font-semibold">VSBEC Candidates</span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="block lg:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`lg:flex items-center space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
        <li>
          <Link
            to="/"
            className="block lg:inline-block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            <FiHome className="h-5 w-5 mr-1 inline" />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/alumni"
            className="block lg:inline-block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            <FiUsers className="h-5 w-5 mr-1 inline" />
            Alumni
          </Link>
        </li>
        <li>
          <Link
            to="/trending"
            className="block lg:inline-block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            <FiTrendingUp className="h-5 w-5 mr-1 inline" />
            Trending
          </Link>
        </li>
        <li>
          <Link
            to="/seniors"
            className="block lg:inline-block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            <FiUsers className="h-5 w-5 mr-1 inline" />
            Seniors
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block lg:inline-block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            <FiPhone className="h-5 w-5 mr-1 inline" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
