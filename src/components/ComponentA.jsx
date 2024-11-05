import React, { useContext, useState } from "react";
import ComponentB from "./ComponentB";
import { SiteContext } from "../pages/Hooks";

function ComponentA() {
//   const user = useContext(UserContext);
  const {data, setData} = useContext('keerthi');
  return (
    <div className="text-center">
      <h1>Use Context</h1>
      {data}
    </div>
  );
}

export default ComponentA;
