import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { getBooks } from '../../client.js';
import { Container} from '@mui/material';

export const SearchBar = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getBooks(); 
  }, []);

  const handleSearch = () => {
    const searchResults = books.filter(book => book.book_title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setBooks(searchResults);
  };

  return (
    <Container>
    <div className="searchouter-container">
      <div className="searchbar-container">
      <input
        name={name}
        className="search-input"
        type="text"
        placeholder="Search for a book"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {books.map((book) => (
          <MyBookCard key={book.book_id} book={book} onRemove={deleteBook} onEdit={updateBookInfo} />
      ))}
      </div>
      <div id="result"></div>
      </div>
      </div>
      </Container>
  );
};
