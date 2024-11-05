import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function UseState() {
  const [quantity, setQuantity] = useState(1);
  const [text, settext] = useState("");
  console.log("after", quantity);
  const incrementQuantity = () => {
    console.log("before increment-", quantity);
    setQuantity((prevQuantity) => prevQuantity + 1);
    console.log("after method call", quantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  console.log("xyz", quantity);

  const handleInput = (e) => {
    settext(e.target.value);
  };
  return (
    <div className="text-center">
      <h1>React Hooks</h1>
      <h1>use State</h1>
      <Button variant="light" onClick={decrementQuantity}>
        -
      </Button>
      <span>{quantity}</span>
      {console.log("inside render", quantity)}
      <Button variant="light" onClick={incrementQuantity}>
        +
      </Button>
      {console.log("insidevvvv render", quantity)}
      <div>
        <input type="text" value={text} onChange={handleInput}></input>
        <span>{text}</span>
      </div>
    </div>
  );
  console.log("last", quantity);
}

export default UseState;
