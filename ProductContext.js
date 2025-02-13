import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`{HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      setProductData(data);
      setFilteredProducts(data);
      console.log("Fetched Data:", data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    
  };
  

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = productData;

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortOption === "low-high") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, sortOption, productData]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        productData,
        filteredProducts,
        loading,
        error,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        sortOption,
        setSortOption,
        addToCart,
        cart,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
