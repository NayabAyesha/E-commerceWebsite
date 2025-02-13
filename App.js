import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Rout from "../src/Pages/Rout/Rout";
import Footer from "./Components/Footer/Footer";
import { ProductProvider } from "./Components/Context/ProductContext"; 

const App = () => (
  <div>
    <BrowserRouter>
      <ProductProvider> 
        <Navbar />
        <Rout />
        <Footer />
      </ProductProvider>
    </BrowserRouter>
  </div>
);

export default App;
