import React from 'react';
import { NavLink } from 'react-router-dom';
import css from "./AppBar.module.css";

const navItem = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' }
]

const activeClassName = {
  color: 'red',
};

export const AppBar = () => {
  return (
    <div className={css.navItem}>
      {navItem.map(({ href, text }) => (
        <NavLink
          to={href} key={href}
          className={css.navLink}
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
          {text}
        </NavLink>))}
    </div>
  );
}

// navlink
