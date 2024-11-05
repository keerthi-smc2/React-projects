import React , {useState, useEffect}from 'react'

function ComponentC() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(count === 5) {
            throw new Error('')
        }
    },[count])
  return (
    <div>
        <h1>ComponentC: {count}</h1>
        <button onClick={() => setCount(count + 1)}> ComponentC Increment</button>
    </div>
  )
}

export default ComponentC