import { Route, Routes } from "react-router-dom";
import { routerType } from '../types/RouterTypes';
import pagesData from "./PagesData";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
    
  });
  console.log(pageRoutes)

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;