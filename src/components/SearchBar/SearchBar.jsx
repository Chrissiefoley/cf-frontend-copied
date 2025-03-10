import './../../index.css';
import React, { useState, useEffect } from 'react';
import { getBooks } from '../../client.js';
import { Container, TextField, Button, Autocomplete, Box } from '@mui/material';
import { MyBookList } from './../../components/MyBookList/MyBookList.jsx';

export const SearchBar = () => {
  const [searchResult, setSearchResult] = useState([]);
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
    const result = books.filter(book => book.book_title.toLowerCase() === (searchTerm.toLowerCase()))
    setSearchResult(result);
    setFilteredBooks(true);
  };

  const handleClose = () => {
    setSearchResult([]);
    setFilteredBooks(false);
  }

  return (
    <Container>
    <Box sx={{ paddingTop: 2, paddingBottom: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Autocomplete 
            freeSolo
            options={books.map((book) => book.book_title)}
            onInputChange={(event, value) => {
              setSearchTerm(value);
            }}
            renderInput={(params) =>
              <TextField
                {...params}
                className="search-input"
                type="text"
                placeholder="Search for a book"
                aria-label="Search bar"
                role="textbox"
                sx={{width: 200}}
                />}
      />
        {filteredBooks ? (
          <>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Button onClick={handleClose} sx={{ marginLeft: 2, paddingLeft: 2, paddingRight: 2, color: 'red'}}>GO BACK</Button>
            <div id="result"></div>
            </Box>
          <Box>
            <MyBookList filteredBooks={filteredBooks} searchResult={searchResult} />
              </Box>
            </>            
      ) : (
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Button onClick={handleSearch} sx={{ marginLeft: 2, paddingLeft: 2, paddingRight: 2 }}>SEARCH</Button>
                <div id="result"></div>
                </Box>
        )}
 </Box>
      </Container>
  );
};
