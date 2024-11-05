import ProductCard from "./productTile/ProductCard";
import axios from 'axios';
import React, { useState, useEffect, useContext } from "react";

// export const InfoContext = React.createContext();

function Main() {
  const [products, setProducts] = useState([]);
  // const [data, setData] = useState('kutti');
  
  // console.log("for state",products)

  useEffect(() => {
    axios.get('/products.json').then(res => {
      setProducts(res.data);
      console.log("axios",res)
    });
  }, []);

  function handleQuantity (productId, qty) {
    // console.log(productId, qty, "handleqty")
    // console.log(prevProducts)
    setProducts(prevProducts => prevProducts.map(product => product.id === productId ? {...product, quantity: qty, totalprice: "$" + (qty * parseFloat(product.price.replace("$", "")))} : product))
  }

  // function handleInfo(data) {
  //   setData(data);
  // }


// Make a GET request to fetch data from the JSON file
  // useEffect(() => {
  //   data();
  // //   axios.get('../assets/products.json')
  // // .then(response => {
  // //   // Access the data from the response
  // //   // const products = response.data;
  // //   console.log(response.data);
  // //   setProducts(response.data);
    
  // }, []);
  // .catch(error => {
  //   console.error('Error fetching data:', error);
  // });
 
// console.log("main",{data})
  return (
    // <InfoContext.Provider value={{data, setData}}>
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
              // updateInfo={(data) => handleInfo(data)}
              // prods= {data}
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
    // </InfoContext.Provider>
  );
  
}

export default Main;
