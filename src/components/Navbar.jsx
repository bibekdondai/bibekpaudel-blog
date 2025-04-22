import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Skills', to: '/skills' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="p-4 bg-black bg-opacity-30 backdrop-blur-md fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">Bibek Paudel</h1>
        <div className="space-x-4 text-sm sm:text-base">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`hover:text-blue-400 transition ${
                pathname === link.to ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
