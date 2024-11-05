import React, { useState }from "react";
import UseState from "../components/UseState";
// import UseEffect from "../components/UseEffect";
// import UseContext from "../components/UseContext";
// import UseReducer from "../components/UseReducer";


// export const UserContext = React.createContext();
export  const SiteContext = React.createContext();
export const UserContext = React.createContext();

function Hooks() {
    const [data, setData] = useState('test')
  return (
    <div>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
       {/* <UserContext.Provider value={"keerthi"}> */}
        <SiteContext.Provider value={[data, setData]}>
       {/* <UseContext /> */}
       </SiteContext.Provider>
      {/* </UserContext.Provider>  */}
      {/* <UseReducer /> */}
    </div>
  );
}

export default Hooks
