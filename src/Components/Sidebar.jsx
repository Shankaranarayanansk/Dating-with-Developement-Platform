import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  background-color: #e5e7eb;
  min-height: 100vh;
  padding: 0.25rem;
  position: fixed;
  transition: all 0.3s;
  width: ${props => props.isOpen ? '7.5rem' : '3rem'};
  border-right: 9px solid black;
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
  transition: color 0.3s ease;

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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <div>
        <MenuButton onClick={toggleSidebar}>
          <FiMenu size={24} />
        </MenuButton>
      </div>

      <NavList isOpen={isOpen}>
        <NavItem><NavLink to="/web-development" onClick={closeSidebar}>Web Development</NavLink></NavItem>
        <NavItem><NavLink to="/app-development" onClick={closeSidebar}>App Development</NavLink></NavItem>
        <NavItem><NavLink to="/problem-solving" onClick={closeSidebar}>Problem Solving</NavLink></NavItem>
        <NavItem><NavLink to="/Blockchain" onClick={closeSidebar}>Blockchain</NavLink></NavItem>
        <NavItem><NavLink to="/Aptitude" onClick={closeSidebar}>Aptitude</NavLink></NavItem>
        <NavItem><NavLink to="/Aiml" onClick={closeSidebar}>AI & ML & DL</NavLink></NavItem>
        <NavItem><NavLink to="/Entrepreneur" onClick={closeSidebar}>Entrepreneur</NavLink></NavItem>
        <NavItem><NavLink to="/tech" onClick={closeSidebar}>IT Knowledge</NavLink></NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;