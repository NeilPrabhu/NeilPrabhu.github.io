import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="gradient-bg shadow-sm mb-4">
      <div className="max-w-4xl mx-auto px-4 py-2 flex justify-start items-center">
        <div className="flex space-x-4">
          <Link 
            to="/" 
            className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 transition-colors duration-300"
          >
            Home
          </Link>
          <Link 
            to="/non-tech" 
            className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 transition-colors duration-300"
          >
            Non-Tech
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;