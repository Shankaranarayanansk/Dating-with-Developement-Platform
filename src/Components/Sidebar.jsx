import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaHtml5 } from "react-icons/fa6";
import styled from 'styled-components';
import { SiFlutter } from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { SiBlockchaindotcom } from "react-icons/si";
import { TbMathSymbols } from "react-icons/tb";
import { RiRobot3Fill } from "react-icons/ri";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";


const SidebarContainer = styled.aside`
  background-color: #e5e7eb;
  height: 100vh; /* Full viewport height */
  padding: 0.25rem;
  position: fixed;
  transition: all 1s;
  width: ${props => props.isOpen ? '50rem' : '2.5rem'};
  border-right: 9px solid black;
  z-index: 1;
  overflow-y: auto; /* Enables vertical scrolling */
  
  @media (min-width: 768px) {
    width: ${props => props.isOpen ? '10rem' : '4rem'};
  }
`;

const MenuButton = styled.button`
  color: #4b5563;
  &:focus {
    outline: none;
    
  }
`;

const NavList = styled.ul`
  display: ${props => props.isOpen ? 'block' : 'none'};
  margin-top: 1rem;
`;

const NavItem = styled.li`
  margin-bottom: 1rem;
`;

const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 5px 0;
  color: #333;
  text-decoration: none;
  transition: color 1s ease;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 1s ease;
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

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <SidebarContainer isOpen={isOpen} >
        <div>
          <MenuButton onClick={toggleSidebar}>
            <FiMenu size={24} />
          </MenuButton>
        </div>
        <NavList isOpen={isOpen} className='font-poppins font-semibold'>
          <NavItem><NavLink to="/web-development" onClick={closeSidebar}><FaHtml5 className='h-5 w-5 mr-1 inline'/>Web Development</NavLink></NavItem>
          <NavItem><NavLink to="/app-development" onClick={closeSidebar}><SiFlutter className='h-5 w-5 mr-1 inline'/>
          App Development</NavLink></NavItem>
          <NavItem><NavLink to="/problem-solving" onClick={closeSidebar}><LiaJava className='h-5 w-5 mr-1 inline' />
          Problem Solving</NavLink></NavItem>
          <NavItem><NavLink to="/blockchain" onClick={closeSidebar}><SiBlockchaindotcom className='h-5 w-5 mr-1 inline'/>
          Blockchain</NavLink></NavItem>
          <NavItem><NavLink to="/aptitude" onClick={closeSidebar}><TbMathSymbols className='h-5 w-5 mr-1 inline'/>
          Aptitude</NavLink></NavItem>
          <NavItem><NavLink to="/aiml" onClick={closeSidebar}><RiRobot3Fill className='mr-1 h-5 w-5 inline' />
          AIML & DL</NavLink></NavItem>
          <NavItem><NavLink to="/entrepreneur" onClick={closeSidebar}><MdOutlineLeaderboard className='mr-1 h-5 w-5 inline'/>
          Entrepreneur</NavLink></NavItem>
          <NavItem><NavLink to="/tech" onClick={closeSidebar}><IoIosPeople  className='mr-1 h-5 w-5 inline' />
          Communication</NavLink></NavItem>
          <NavItem><NavLink to="/cs" onClick={closeSidebar}><FaComputer  className='mr-1 h-5 w-5 inline' />
          CS Subjects</NavLink></NavItem>
          
        </NavList>
      </SidebarContainer>
      <main style={{ marginLeft: isOpen && !isMobile ? '9.5rem' : '3rem', transition: 'margin-left 0.3s' }}>
        {children}
      </main>
    </>
  );
};

export default Sidebar;