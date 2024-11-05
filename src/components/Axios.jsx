import axios from 'axios';
import ProductCard from "./main/productTile/ProductCard";
import React, { useState, useEffect } from 'react';

function Axios() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('products.json');
                // console.log("Response data:", response.data);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                // Handle error by setting products to an empty array or showing an error message
                setProducts([]);
            }
        };

        fetchData();
    }, []); // Add an empty dependency array to run the effect only once

    // Check if products is an array before mapping over it
    if (!Array.isArray(products)) {
        return <div>Error loading products</div>;
    }

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

export default Axios;
