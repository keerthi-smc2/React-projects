
import React, { useState, useEffect } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log("before useeffect return",count);
        // Cleanup function
        return () => {
            console.log("in useeffect return()",count);
        };
    },[count]); 

    return (
        <div className="text-center">
             <h1>useEffect</h1>
            {console.log("main return1",count)}
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {console.log("main return2", count)}
        </div>
    );
}
export default UseEffect;



// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function UseEffect() {
//   const [userList, setUserList] = useState([]);
//   console.log("state")

//   useEffect(() => {
//     axios.get('https://reqres.in/api/users').then(res => {
//         console.log("effect")
//       setUserList(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="container-fluid p-3">
//       <h5 className="d-inline-block">GET request using axios with React Hooks - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h5>
//       <table class="table table-sm mt-3">
//         <thead class="thead-dark">
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Email</th>
//           <th>Avatar</th>
//         </thead>
//         <tbody>
//           {userList.map(x => <tr>
//             <td>{x.first_name}</td>
//             <td>{x.last_name}</td>
//             <td>{x.email}</td>
//             <td><img src={x.avatar} width="50" height="50" /></td>
//           </tr>)}
//           {userList.length == 0 && <tr>
//             <td className="text-center" colSpan="4">
//               <b>No data found to display.</b>
//             </td>
//           </tr>}
//         </tbody>
//       </table>

//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// // import { useState, useEffect } from 'react';
// import Button from "react-bootstrap/esm/Button";

// function UseEffect() {
//   const [count, setCount] = useState(0);
//   console.log("after statedeclaration", count);
//   function Increment() {
//     setCount((prvCount) => prvCount + 1);
//     console.log("inside incremethod", count);
//   }
//   console.log("after incremethod", count);

//   useEffect(() => {
//     console.log("Mounting Phase");
//   }, []);

//   // useEffect(() => {
//   //     console.log('Updating Phase')
//   // },[count]);
//   return (
//     <div className="text-center">
//       <h1>useEffect</h1>
//       <Button onClick={() => Increment()} variant="dark">
//         Increment
//       </Button>
//       <h2>{count}</h2>
//       {console.log("inside return", count)}
//     </div>
//   );
//   console.log("after return", count);
// }

// export default UseEffect;




