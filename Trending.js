import React, { useContext, useRef } from "react";
import { ProductContext } from "../Context/ProductContext";
import "./Trending.css";

const Trending = () => {
  const { productData, loading, error } = useContext(ProductContext);
  const scrollRef = useRef(null);

  const trendingProducts = productData.slice(0, 4);

  return (
    <div className="mid-content">
      <div className="trending-container">
        <div className="trending-products" ref={scrollRef}>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error loading products.</p>
          ) : (
            trendingProducts.map((product) => (
              <div key={product.id} className="trending-product-card">
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Trending;
