import './catalouge.css';
import React, { useRef, useEffect, useState } from 'react';
import './ProductListing.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Catalouge = ({products}) => {

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
    
    const sliderRef = useRef(null);

    const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: windowWidth > 750 ? 3.5 : 1,
    slidesToScroll: 1,
    lazyload: true,
    };

    return (
        <div id='catalouge'>
            <div id='heading-container'>
                <h2 id='heading-text'>New products</h2>
                <div id='buttons'>
                    <button onClick={() => sliderRef?.current?.slickPrev()} className='arrows'><img src='prev-arrow.svg'/></button>
                    <button onClick={() => sliderRef?.current?.slickNext()} className='arrows'><img src='next-arrow.svg'/></button>
                </div>
            </div>
            <div id='highlighter-line'>
                <img src='star2.svg' alt='star' />
                <hr id='line' />
            </div>

            <div id='products'>
                <div id='types'>
                    <span className='types'>Apparel</span>
                    <span className='types'>Acessories</span>
                    <span className='types'>Best sellers</span>
                    <span className='types'>50% off</span>
                </div>
                <div id='slider-div'>
                    
                    <Slider ref={sliderRef} {...settings}>
                    {products.map((product) => (
                        <div className='product-card' key={product.id}>
                            <div className='images'>
                                <img src={product.images[0]} width={310} height={322} alt={product.title} id='product-image' />
                                <img src='productArrow.svg' className='arrow' alt='arrow' />
                            </div>
                            <div id='product-details'>
                                <span className='heading'>{product.title.toUpperCase()}</span>
                                <span className='description'>{product.description}</span>
                                <span className='heading'>${product.price}</span>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Catalouge;
