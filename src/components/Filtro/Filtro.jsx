import React from 'react';
import PropTypes from 'prop-types';

const Filtro = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Filtrar por Categoría</h2>
      <div className="flex flex-wrap gap-3">
        <button
          className={`px-4 py-2 rounded-md font-medium ${
            !selectedCategory
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onCategoryChange('')}
        >
          Todas
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md font-medium ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

Filtro.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired, 
  selectedCategory: PropTypes.string, 
  onCategoryChange: PropTypes.func.isRequired, 
};

export default Filtro;
