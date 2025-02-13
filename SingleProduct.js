import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Components/Context/ProductContext";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setProducts([data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="oneproducts-container" data-count={products.length}>
      {products.map((product) => (
        <div className="onesingle-product" key={product.id}>
          <img src={product.image} alt={product.title} className="product-image" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default SingleProduct;
