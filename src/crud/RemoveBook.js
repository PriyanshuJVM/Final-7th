

import React, { useContext } from "react";
import { StateContext } from "../context/contextProvider";
import Database from "./Database";

const RemoveBook = () => {
  const { setState } = useContext(StateContext);
      
  return (
    <div className="remove-wrapper">
      <h2>Remove Book Component</h2>
      <Database />
      <div className="button-group">
        <button className="btn-nav" onClick={() => setState("HOME")}>Go to Home</button>
        <button className="btn-nav" onClick={() => setState("DATABASE")}>Go to Database</button>
      </div>
    </div>
  );
};

export default RemoveBook;