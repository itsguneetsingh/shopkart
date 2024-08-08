import React, { useState, useEffect } from 'react';
import './home.css';

const Home = ({categories}) => {
  const [showDropDown, setShowDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='background'>
      <div className='header'>
        <div className='left-header'>
          <img src="Truck.svg" style={{marginRight: '5px'}} alt="Truck" />
          <span className='left-text'>Free Delivery</span>
          <span className='left-text'>|</span>
          <span className='left-text'>Return Policy</span>
        </div>
        <div className='right-header'>
          <span className='right-text' id='login'>Login</span>
          <span className='right-text' id='follow'>Follow US</span>
          <img src="FB.svg" className='socials' alt="Facebook" />
          <img src="IN.svg" className='socials' alt="Instagram" />
          <img src="TW.svg" className='socials' alt="Twitter" />
          <img src="IG.svg" className='socials' alt="Instagram" />
        </div>
      </div>
      {windowWidth > 750 ? (
        <div>
          <div className='navbar-top'>
            <span className='navbar-text' style={{fontSize: '2em', fontFamily: 'Poppins', fontWeight: '200'}}>ShopKart</span>
            <div style={{display: 'flex', width: 'max-content'}}>
              <span className='navbar-text'>WISHLIST(0)</span>
              <span className='navbar-text'>BAG(0)</span>
            </div>
          </div>
          <div id='dividing-line'>
            <hr id='top-line'/>
            <img src='star1.svg' id='top-star'/>
          </div>
          <div className='navbar-bottom'>
            <button className='navbar-bottom-text'>HOME</button>
            <button className='navbar-bottom-text'>ABOUT</button>
            <div id='our-products' onClick={() => setShowDropdown(!showDropDown)}>
              <button className='navbar-bottom-text'>OUR PRODUCTS</button>
              {showDropDown && (
                <div className='products'>
                  {categories.map((category, index) => (
                    <button key={index} className='product-options' onClick={console.log({category}, ' is clicked')}>{category}</button>
                  ))}
                </div>
              )}
            </div>
            <button className='navbar-bottom-text'>CONTACT US</button>
          </div>
        </div>
      ) : (
        <div>
          <div className='navbar-top'>
            <span className='navbar-text' style={{fontSize: '2em', fontFamily: 'Poppins', fontWeight: '200'}}>ShopKart</span>
            <div>
              <button id='menu'><img src='hamburger menu.svg' alt="Menu" /></button>
            </div>
          </div>
          <div id='dividing-line'>
            <hr id='top-line'/>
            <img src='star1.svg' id='top-star'/>
          </div>
        </div>
      )}
      <div id='body'>
        <div className='model-image'>
          <img id='circle-star' src='star3.svg' alt="Circle Star" />
          <img id='model' src='model.png' alt="Model" />
          <div id='rectangle-bottom'></div>
          <div id='rectangle-top'></div>
          <div className='price-tag'>
            <span>OREGON JACKET</span>
            <br/>
            <span>$124</span>
          </div>
        </div>
        <div id='heading-div'>
          <span className='big-heading'>Fresh</span>
          <span className='big-heading' style={{transform: 'translate(50%, 0%)', color: 'transparent', WebkitTextStroke: '2px white', textStroke: '2px white'}}>2022</span>
          <span className='big-heading' style={{marginLeft:'12%'}}>Look</span>
        </div>
        <div className='bottom-star'>
          <hr id='bottom-line'/>
          <img src='star4.svg' id='bottom-star'/>
        </div>
        <div id='see-more'>
          <span style={{color:'white', fontSize:'large'}}>See more</span>
          <img src='arrow.svg' width={10} style={{paddingLeft:'10px'}} alt="Arrow" />
        </div>
      </div>
    </div>
  );
}

export default Home;
