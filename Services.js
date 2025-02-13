import React from "react";
import "./Services.css";
import MidContent from '../../Components/MidContent/Midcontent';
import Trusted from '../../Components/Trusted/Trusted';


const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-item">
        <h3>Mobile Phones</h3>
        <p>Explore a wide range of mobile phones from every brand, all in one place.</p>
      </div>
      <div className="service-item">
        <h3>Headphones</h3>
        <p>High-quality headphones for all your audio needs, from premium to budget-friendly options.</p>
      </div>
      <div className="service-item">
        <h3>Laptops</h3>
        <p>Find laptops for every need, whether for work, gaming, or everyday use.</p>
      </div>
      <div className="service-item">
        <h3>Smart Tech</h3>
        <p>Discover the latest in smart tech, from wearables to smart home devices.</p>
      </div>
      <div className="service-item">
        <h3>Cameras</h3>
        <p>Shop top-brand cameras for photography and videography enthusiasts.</p>
      </div>
      <div className="service-item">
        <h3>Tech Devices</h3>
        <p>Get all other tech devices, including accessories and gadgets for every tech lover.</p>
      </div>
      <div className="service-item">
        <h3>Smart Watches</h3>
        <p>Explore a Latest sMart waTches with best quality and ranges of your favorite brands.</p>
      </div>
      <div className="service-item">
        <h3>Tablets and IPads</h3>
        <p>Here you can see the Tablets & IPads for schools students, entertainment purposes and professionals all in one place.</p>
      </div>
      <MidContent/>
      <Trusted/>
    </div>
  );
};

export default Services;
