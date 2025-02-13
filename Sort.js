import React from "react";
import "./Sort.css"; 

const Sort = ({ setSortOption }) => {
  return (
    <div className="sort-container">
      <label>Sort By:</label>
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Select</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
