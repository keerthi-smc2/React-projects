import React from 'react';
import ReactDOM from 'react-dom/client';
import Firstpage from './pages/Firstpage.jsx';
// import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from './pages/Hooks.jsx';
// import store from './redux/store.js';
// import { Provider } from 'react-redux';
import Qty from '../src/components/main/productTile/Qty.jsx';
// import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Nopage from './components/Nopage.js';
import BoysFashion from './components/BoysFashion.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <BrowserRouter> */}
     {/* <Routes> 
       <Route index element={<Home />} />
       <Route path='/home' element={<Home />} />
       <Route path='/boysfashion' element={<BoysFashion />} />  */}
      
      {/* <Route path='*' element={<Nopage />} />  */}
    <Firstpage />
    {/* <Qty /> */}
   {/* <Hooks /> */}
   {/* </Routes> */}
   {/* </BrowserRouter> */}
  </>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <Hooks />
//   </Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

