import './../../index.css';
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Fab, Box, FormControl, InputLabel, Select, MenuItem, Link, Button } from '@mui/material';
import { getBooks, removeBook, updateBook } from  '../../client.js';
import { SearchBar } from './../../components/SearchBar/SearchBar.jsx';
import { MyBookCard } from './../../components/MyBookCard/MyBookCard.jsx';
import { BookCount } from './../../components/BookCount/BookCount.jsx';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { Sorting } from './../../components/Sorting/Sorting.jsx';

export const MyBookList = ({ orderBy, sortBy, filteredBooks, searchResult, onClearFilter }) => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const display = filteredBooks && searchResult ? searchResult : books;
  
  const retrieveBookList = async () => {
      try {
        const data = await getBooks();
        console.log('data:', data);
        setBooks(data);
      } catch (error) {
        console.error("Couldn't fetch book list");
      }
    };

  useEffect(() => {
        retrieveBookList();
  }, []);

  const deleteBook = async (book_id) => {
    try {
      await removeBook(book_id);
      setBooks((prevBooks) => prevBooks.filter(book => book.book_id !== book_id));
      console.log("Deleted book successfully")
    } catch (error) {
      console.error("Not able to delete book", error);
    }
  };

  const updateBookInfo = async (updatedBook) => {
    try {
      await updateBook(updatedBook);
      setBooks((prevBooks) => prevBooks.map((book) => book.book_id === updatedBook.book_id ? updatedBook : book));
    } catch (error) {
      console.error("Not able to update book", error);
    }
  };

  const handleClick = () => {
    navigate(`/new_book`);
  };

    const handleClose = () => {
      retrieveBookList();
      if (onClearFilter) {
        onClearFilter();
      }
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ fontSize: '28px', fontWeight: 'bold', color: '#3C1362', textAlign: 'center', paddingTop: '20px' }}>{filteredBooks ? "Search Result" : "My Book List"}</Typography>
        <div className="bar-container">
        <Sorting books={books}/>
      </div>
      <Grid container spacing={3} justifyContent="center" sx={{ paddingTop: '60px' }}>
        {display.map((book) => (
          <Grid item key={book.book_id}>
            <MyBookCard key={book.book_id} book={book} onRemove={deleteBook} onEdit={updateBookInfo} />
          </Grid>
        ))}
        {!filteredBooks ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Fab colour="secondary" aria-label="add" onClick={handleClick}><AddIcon /></Fab>
            <Box>
              <BookCount />
            </Box>
          </Box>
        ) :
          (<div style={{ paddingLeft:'70px', paddingTop: '50px' }}><Button sx={{fontSize: "1rem", color:"white", backgroundColor: "purple"}} onClick={handleClose}>SEE ALL</Button></div>)}
      </Grid>
      </Container>
)};

