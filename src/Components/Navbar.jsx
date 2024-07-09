import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUsers, FiTrendingUp, FiPhone, FiMenu } from "react-icons/fi";
import Logo from "../assets/logo.png";
import styled from "styled-components";

const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 5px 0;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: red;
    font-weight: bold;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black p-1.5 lg:px-12 flex items-center justify-between sticky top-0 z-50 rounded-b-lg font-poppins font-bold">
      <div className="flex items-center space-x-8">
        <a href="https://datewithdevelopment.vercel.app/">        <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </a>
        <p className="bg-black text-white text-2xl  p-2 m-29 font-poppins font-bold " >
          Learn <span className="text-yellow-600 text-2xl  p-2 m-29 font-poppins font-bold ">Hub</span>
        </p>
      </div>

      <div className="lg:hidden">
        <button
          className="text-white focus:red ;"
          onClick={toggleMenu}
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      <ul
        className={`lg:flex items-center space-x-8 ${
          isOpen
            ? "block absolute top-full left-0 right-0 bg-black p-4"
            : "hidden"
        } lg:relative lg:bg-transparent lg:p-0`}
      >
        <li >
          <NavLink to="/" onClick={closeMenu} className="ml-8">
            <FiHome className="h-5 w-5 mr-1 inline" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/alumni" onClick={closeMenu}>
            <FiUsers className="h-5 w-5 mr-1 inline" />
            Alumni
          </NavLink>
        </li>
        <li>
          <NavLink to="/trending" onClick={closeMenu}>
            <FiTrendingUp className="h-5 w-5 mr-1 inline" />
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink to="/seniors" onClick={closeMenu}>
            <FiUsers className="h-5 w-5 mr-1 inline" />
            Seniors
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            <FiPhone className="h-5 w-5 mr-1 inline" />
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;