import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { getBooks } from '../../client.js';
import { Container, TextField, Button, Autocomplete } from '@mui/material';

export const SearchBar = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(false);

  useEffect(() => {
    const retrieveBookList = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error("Couldn't fetch book list for search bar");
      }
    };
    retrieveBookList();
  }, []);

  const handleSearch = () => {
    const searchResults = books.filter(book => book.book_title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setBooks(searchResults);
    setFileredBooks(true);
  };

  return (
    <Container>
    <div className="outer-container">
        <div className="bar-container">
          <Autocomplete 
            freeSolo
            options={books.map((book) => book.book_title)}
            renderInput={(params) =>
              <TextField
                {...params}
                name={name}
                className="search-input"
                type="text"
                placeholder="Search for a book"
                aria-label="Search bar"
                role="textbox"
                value={searchTerm}
                sx={{width: 200}}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}/>}
      />
          <Button onClick={handleSearch} sx={{ marginLeft: 2, paddingLeft: 2, paddingRight: 2 }}>Search</Button>
        </div>
        {filteredBooks && (
          <div id="result">
            <MyBookList />
            </div>
        )}
      </div>
      </Container>
  );
};
