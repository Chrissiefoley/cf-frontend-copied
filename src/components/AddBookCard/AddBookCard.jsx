import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { postBook, getBooks } from '../../client.js';
import { Container, Card, TextField, Button, Typography, Box, Grid, Rating } from '@mui/material';

export const AddBookCard = () => {
  const [newBook, setNewBook] = useState({ book_title: '', book_author: '', book_publishedDate: '', book_genre: '', book_description: '', book_rating: 0 });
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPublishedDate, setNewPublishedDate] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [hover, setHover] = useState(-1);

  const handleAddBook = () => {
    const bookInformation = { book_title: newTitle, book_author: newAuthor, book_publishedDate: newPublishedDate, book_genre: newGenre, book_description: newDescription, book_rating: newRating };
    postBook(bookInformation);
  };

  return (
    (
      <Container justifyContent="center" alignItems="center" display="flex">
      <Typography variant="h2" sx={{ fontSize: '28px', fontWeight: 'bold', color: '#3C1362', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Add a new book</Typography>
        <Card>
          <Box justifyContent="center" display="flex" sx={{ padding: "10px"}}>
      <TextField 
      className="inputBar"
            type="text"
            placeholder="Book title"
            name="book_title"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}/>
               <TextField 
            type="text"
            placeholder="Author name"
            name="book_author"
            value={newAuthor}
            onChange={(e) => {
              setNewAuthor(e.target.value);
            }}/>
          <TextField 
  
            type="text"
            placeholder="Published date"
            name="book_publishedDate"
            value={newPublishedDate}
            onChange={(e) => {
              setNewPublishedDate(e.target.value);
            }}/>     
            <TextField 
            type="text"
            placeholder="Genre"
            name="book_genre"
            value={newGenre}
            onChange={(e) => {
              setNewGenre(e.target.value);
            }}/>
          <TextField 
            type="text"
            placeholder="Description"
            name="book_description"
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
              }} />
            <Rating
              name="book_rating"
              defaultValue={0}
              value={newRating}
              size="small"
              precision={0.5}
              onChange={(e, newRating) => {
                setNewRating(newRating);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }} />
            </Box>
        </Card>
        <Box alignItems="center" justifyContent="center" display="flex">
          <Button variant="contained" onClick={handleAddBook} sx={{ backgroundColor:"#6c63ff", '&:hover': {backgroundColour:"#211e2f"} }}>Add book to my library</Button>
          </Box>
      </Container>

    ));
};
