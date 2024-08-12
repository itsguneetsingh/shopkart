import { useState, useEffect } from 'react';
import './App.css';
import Catalouge from './catalouge';
import Home from './Home';
import Newsletter from './Newsletter';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [chosenCategory, setChosenCategory] = useState('BEAUTY');
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        // console.log(data);
        setProducts(data?.products);
        
        // Extract unique category names
        const uniqueCategories = [...new Set(data.products.map(product => product.category.toUpperCase()))];
        setCategories(uniqueCategories);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Home categories={categories} setChosenCategory={setChosenCategory}/>
      <Catalouge products={products} categories={categories} chosenCategory={chosenCategory} setChosenCategory={setChosenCategory}/>
      <Newsletter />
    </div>
  );
}

export default App;
