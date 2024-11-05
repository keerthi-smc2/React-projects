import React, { useState , useContext} from 'react';
import Button from 'react-bootstrap/Button';
// import {InfoContext } from '../Main';
import { CartContext } from '../../../pages/Firstpage';


function QuantityButton(prop) {
  // const {data, setData} = useContext(InfoContext);
  const {cartqty, setCartqty} = useContext(CartContext);
  // setData('1234')
  // console.log("3",data)
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    let qty = quantity + 1;
    setQuantity(prevQuantity => prevQuantity + 1);
    prop.updateQuantity(qty);
    setCartqty(prevcartqty => prevcartqty + 1);
    console.log("quanbutton+", cartqty)
  };

  const decrementQuantity = () => {
    let qty = quantity - 1;
    // if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      prop.updateQuantity(qty);
      setCartqty(prevcartqty => prevcartqty - 1);
      console.log("quanbutton-", cartqty)
    // }
  };

  return (
    <div>
      <Button variant="light" onClick={decrementQuantity}>-</Button>
      <span>{quantity}</span>
      <Button variant="light" onClick={incrementQuantity}>+</Button>
    </div>
  );
}

export default QuantityButton;
