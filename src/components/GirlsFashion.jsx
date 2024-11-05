import React, { useEffect, useState } from 'react';
import ProductCard from "./main/productTile/ProductCard";
import { useParams } from 'react-router-dom'
import axios from 'axios';

// export const InfoContext = React.createContext();

function GirlsFashion() {
  const [products, setProducts] = useState([]);
  // const [data, setData] = useState('kutti');
  const { catId } = useParams()
 

  useEffect(() => {
    axios.get('/products.json')
      .then(res => {
        const filteredData = res.data.filter(item => item.catergory === "Girls");
        setProducts(filteredData);
        console.log(filteredData);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  
  

  function handleQuantity (productId, qty) {
    setProducts(prevProducts => prevProducts.map(product => product.id === productId ? {...product, quantity: qty, totalprice: "$" + (qty * parseFloat(product.price.replace("$", "")))} : product))
  }


  return (
    <>
      <h1>Girls Fashion</h1>
      <p>catId: {catId}</p>
      {/* <InfoContext.Provider value={{data, setData}}> */}
    <div className="container">
      <div className="row">
       {/* Assuming "Hi" is intentional */}
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4 mt-3">
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              updateQuantity={(newqty) => handleQuantity(product.id,newqty)}
            />
             {/* {console.log(data)} */}
          </div>
        ))
        }
      </div>
      <div>
        {JSON.stringify(products)}
      </div>
    </div>
    {/* </InfoContext.Provider> */}
    </>
  );
}

export default GirlsFashion;
