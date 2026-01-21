import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/contextProvider";
import withBookSearch from "./HOCwithSearchBook";
import { API_BASE_URL } from '../apiConfig';

const UpdateBook = ({ initialData }) => {
  const { setState } = useContext(StateContext);
  const [formData, setFormData] = useState({ id: "", author: "", bookname: "", isbn: "" });

  // Sync state whenever the HOC finds a new book
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/books/${formData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Update Successful!");
        setState("HOME");
      } else {
        alert("Failed to save changes.");
      }
    } catch (err) {
      alert("Connection Error");
    }
  };

  if (!initialData) return <p>Please search for a book above to begin editing.</p>;

  return (
    <form onSubmit={handleUpdateSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input name="author" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value})} />
      <input name="bookname" value={formData.bookname} onChange={(e) => setFormData({...formData, bookname: e.target.value})} />
      <input name="isbn" value={formData.isbn} onChange={(e) => setFormData({...formData, isbn: e.target.value})} />
      <button type="submit" style={{ background: "blue", color: "white" }}>Save Changes</button>
    </form>
  );
};

export default withBookSearch(UpdateBook);