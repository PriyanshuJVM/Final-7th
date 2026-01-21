import React, { useContext } from "react";
import { StateContext } from "../context/contextProvider";

const CrudHome = () => {
  const { setState } = useContext(StateContext);

  return (
    <div>
      <h1>CRUD Home Page</h1>
      <button onClick={() => setState("ADD_BOOK")}>Add Book</button>
      <button onClick={() => setState("UPDATE_BOOK")}>Update Book</button>
      <button onClick={() => setState("REMOVE_BOOK")}>Remove Book</button>
      <button onClick={() => setState("DATABASE")}>View Database</button>
      <button onClick={() => setState("HOME")}>Go to Home</button>
    </div>
  );
};

export default CrudHome;
