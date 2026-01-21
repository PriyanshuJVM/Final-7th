
import React, { useContext,useState, useEffect } from 'react';
import { StateContext } from "../context/contextProvider";
import { API_BASE_URL } from '../apiConfig';

const Database = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setState } = useContext(StateContext);
  // 1. Fetch data from Backend
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

  // 2. Delete function
  const deleteBook = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      await fetch(`${API_BASE_URL}/books/${id}`, { method: 'DELETE' });
      fetchBooks(); // Refresh the list after deletion
    }
  };

  if (loading) return <p>Loading library...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setState("HOME")}>Go to Home</button>
      <h2>My Book Library</h2>
      {books.length === 0 ? (
        <p>No books found. Add some!</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4' }}>
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
                  <button 
                    onClick={() => deleteBook(book.id)}
                    style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                  >
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