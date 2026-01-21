
import React, { useState, useContext } from "react";
import { StateContext } from "../context/contextProvider";
import { API_BASE_URL } from '../apiConfig';

// Use it in your fetch:
//const response = await fetch(`${API_BASE_URL}/update-json`, { ... });

const AddBook = () => {
  const { setState } = useContext(StateContext);
  const [formData, setFormData] = useState({ author: '', bookname: '', isbn: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookWithId = { ...formData, id: Date.now().toString() };

    try {
      const response = await fetch(`${API_BASE_URL}/update-json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookWithId),
      });

      if (response.ok) {
        alert("Book Added!");
        setFormData({ author: '', bookname: '', isbn: '' });
      }
    } catch (error) { alert("Server connection failed"); }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setState("HOME")}>Go Home</button>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "250px", marginTop: "10px" }}>
        <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
        <input name="bookname" placeholder="Book Name" value={formData.bookname} onChange={handleChange} required />
        <input name="isbn" placeholder="ISBN" value={formData.isbn} onChange={handleChange} required />
        <button type="submit">Save to JSON</button>
      </form>
    </div>
  );
};
export default AddBook;