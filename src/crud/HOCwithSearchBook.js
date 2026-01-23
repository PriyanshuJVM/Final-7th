

import React, { useState, useContext } from 'react';
import { API_BASE_URL } from '../apiConfig';
import { StateContext } from "../context/contextProvider";

const withBookSearch = (WrappedComponent) => {
  return (props) => {
    const [searchIsbn, setSearchIsbn] = useState("");
    const [foundBook, setFoundBook] = useState(null);
    const { setState } = useContext(StateContext);

    const handleSearch = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/books`);
        const books = await res.json();
        const book = books.find(b => b.isbn === searchIsbn);
        
        if (book) {
          setFoundBook(book);
        } else {
          alert("ISBN not found");
          setFoundBook(null);
        }
      } catch (err) {
        alert("Server Error");
      }
    };

    return (
      <div className="hoc-container">
        <button className="btn-nav" onClick={() => setState("HOME")}>Go to Home</button>
        <h3>HOC Search Layer</h3>
        <div className="search-group">
          <input 
            placeholder="Search ISBN..." 
            value={searchIsbn} 
            onChange={(e) => setSearchIsbn(e.target.value)} 
          />
          <button onClick={handleSearch} className="btn-search">Find Book</button>
        </div>
        <hr />
        <WrappedComponent {...props} initialData={foundBook} />
      </div>
    );
  };
};

export default withBookSearch;