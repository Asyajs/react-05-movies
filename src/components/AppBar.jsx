import React from 'react';
import { Link } from 'react-router-dom';

const navItem = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' }
]

export const AppBar = () => {
  return (
    <div>
      {navItem.map(({ href, text }) => (
        <Link to={href} key={href}
          className='nav_item'>
          {text}
        </Link>))}
    </div>
  );
}

// navlink