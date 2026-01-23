import React, { useState } from "react";
import "./App.css";
import { StateContext } from "./context/contextProvider";
import Home from "./components/Home";
import AddBook from "./crud/Addvook";
import UpdateBook from "./crud/UpdateBook";
import RemoveBook from "./crud/RemoveBook";
import Database from "./crud/Database";
import ReadeBook from "./components/ReadEbook";


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
        {state === "READ_EBOOK" && <ReadeBook />}
       {state === "WDP_PPT_FORMAT_26" && (
  <div className="wdp-ppt-container" style={{ textAlign: 'center', padding: '20px' }}>
    <h2>WDP PPT Format 26 Component</h2>
    
    {/* This button opens your external PPT website in a new tab */}
    <button 
      className="btn-nav" 
      onClick={() => window.open("https://pptbook.netlify.app/", "_blank")}
      style={{ padding: '10px 20px', cursor: 'pointer' }}
    >
      Open Presentation Website
    </button>

    <button className="btn-back" onClick={() => setState("HOME")}>
      Back to Home
    </button>
  </div>
)}
      </main>
    </StateContext.Provider>
  );
}

export default App;
