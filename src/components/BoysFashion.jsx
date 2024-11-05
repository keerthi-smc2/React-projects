import React, { useEffect, useState } from "react";
import ProductCard from "./main/productTile/ProductCard";
import axios from "axios";

// export const InfoContext = React.createContext();

function GirlsFashion() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        const filteredData = res.data.filter(
          (item) => item.catergory === "Boys"
        );
        setProducts(filteredData);
        console.log(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  function handleQuantity(productId, qty) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: qty,
              totalprice:
                "$" + qty * parseFloat(product.price.replace("$", "")),
            }
          : product
      )
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4 mt-3">
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
                updateQuantity={(newqty) => handleQuantity(product.id, newqty)}
              />
            </div>
          ))}
        </div>
        <div>{JSON.stringify(products)}</div>
      </div>
      {/* </InfoContext.Provider> */}
    </>
  );
}

export default GirlsFashion;

// import React from 'react'
// import { useSearchParams, useParams } from 'react-router-dom'

// function BoysFashion() {
//   const [searchParams, setSearchParams] = useSearchParams()
//   const showActiveusers = searchParams.get('filter') === 'active'
//   const { catId } = useParams()
//   return (
//     <>
//     {/* <Header /> */}
//     <div>BoysFashion</div>
//     <button onClick={() => setSearchParams({ filter: 'active'}) }>
//       Active Users
//     </button>
//     <button onClick={() => setSearchParams() }>
//       Reset
//     </button>

//       <p>catId: {catId}</p>

//     {/* <Footer /> */}
//     {
//       showActiveusers ? (<h2> Showing Active Users</h2>) :(<h2>Showing All users</h2>)
//     }
//     </>

//   )
// }

// export default BoysFashion
