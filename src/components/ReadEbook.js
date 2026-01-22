import React, { useState, useContext } from 'react';
import { StateContext } from "../context/contextProvider";

const Read_eBook = () => {
  const { setState } = useContext(StateContext);

  const [allBooks] = useState([
     { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", desc: "A story of newly created wealth and lost romantic relationships.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=50.epub", color: "#1a472a" },
    { id: 2, title: "The Call Of The Wild", author: "Jack London", desc: "A dog unearths its wolf instincts in the frozen Canadian Klondike.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=51.epub", color: "#5d4037" },
    { id: 3, title: "Romeo And Juliet", author: "William Shakespeare", desc: "The tragic tale of archetypal young lovers based on an Italian tale.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=52.epub", color: "#b71c1c" },
    { id: 4, title: "Les Miserables", author: "Victor Hugo", desc: "The story of Jean Valjean, an ex-prisoner seeking redemption.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=53.epub", color: "#0d47a1" },
    { id: 5, title: "Sherlock Holmes", author: "Arthur Conan Doyle", desc: "A collection of 12 detective fiction stories starring Sherlock Holmes.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=54.epub", color: "#37474f" },
    { id: 6, title: "Dracula", author: "Bram Stoker", desc: "Jonathan Harker travels to Transylvania to assist a mysterious Count.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=55.epub", color: "#212121" },
    { id: 7, title: "Treasure Island", author: "Robert Louis Stevenson", desc: "A group of pirates hunting for buried treasure on a distant island.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=56.epub", color: "#f57f17" },
    { id: 8, title: "Little Lady Big House", author: "Jack London", desc: "A complex triangle love story written in an autobiographical style.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=57.epub", color: "#4e342e" },
    { id: 9, title: "The Great Gatsby", author: "Francis Scott Fitzgerald", desc: "A story of newly created wealth and lost romantic relationships.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=50.epub" },
    { id: 10, title: "The Call Of The Wild", author: "Jack London", desc: "A dog unearths its wolf instincts in the frozen Canadian Klondike.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=51.epub" },
    { id: 11, title: "Romeo And Juliet", author: "William Shakespeare", desc: "The tragic tale of archetypal young lovers based on an Italian tale.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=52.epub" },
    { id: 12, title: "Les Miserables", author: "Victor Hugo", desc: "The story of Jean Valjean, an ex-prisoner seeking redemption.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=53.epub" },
    { id: 13, title: "Sherlock Holmes", author: "Arthur Conan Doyle", desc: "A collection of 12 detective fiction stories starring Sherlock Holmes.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=54.epub" },
    { id: 14, title: "Dracula", author: "Bram Stoker", desc: "Jonathan Harker travels to Transylvania to assist a mysterious Count.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=55.epub" },
    { id: 15, title: "Treasure Island", author: "Robert Louis Stevenson", desc: "A group of pirates hunting for buried treasure on a distant island.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=56.epub" },
    { id: 16, title: "Little Lady Big House", author: "Jack London", desc: "A complex triangle love story written in an autobiographical style.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=57.epub" },
    { id: 17, title: "Wizard of Oz", author: "Lyman Frank Baum", desc: "A cyclone carries a girl to a magical land of evil and good rulers.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=58.epub" },
    { id: 18, title: "Peter and Wendy", author: "James Mathew Barrie", desc: "A boy who never grows up enjoys his childhood in Neverland.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=59.epub" },
    { id: 19, title: "Anna Karenina", author: "Leo Tolstoy", desc: "A Russian woman mediates family problems while falling into her own.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=60.epub" },
    { id: 20, title: "The Sea Wolf", author: "Jack London", desc: "A man is rescued by a brutal and cynical seal-hunting captain.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=61.epub" },
    { id: 21, title: "Jane Eyre", author: "Charlotte Bronte", desc: "A poor orphan girl's journey from childhood to adult independence.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=62.epub" },
    { id: 22, title: "Huckleberry Finn", author: "Mark Twain", desc: "A boy and a slave fight for survival along the Mississippi River.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=63.epub" },
    { id: 23, title: "Sense & Sensibility", author: "Jane Austen", desc: "The Dashwood sisters navigate life and love after a loss of status.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=64.epub" },
    { id: 24, title: "80 Days Around World", author: "Jules Verne", desc: "Phileas Fogg takes a challenge to circumnavigate the globe in 80 days.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=65.epub" },
    { id: 25, title: "The War of the Worlds", author: "H. G. Wells", desc: "Martians invade Earth, challenging human supremacy over the planet.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=66.epub" },
    { id: 26, title: "A Tale of Two Cities", author: "Charles Dickens", desc: "A theme of revolutionaries’ vengeance against the French aristocracy.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=67.epub" },
    { id: 27, title: "Little Women", author: "Louisa May Alcott", desc: "Poverty is no hurdle for happiness in the story of the March sisters.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=68.epub" },
    { id: 28, title: "Memoirs of Sherlock Holmes", author: "Arthur Conan Doyle", desc: "12 detective stories including Silver Blaze and The Yellow Face.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=69.epub" },
    { id: 29, title: "Hamlet", author: "William Shakespeare", desc: "The Prince of Denmark takes revenge against his uncle for his father's murder.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=70.epub" },
    { id: 30, title: "Count of Monte Cristo", author: "Alexandre Dumas", desc: "A man's life changes from peak happiness to rigorous imprisonment.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=71.epub" },
    { id: 31, title: "Wuthering Heights", author: "Emily Bronte", desc: "The dark story of Heathcliff and his ill-treatment at Wuthering Heights.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=72.epub" },
    { id: 32, title: "Emma", author: "Jane Austen", desc: "A wealthy girl misreads her successful matchmaking abilities for friends.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=73.epub" },
    { id: 33, title: "Frankenstein", author: "Mary Shelley", desc: "A student creates a monster from old body parts and lives in fear of it.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=74.epub" },
    { id: 34, title: "The Time Machine", author: "H. G. Wells", desc: "A traveler reaches 800,000 years ahead and encounters the Elois.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=75.epub" },
    { id: 35, title: "Phantom of the Opera", author: "Gaston Leroux", desc: "A musical genius living under the opera house falls for a chorus girl.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=76.epub" },
    { id: 36, title: "Return of Sherlock Holmes", author: "Arthur Conan Doyle", desc: "The revival of the detective character after 'The Great Hiatus'.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=77.epub" },
    { id: 37, title: "The Three Musketeers", author: "Alexandre Dumas", desc: "A romantic historical fiction following d'Artagnan and his companions.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=78.epub" },
    { id: 38, title: "The Son of the Wolf", author: "Jack London", desc: "Jack London's exploration of life and commercial magazine fiction.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=79.epub" },
    { id: 39, title: "Before Adam", author: "Jack London", desc: "Serialized novel exploring early humanoid life and evolution.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=80.epub" },
    { id: 40, title: "Macbeth", author: "William Shakespeare", desc: "A military general's tragic defeat driven by impatience and unethical gain.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=81.epub" },
    { id: 41, title: "The Scarlet Plague", author: "Jack London", desc: "A post-apocalyptic fiction about a deadly uncontrollable epidemic.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=82.epub" },
    { id: 42, title: "The Adventures of Tom Sawyer", author: "Mark Twain", desc: "Based on boyhood life along the Mississippi River and a murder mystery.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=83.epub" },
    { id: 43, title: "The Secret Garden", author: "Frances Hodgson Burnett", desc: "A sickly, foul-tempered girl finds growth in a hidden Yorkshire garden.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=84.epub" },
    { id: 44, title: "Hound of the Baskervilles", author: "Arthur Conan Doyle", desc: "Holmes' most terrifying case involving alleged supernatural powers.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=85.epub" },
    { id: 45, title: "A Little Princess", author: "Frances Hodgson Burnett", desc: "A creative girl joins a boarding school and maintains her kind attitude.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=86.epub" },
    { id: 46, title: "The Arabian Nights", author: "Andrew Lang", desc: "A collection of folk stories from the Islamic Golden Age.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=87.epub" },
    { id: 47, title: "A Room with a View", author: "E. M. Forster", desc: "A romantic novel of the Edwardian era set in Italy and England.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=88.epub" },
    { id: 48, title: "South Sea Tales", author: "Jack London", desc: "A collection of short stories set in island communities and ships.", url: "https://www.pdfbooksworld.com/bibi/pre.html?book=89.epub" }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [viewingPdf, setViewingPdf] = useState(null);
  const booksPerPage = 8;
  const totalPages = Math.ceil(allBooks.length / booksPerPage);
  const currentBooks = allBooks.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage);

  if (viewingPdf) {
    return (
      <div style={readerContainer}>
        <div style={readerHeader}>
            <button onClick={() => setViewingPdf(null)} style={backBtn}>← Exit Reader</button>
            <h2 style={readerTitle}>{viewingPdf.title}</h2>
        </div>
        <iframe src={viewingPdf.url} style={iframeStyle} title="Reader" />
      </div>
    );
  }

  return (
    <div style={libraryBackground}>
      <div style={pageContainer}>
        <header style={headerStyle}>
          <button onClick={() => setState("HOME")} style={homeBtn}>🏠 Library Lobby</button>
          <h1 style={mainTitle}>The Grand Archive</h1>
          <div style={divider}></div>
        </header>

        <div style={shelfContainer}>
          {currentBooks.map(book => (
            <div key={book.id} style={bookEntry}>
              <div style={{...bookCover, backgroundColor: book.color || '#8b0000'}}>
                  <span style={coverTitle}>{book.title}</span>
                  <div style={spineHighlight}></div>
              </div>
              <div style={bookDetails}>
                  <h3 style={titleText}>{book.title}</h3>
                  <p style={authorText}>{book.author}</p>
                  <button 
                    onClick={() => setViewingPdf({url: book.url, title: book.title})} 
                    style={actionBtn}
                  >
                    Take from Shelf
                  </button>
              </div>
            </div>
          ))}
        </div>

      <div style={paginationRow}>
  {/* Previous Button: If on page 1, go to totalPages; otherwise, go back 1 */}
  <button 
    onClick={() => {
      setCurrentPage(p => (p === 1 ? totalPages : p - 1));
      window.scrollTo(0, 0);
    }} 
    style={pBtn}
  >
    ← Previous Shelf
  </button>

  <span style={pInfo}>Aisle {currentPage} / {totalPages}</span>

  {/* Next Button: If on totalPages, go back to 1; otherwise, go forward 1 */}
  <button 
    onClick={() => {
      setCurrentPage(p => (p === totalPages ? 1 : p + 1));
      window.scrollTo(0, 0);
    }} 
    style={pBtn}
  >
    Next Shelf →
  </button>
</div>

      </div>
    </div>
  );
};

// --- Library Aesthetic CSS ---
const libraryBackground = {
    background: '#fdfcf0', // Parchment-like background
    minHeight: '100vh',
    paddingBottom: '50px'
};

const pageContainer = { 
    padding: '40px 20px', 
    maxWidth: '1100px', 
    margin: '0 auto', 
    fontFamily: "'Playfair Display', serif" 
};

const headerStyle = { textAlign: 'center', marginBottom: '60px' };
const mainTitle = { fontSize: '3.5rem', color: '#2c1810', marginBottom: '10px' };
const divider = { height: '4px', width: '100px', background: '#8b0000', margin: '0 auto' };

const shelfContainer = { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
    gap: '40px',
    padding: '20px',
    borderBottom: '15px solid #3e2723', // The "Shelf" line
    boxShadow: '0 20px 20px -10px rgba(0,0,0,0.2)'
};

const bookEntry = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
};

const bookCover = {
    width: '160px',
    height: '230px',
    borderRadius: '4px 12px 12px 4px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    marginBottom: '15px'
};

const spineHighlight = {
    position: 'absolute',
    left: '10px',
    top: '0',
    bottom: '0',
    width: '2px',
    background: 'rgba(255,255,255,0.2)',
    boxShadow: '1px 0 3px rgba(0,0,0,0.2)'
};

const coverTitle = {
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
};

const bookDetails = { textAlign: 'center' };
const titleText = { fontSize: '1.1rem', margin: '5px 0', color: '#2c1810' };
const authorText = { fontSize: '0.85rem', color: '#6d4c41', fontStyle: 'italic', marginBottom: '10px' };

const actionBtn = {
    padding: '8px 16px',
    background: '#3e2723',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.8rem',
    textTransform: 'uppercase'
};

// ... Reader and Pagination styles ...
const paginationRow = { display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px', gap: '30px' };
const pBtn = { padding: '10px 20px', background: '#3e2723', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' };
const pInfo = { fontWeight: 'bold', color: '#3e2723' };
const homeBtn = { background: 'none', border: '1px solid #3e2723', padding: '5px 15px', borderRadius: '20px', cursor: 'pointer' };
const readerContainer = { height: '100vh', display: 'flex', flexDirection: 'column', background: '#1a1a1a' };
const readerHeader = { display: 'flex', alignItems: 'center', padding: '10px 20px', background: '#333' };
const readerTitle = { flex: 1, color: '#fff', textAlign: 'center', fontSize: '1.2rem' };
const backBtn = { background: '#8b0000', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' };
const iframeStyle = { flex: 1, border: 'none' };

export default Read_eBook;