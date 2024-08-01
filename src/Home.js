import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div>
      <div className='header'>
        <div className='left-header'>
            <img src = "Truck.svg" style={{marginRight:'5px'}}/>
            <span className='left-text'>Free Delivery</span>
            <span className='left-text'>|</span>
            <span className='left-text'>Return Policy</span>
        </div>
        <div className='right-header'>
            <span className='right-text' style={{marginRight:'10px'}}>Login</span>
            <span className='right-text'>Follow US</span>
            <img src = "FB.svg" className='socials'/>
            <img src = "IN.svg" className='socials'/>
            <img src = "TW.svg" className='socials'/>
            <img src = "IG.svg" className='socials'/>
        </div>
      </div>
      <div><div className='navbar-top'>
        <span className='navbar-text' style={{fontSize:'2em', fontFamily:'poppins', fontWeight:'200'}}>ShopKart</span>
        <div style={{display:'flex', width:'max-content'}}>
            <span className='navbar-text'>WISHLIST(0)</span>
            <span className='navbar-text'>BAG(0)</span>
        </div>
      </div>
      <div className='navbar-bottom'>
      <span className='navbar-bottom-text'>HOME</span>
      <span className='navbar-bottom-text'>ABOUT</span>
      <span className='navbar-bottom-text'>OUR PRODUCTS</span>
      <span className='navbar-bottom-text'>CONTACT US</span>
        </div>
      </div>
      <div id='body'>
        <span className='navbar-bottom-text'>Fresh</span>
        <span className='navbar-bottom-text'>2022</span>
        <span className='navbar-bottom-text'>Look</span>
        <img id='star' src=''/>
        <img id='model' src=''/>
        <div id='rectangle'></div>
      </div>
    </div>
  )
}

export default Home;