import React from "react";
import "./Filter.css";

const Filter = ({ setSelectedCategory }) => {
  return (
    <div className="filter-container">
      <label>Filter By Category:</label>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="men's clothing">Men clothing</option>
        <option value="women's clothing">Women clothing</option>
        <option value="jewelery">Jewelery</option>

      </select>
    </div>
  );
};

export default Filter;
