import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Main from "../components/main/Main";
import GirlsFashion from "../components/GirlsFashion";
import BoysFashion from "../components/BoysFashion";
import Nopage from "../components/Nopage";
import Login from "../components/header/Login";
import CatId from "../components/CatId";
import Toys from "../components/Toys";
import Router12 from "./Router";
import UseEffect from "../components/UseEffect";
import Form1 from "../components/form/Form1";
import SoftToys from "../components/SoftToys";
import AutoSearch from "../components/AutoSearch";
import ClickCounter from "../components/renderprops/ClickCounter";
import HoverCounter from "../components/renderprops/HoverCounter";
import User from "../components/renderprops/User";
import Counter from "../components/renderprops/Counter";
import ComponentC from "../components/errorboundary/ComponentC";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";
import UseRef from "../components/hooks/UseRef";
import HookTimer from '../components/hooks/HookTimer';



export const CartContext = React.createContext();

const Firstpage = () => {
  const [cartqty, setCartqty] = useState(0);

  // return (
  // <Router>
  //   <CartContext.Provider value={{ cartqty, setCartqty }}>
  //     <Header />
  //     <Routes>
  //       <Route path="/" element={<Navigate to="/home" />} />
  //       <Route path="/home" element={<Main />} />
  //       {/* <Route path="/home" element={<Main />}>
  //         <Route path="GirlsFashion" element={<GirlsFashion />} />
  //         <Route path="BoysFashion" element={<BoysFashion />} />
  //       </Route> */}
  //       <Route path="home/GirlsFashion" element={<GirlsFashion />} />

  //       {/* <Route path="home/GirlsFashion/:catId" element={<CatId />} /> */}
  //       <Route path="home/BoysFashion/*" element={<BoysFashion />}>
  //         <Route path=":catId" element={<CatId />} />
  //       </Route>
  //       <Route path="home/Toys" element={<Toys />} />
  //       <Route path="/Login" element={<Login />} />
  //       <Route path="*" element={<Nopage />} />
  //     </Routes>
  //     <Footer />
  //   </CartContext.Provider>
  // </Router>
  // );

  return (
    <Router>
      {/* <CartContext.Provider value={{ cartqty, setCartqty }}>
        <Header />
        <Router12 /> */}
        {/* <Form1 /> */}
        {/* <UseEffect /> */}
        {/* <SoftToys /> */}
        {/* <ClickCounter /> */}
        {/* <HoverCounter /> */}
        {/* <User /> */}
        {/* <User name="Vishwas"/> */}
        {/* <User name= {() => 'Vishwas'} /> */}
        {/* <User name={(isLoggedIn) => isLoggedIn ? 'Vishwas' : 'Guest'} /> */}
        {/* <User render={(isLoggedIn) => isLoggedIn ? 'Vishwas' : 'Guest'} /> */}

        {/* <Counter render={(count, incrementCount) => (
          <ClickCounter count ={count} incrementCount= {incrementCount} />
        )}/>
        
        <Counter render={(count, incrementCount) => (
          <HoverCounter count ={count} incrementCount= {incrementCount} />
        )}/> */}

        {/* <Counter> 
          {(count, incrementCount) => (
          <ClickCounter count ={count} incrementCount= {incrementCount} />
        )}
        </Counter>

        <Counter> {(count, incrementCount) => (
          <HoverCounter count ={count} incrementCount= {incrementCount} />
        )}
        </Counter> */}

        <ErrorBoundary>
          <ComponentC />
        </ErrorBoundary>
         <UseRef/>
         <HookTimer/>

        {/* <Footer />

      
      </CartContext.Provider> */}
    </Router>
  );

// return (
//   <AutoSearch />
// );

};


export default Firstpage;
