import React, { useState, useEffect, useRef } from 'react';
import './ProductListing.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductListing = () => {

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      style={{
        ...props.style,
        backgroundImage: `url(/prev-arrow.svg)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        border: 'none',
        width: '50px',  // Adjust size as needed
        height: '50px', // Adjust size as needed
        cursor: 'pointer',
        zIndex: 2,
      }}
    />
  );
  
  const CustomNextArrow = (props) => (
    <button
      {...props}
      style={{
        ...props.style,
        backgroundImage: `url(/next-arrow.svg)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        border: 'none',
        width: '30px',  // Adjust size as needed
        height: '30px', // Adjust size as needed
        cursor: 'pointer',
        zIndex: 2,
      }}
    />
  );

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: false,  // Hide default arrows
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Slider ref={sliderRef} {...settings}>
      {products.map((product) => (
        <div className='product-card' key={product.id}>
          <div className='images'>
            <img src={product.images[0]} height={322} width={310} alt='product' />
            <img src='productArrow.svg' className='arrow' alt='arrow' />
          </div>
          <span className='heading'>{product.title}</span>
          <span className='description'>{product.description}</span>
          <span className='heading'>${product.price}</span>
        </div>
      ))}
    </Slider>
  );
};

export default ProductListing;
