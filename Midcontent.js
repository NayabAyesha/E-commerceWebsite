import React from 'react';
import './Midcontent.css';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Midcontent = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast Free Delivery above 3000/-</h3>
            </div>
          </div>
          <div className="services-2">
          <div className="services-colomn-2">
            <div>
              <MdSecurity className="icon" />
              <h3>Non-contact Shipping</h3>
            </div>
            </div>
          
          <div className="services-colomn-2">
            <div>
              <GiReceiveMoney className="icon" />
              <h3>Money Back Guarantee</h3>
            </div>
            </div>
          </div>
        
        <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Midcontent;
