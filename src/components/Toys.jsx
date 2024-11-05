import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import ProductCard from "./main/productTile/ProductCard";
import axios from "axios";
import SoftToys from "./SoftToys";

function Toys() {
  const { category } = useParams()
  // const category1 = category.split('=')[1];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        const filteredData = res.data.filter(
          (item) => item.catergory === "Toys"
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
    {/* <p>{category} {category1}</p> */}
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
      <div>
      {/* {category1 === 'softtoys' ? <SoftToys cat={category1}/> : ''} */}
      </div>
     
    </>
  );
}

export default Toys;
