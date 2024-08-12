import './catalouge.css';
import React, { useRef, useEffect, useState } from 'react';
import './ProductListing.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Catalouge = ({ products, categories, chosenCategory, setChosenCategory }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Filter products based on chosen category
const filteredProducts = chosenCategory
    ? products.filter(product => {
        console.log(`Filtering: product category - ${product.category}, chosen category - ${chosenCategory}`);
        return product.category.toLowerCase() === chosenCategory.toLowerCase();
    })
    : products;

    console.log(`Filtered Products Length: ${filteredProducts.length}`);

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
                    <button onClick={() => sliderRef?.current?.slickPrev()} className='arrows'>
                        <img src='prev-arrow.svg' alt="Previous" />
                    </button>
                    <button onClick={() => sliderRef?.current?.slickNext()} className='arrows'>
                        <img src='next-arrow.svg' alt="Next" />
                    </button>
                </div>
            </div>
            <div id='highlighter-line'>
                <img src='star2.svg' alt='star' />
                <hr id='line' />
            </div>

            <div className='products'></div>

            <div id='products'>
                <div id='types'>
                    {categories.map((category, index) => (
                        <span key={index} className='types' onClick={() => {
                            console.log(`Category clicked: ${category}`);
                            setChosenCategory(category);
                        }}>
                            {category}
                        </span>
                    ))}
                </div>
                <div id='slider-div'>
                    <Slider ref={sliderRef} {...settings}>
                        {filteredProducts.map((product) => (
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
