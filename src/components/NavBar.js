import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getValue } from '@testing-library/user-event/dist/utils';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  return (
    <nav className="navBar">
      <button type="button" onClick={handleToggle}>
        {' '}
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
        {' '}
      </button>
      {' '}
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {' '}
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              onClick={() => closeMenu()}
              activeclassname="active-link"
              exact={getValue.toString()}
            >
              {' '}
              {link.text}
              {' '}
            </NavLink>
            {' '}
          </li>
        ))}
        {' '}
      </ul>
      {' '}
    </nav>
  );
};
export default Navbar;
