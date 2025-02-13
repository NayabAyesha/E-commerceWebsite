import React, { useState, useContext, useMemo } from "react";  // Remove useEffect from here
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { ProductContext } from "../../Components/Context/ProductContext";
import Filter from "../../Components/FilteredProducts/Filter";
import Sort from "../../Components/SortingProducts/Sort";

import "./Product.css";

const Products = () => {
  const { productData, loading, error } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const navigate = useNavigate();

  const productsArray = useMemo(() => {
    return Array.isArray(productData) ? productData : [];
  }, [productData]);

  const filteredProducts = productsArray.filter((product) =>
    selectedCategory ? product.category === selectedCategory : true
  );

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortOption === "price-low"
      ? a.price - b.price
      : sortOption === "price-high"
        ? b.price - a.price
        : 0
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;

  const handleSelect = (id) => {
    console.log("Redirecting to product ID:", id); 
    navigate(`/products/${id}`);
  };
  

  return (
    <div className="products-container">

      <div className="sidebar">
        <h2>Filter</h2>
        <Filter setSelectedCategory={setSelectedCategory} />
        <br/>
        <h2>Sorting</h2>
        <Sort setSortOption={setSortOption} />
      </div>
  
      <div className="products-content">
        <h2>Our Products</h2>
        <div className="products-grid">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <button className="select-btn" onClick={() => handleSelect(product.id)}>Select</button>
              </div> 
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default Products;
