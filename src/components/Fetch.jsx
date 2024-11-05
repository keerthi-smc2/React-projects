import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import ProductCard from './main/productTile/ProductCard'; // Assuming you have a ProductCard component

function AxiosExample() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Require the JSON file directly in your React code
        const productsData = require('./products.json');
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-3 mb-4 mt-3">
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AxiosExample;
