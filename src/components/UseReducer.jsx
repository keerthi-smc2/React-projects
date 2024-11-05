import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0
}
// console.log('before switch ()', count)
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1}
    case "decrement":
      return {firstCounter: state.firstCounter - 1}
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
//   console.log('inside ()', count) 1st
  return (
    <div className="text-center">
      <h1>Use Reducer</h1>
      <div> Count : {count}</div>
      <button onClick={() => dispatch({type : "increment"})}>Increment</button>
      {/* {console.log('afterincrement ()', count)} 2nd */}
      <button onClick={() => dispatch({type :"decrement"})}>Decrement</button>
      {/* {console.log('afterdecrement ()', count)} 3rd */}

      <button onClick={() => dispatch({type :"reset"})}>Reset</button>
      {/* {console.log('reset ()', count)} 4th */}

    </div>
  );
}

export default UseReducer;
