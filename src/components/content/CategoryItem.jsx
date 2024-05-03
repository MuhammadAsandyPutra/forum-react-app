/* eslint-disable react/button-has-type */
// CategoryItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

const CategoryItem = ({ text, onClick }) => (
  <button
    className="inline-block bg-blue-500 text-white text-sm px-2 py-1 rounded-full mr-1 mb-1 cursor-pointer"
    onClick={() => onClick(text)}
  >
    #
    {text}
  </button>
);

CategoryItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryItem;
