import { useContext } from "react";
import { StateContext } from "../context/contextProvider";

import Database from "./Database";
export const RemoveBook = () => {
      const { setState } = useContext(StateContext);
      
    
  return (<div>Remove Book Component
   <Database />
     <button onClick={() => setState("HOME")}>Go to Home</button>
     <button onClick={()=>setState("DATABASE")}>Go to Database</button></div>);
};

export default RemoveBook;