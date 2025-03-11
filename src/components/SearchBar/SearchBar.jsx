import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Autocomplete, Box } from '@mui/material';
import { getBooks } from '../../client.js';
import { MyBookList } from './../../components/MyBookList/MyBookList.jsx';

export const SearchBar = ({onSearch}) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(false);
  const [searchResult, setSearchResult] = useState([]);



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
    if (onSearch) {
    onSearch(result);
  }};

  return (
    <Container>
    <div className="outer-container">
    <div className="bar-container">
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
          <Box>
            <MyBookList filteredBooks={filteredBooks} searchResult={searchResult} />
          </Box>
            </>            
      ) : (
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Button onClick={handleSearch} sx={{ marginLeft: 2, paddingLeft: 2, paddingRight: 2 }}>SELECT</Button>
             <div data-testid="result" id="result"></div>
          </Box>
            )} 
            </Box>
        </div>
        </div>
      </Container>
  );
};
