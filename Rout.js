import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Products from '../../Pages/Products/Products';
import SingleProduct from '../../Pages/SingleProduct/SingleProduct';
import Cart from '../../Components/Cart/Cart';
import ErrorPage from '../../Components/Error/ErrorPage';

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Rout;
