import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css'; 
import { AiOutlineSearch } from 'react-icons/ai'; 
import { FiLogIn } from 'react-icons/fi'; 
import { CiLogout } from "react-icons/ci"; 
import { useAuth0 } from "@auth0/auth0-react"; 
import { FaUserAlt } from "react-icons/fa"; 
import { Link, useLocation } from 'react-router-dom'; 
import { FaCartPlus } from "react-icons/fa"; 
import { CgMenuCheese, CgCloseR } from "react-icons/cg"; 
import { ProductContext } from '../../Components/Context/ProductContext';

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0(); 
  const { cart } = useContext(ProductContext); 
  const [searchValue, setSearchValue] = useState(''); 
  const [isMobileNavOpen, setMobileNavOpen] = useState(false); 
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const location = useLocation(); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); 
      if (window.innerWidth > 768) { 
        setMobileNavOpen(false); 
      } 
    };
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); 
  };

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev); 
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className='Header'>
      <div className='Mid-Header'>
        <div className='Logo'>
          <img src={`${process.env.PUBLIC_URL}/logo.jpeg`} alt="logo" />
        </div>
        <div className='Search-Box'>
          <input type="text" placeholder='Search' value={searchValue} onChange={handleSearchChange} />
          <button><AiOutlineSearch /></button>
        </div>

        {isAuthenticated ? (
          <div className='User'>
            <div className='icon' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              <CiLogout />
            </div>
            <div className='button'>
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button>
            </div>
          </div>
        ) : (
          <div className='User'>
            <div className='icon'>
              <FiLogIn />
            </div>
            <div className='button'>
              <button onClick={() => loginWithRedirect()}>LogIn</button>
            </div>
          </div>
        )}
      </div>

      <div className={`Last_Header ${isMobileNavOpen ? 'mobile-nav-open' : 'mobile-nav-closed'}`}>
        <div className='user-profile'>
          {isAuthenticated ? (
            <>
              <div className='profile-icon'>
                <FaUserAlt />
              </div>
              <div className='info'>
                <h2>{user?.name || "User"}</h2>
                <p>{user?.email || "No Email Provided"}</p>
              </div>
            </>
          ) : (
            <>
              <div className='profile-icon'>
                <FaUserAlt />
              </div>
              <div className='info'>
                <p>Please LogIn</p>
              </div>
            </>
          )}
        </div>

        <div className='nav'>
          <ul>
            <li><Link to="/" className={`link ${isActive('/')}`}>Home</Link></li>
            <li><Link to="/about" className={`link ${isActive('/about')}`}>About</Link></li>
            <li><Link to="/services" className={`link ${isActive('/services')}`}>Services</Link></li>
            <li><Link to="/products" className={`link ${isActive('/products')}`}>Products</Link></li>
            <li><Link to="/contact" className={`link ${isActive('/contact')}`}>Contact</Link></li>
          </ul>
        </div>

        <div className='offer'>
          <p>Flat 10% off on first order</p>
        </div>

        <div className='cart'>
          <Link to="/cart" className={`navbar-link cart-trolly--link ${isActive('/cart')}`}>
            <FaCartPlus className='cart-trolly' />
            <span className='cart-total--item'>{cart.length}</span>
          </Link>
        </div>
      </div>

      {isMobileView && (
        <div className='mobile-navbar-btn' onClick={toggleMobileNav}>
          {isMobileNavOpen ? <CgCloseR className='mobile-nav-icon' /> : <CgMenuCheese className='mobile-nav-icon' />}
        </div>
      )}
    </div>
  );
};

export default Navbar;
