import React from 'react';
import { routerType } from '../types/RouterTypes';
import {Navigate } from "react-router-dom";
import Nopage from "../components/Nopage";
import Footer from "../components/Footer";
import GirlsFashion from '../components/GirlsFashion';
import BoysFashion from '../components/BoysFashion';
import Main from '../components/main/Main';
import Toys from '../components/Toys';
import SoftToys from '../components/SoftToys';
// import About from '../components/About';
const LazyAbout = React.lazy(() => import('../components/About'))

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Navigate to ="/home"/>,
    title: "main"
  },
  {
    path: "home",
    element: <Main />,
    title: "main"
  },
  {
    path: "home/girlsFashion",
    element: <GirlsFashion />,
    title: "girlsFashion"
  },
  {
    path: "home/boysFashion",
    element: <BoysFashion />,
    title: "boysFashion"
  },
  {
    path: "home/Toys?category=SoftToys",
    element: <SoftToys />,
    title: "softtoys"
  },
  {
    path: "home/Toys",
    element: <Toys/>,
    title: "toys"
  },
  {
    path: "home/Toys/:(category)?/:category",
    element: <Toys />,
    title: "toys"
  },
  {
    path: "home/about",
    element: (
         <React.Suspense fallback='Loading...'>
            <LazyAbout />
          </React.Suspense>),
    title: "about"
  },
  {
    path: "*",
    element: <Nopage />,
    title: "nopage"
  }
];

export default pagesData;