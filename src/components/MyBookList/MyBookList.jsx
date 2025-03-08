import './../../index.css';
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Fab, Box } from '@mui/material';
import { getBooks, removeBook, updateBook } from  '../../client.js';
import { SearchBar } from './../../components/SearchBar/SearchBar.jsx';
import { MyBookCard } from './../../components/MyBookCard/MyBookCard.jsx';
import { BookCount } from './../../components/BookCount/BookCount.jsx';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export const MyBookList = () => {
  const [bookData, setBookData] = useState([]);
   const navigate = useNavigate();

  useEffect(() => {
    const retrieveBookList = async () => {
      try {
        const data = await getBooks();
        setBookData(data);
      } catch (error) {
        console.error("Couldnt fetch book list");
      }
    };
    retrieveBookList();
  }, []);

  const deleteBook = async (book_id) => {
    try {
      setBookData((prevBookData) => prevBookData.filter(book => book.book_id !== book_id));
      removeBook(book_id);
      console.log("Deleted book successfully")
    } catch (error) {
      console.error("Not able to delete book", error);
    }
  };

  const updateBookInfo = (updatedBook) => {
    try {
      setBookData((prevBookData) => prevBookData.map(book => book.book_id === updatedBook.book_id ? updateBook : book));
      updateBook(updatedBook);
    } catch (error) {
      console.error("Not able to update book", error);
    }
  };

  const handleClick = () => {
    navigate(`/new_book`);
  }

  return (
    <Container>
      <Typography variant="h2" sx={{ fontSize: '28px', fontWeight: 'bold', color: '#3C1362', textAlign: 'center', paddingTop: '20px' }}>My Book List</Typography>
           <Grid container spacing={3} justifyContent="space-between" sx={{ paddingTop: '60px'}}>
        {bookData.map((book) => (
          <MyBookCard key={book.book_id} book={book} onRemove={deleteBook} onEdit={updateBookInfo} />
        ))}
      </Grid>
      <Box alignItems="end">
        <Fab colour="secondary" aria-label="add" onClick={handleClick}><AddIcon /></Fab>
        </Box>
          <BookCount />
       </Container>
  );
};

