import React, { useState } from 'react';

const Header = ({ onCategoryChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); 
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category); 
    setIsDropdownOpen(false); 
  };

  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Matias Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => handleCategoryClick('home')} 
                className="text-gray-300 hover:text-white"
              >
                Home
              </button>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                Category
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <button
                    onClick={closeDropdown} 
                    className="absolute top-0 right-0 p-2 text-gray-600"
                  >
                    ✖
                  </button>
                  <ul className="py-1">
                    <li>
                      <button
                        onClick={() => handleCategoryClick('Internacionales')}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Internacionales
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleCategoryClick('Liga Chilena')}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Liga Chilena
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleCategoryClick('Liga Brasil')}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Liga Brasil
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleCategoryClick('Todas')}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Todas
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick('about')} 
                className="text-gray-300 hover:text-white"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick('contact')} 
                className="text-gray-300 hover:text-white"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
