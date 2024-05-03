// CategoryList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

const CategoryList = ({ categories, onCategoryClick }) => (
  <div className="m-6">
    <h2 className="mb-2 text-lg font-semibold">Popular Categories</h2>
    <div>
      {categories.map((category) => (
        <CategoryItem
          key={category}
          text={category}
          onClick={() => onCategoryClick(category)} // Mengirimkan kategori yang dipilih
        />
      ))}
    </div>
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default CategoryList;
