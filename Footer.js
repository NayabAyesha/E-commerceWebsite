import React from "react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => (
  
  

    <>
      <div className="footerfirst grid grid-four-column">
        <div className="footer-about">
          <h3>TrendHive Store</h3>
        </div>
        <div className="footer-subscribe">
          <h3>Subscribe to get important updates</h3>
          <form action="#">
            <input type="email" name="email" placeholder="YOUR E-MAIL" />
            <input type="submit" value="subscribe" />
          </form>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="footer-social--icons">
            <div>
            <a
                href="https://www.discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaDiscord className="icons" />
              </a>
            </div>
            <div>
            <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaInstagram className="icons" />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icons" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Call Us</h3>
          <h3>+92 12345678978</h3>
        </div>
      </div>

      <div className="footersecond">
        <div className="footercontainer">     
            <p>PRIVACY POLICY</p><p>
            @{new Date().getFullYear()} TrendHive. All Rights Reserved
          </p>
            <p>TERMS & CONDITIONS</p>
          
        </div>
      </div>
   
    </>
 
);

export default Footer;
