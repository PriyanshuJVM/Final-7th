import React, { useState } from "react";
import "./App.css";
import { StateContext } from "./context/contextProvider";
import Home from "./components/Home";
import AddBook from "./crud/Addvook";
import UpdateBook from "./crud/UpdateBook";
import RemoveBook from "./crud/RemoveBook";
import Database from "./crud/Database";

function App() {
  const [state, setState] = useState("HOME");

  return (
    <StateContext.Provider value={{ state, setState }}>
      <main>
        {state === "HOME" && <Home />}
        {state === "ADD_BOOK" && <AddBook />}
        {state === "UPDATE_BOOK" && <UpdateBook />}
        {state === "REMOVE_BOOK" && <RemoveBook />}
        {state === "DATABASE" && <Database />}
      </main>
    </StateContext.Provider>
  );
}

export default App;
