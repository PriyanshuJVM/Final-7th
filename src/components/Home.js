
import React, { useContext } from "react";
import { StateContext } from "../context/contextProvider";


const Home = () => {
  const { setState } = useContext(StateContext);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to <span>Vook</span></h1>
        <p>Your personal book Management App</p>
      </header>
      
      <div className="button-group">
        <button className="btn btn-add" onClick={() => setState("ADD_BOOK")}>
          <span className="icon">+</span> Add Book
        </button>

        <button className="btn btn-update" onClick={() => setState("UPDATE_BOOK")}>
          <span className="icon">↺</span> Update Book
        </button>

        <button className="btn btn-remove" onClick={() => setState("REMOVE_BOOK")}>
          <span className="icon">×</span> Remove Book
        </button>

        <button className="btn btn-database" onClick={() => setState("DATABASE")}>
          <span className="icon">👁️</span> View Database
        </button>

        <button className="btn btn-read-ebook" onClick={() => setState("READ_EBOOK")}>
          <span className="icon">📚</span> Read e-Book
        </button>    

        <button className="btn btn-wdp-ppt" onClick={() => setState("WDP_PPT_FORMAT_26")}>
          <span className="icon">📊</span> WDP PPT Format 26
        </button>
        
      </div>
    </div>
  );
};

export default Home;