import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../pages/Firstpage";
function Cart() {
  const { cartqty } = useContext(CartContext);
  return (
    <>
      <div className="m-2">
        <span role="img" aria-label="cart">
          🛒
        </span>
        {cartqty}
        {console.log("cart1", cartqty)}
      </div>
    </>
  );
}

export default Cart;
