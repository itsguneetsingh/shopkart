import { useState, useEffect } from 'react';
import './App.css';
import Catalouge from './catalouge';
import Home from './Home';
import Newsletter from './Newsletter';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data?.products);
        
        // Extract unique category names
        const uniqueCategories = [...new Set(data.map(product => product.category.name))];
        setCategories(uniqueCategories);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Home categories={categories}/>
      <Catalouge products={products}/>
      <Newsletter />
    </div>
  );
}

export default App;
