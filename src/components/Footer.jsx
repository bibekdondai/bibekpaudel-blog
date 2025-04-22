import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 text-center bg-black bg-opacity-30 mt-16 backdrop-blur-sm">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Bibek Paudel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
