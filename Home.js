import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Trending from '../../Components/Trending/Trending';
import MidContent from '../../Components/MidContent/Midcontent';
import Trusted from '../../Components/Trusted/Trusted';

const imageList = [
  require('../../Assets/first.png'),
  require('../../Assets/shop-banner.png'),
  require('../../Assets/iphone.png'),
  require('../../Assets/headphones.png'),
  require('../../Assets/samsungfold.png'),
  require('../../Assets/smartwatches.png'),
  require('../../Assets/tablet.png'),
  require('../../Assets/tablethings.png'),
  require('../../Assets/orange_smartwatch.png'),
  require('../../Assets/phone.png'),
  require('../../Assets/laptop.png'),
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='Home'>
        <div 
          className='Top-Banner' 
          style={{ backgroundImage: `url(${imageList[index]})` }}
        >
          <div className='Content'>
            <h2>Welcome to our TrendHive Store</h2>
            <p>Discover a wide range of high-quality products at our online TrendHive store.</p>
            <Link to="/shop" className='link'>Shop Now</Link>
          </div>
        </div>

        <div className='Trending'>
          <div className='Container'>
            <div className='Left-Box'>
              <div className='Header'>
                <div className='Heading'>
                  <h2>Trending Products</h2>
                  <div><Trending/></div>
                </div>
                
              </div>
              
            </div>
            <div className='Right-Box'></div>
          </div>
        </div>
      </div>
      <MidContent/>
      <Trusted/>
    </>
  );
};

export default Home;
