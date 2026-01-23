

import React, { useContext, useState, useEffect } from 'react';
import { StateContext } from "../context/contextProvider";
import { API_BASE_URL } from '../apiConfig';

const Database = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setState } = useContext(StateContext);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/books`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBook = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      await fetch(`${API_BASE_URL}/books/${id}`, { method: 'DELETE' });
      fetchBooks(); 
    }
  };

  if (loading) return <p className="loading-text">Loading library...</p>;

  return (
    <div className="database-wrapper">
      <button className="btn-nav" onClick={() => setState("HOME")}>Go to Home</button>
      <h2>My Book Library</h2>
      {books.length === 0 ? (
        <p>No books found. Add some!</p>
      ) : (
        <table className="vook-table">
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.bookname}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <button className="btn-delete" onClick={() => deleteBook(book.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Database;