import './../../index.css';
import React, { useState, useEffect } from 'react';
import { postBook, getBooks } from '../../client.js';
import { Container, Card, TextField, Button, Typography, Box, Grid, Rating, Alert } from '@mui/material';
import { MyBookList } from './../../components/MyBookList/MyBookList.jsx';
import CheckIcon from '@mui/icons-material/Check';

export const AddBookCard = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPublishedDate, setNewPublishedDate] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [hover, setHover] = useState(-1);
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  const handleAddBook = async () => {
    try {
      const bookInformation = { book_title: newTitle, book_author: newAuthor, book_publishedDate: newPublishedDate, book_genre: newGenre, book_description: newDescription, book_rating: newRating };   
      const response = await postBook(bookInformation);
      setNewTitle("");
      setNewAuthor("");
      setNewPublishedDate("");
      setNewGenre("");
      setNewDescription("");
      setNewRating("");
      setAlertStatus("success")
      setAlertMessage("Book added to library!")
      setAlertShow(true);
    } catch (error) {
      console.error("Error:", error);
      setAlertStatus("error")
      setAlertMessage(error.message || "Book cannot be added. Please check your input.")
      setAlertShow(true);
  }
  };


  return (
    alertShow ? (
      <div>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity={alertStatus}>{alertMessage}</Alert>
          <MyBookList />
      </div>
      ) : (
      <Container sx={{ justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Typography variant="h2" sx={{ fontSize: '28px', fontWeight: 'bold', color: '#3C1362', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Add a new book</Typography>
        <Card>
          <Box display="flex" sx={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5, justifyContent: "center", flexDirection: "column", backgroundColor: '#f1e1e0', width: 300 }}>
            <TextField
              sx={{ paddingBottom: 2 }}
              type="text"
              placeholder="Book title"
              name="book_title"
              value={newTitle}
              aria-label="Book title"
              role="textbox"
              onChange={(e) => {
                setNewTitle(e.target.value);
              }} />
            <TextField
              sx={{ paddingBottom: 2 }}
              type="text"
              placeholder="Author name"
              name="book_author"
              aria-label="Author name"
              role="textbox"
              value={newAuthor}
              onChange={(e) => {
                setNewAuthor(e.target.value);
              }} />
            <TextField
              sx={{ paddingBottom: 2 }}
              type="text"
              placeholder="Published date"
              name="book_publishedDate"
              aria-label="Published date"
              role="textbox"
              value={newPublishedDate}
              onChange={(e) => {
                setNewPublishedDate(e.target.value);
              }} />
            <TextField
              sx={{ paddingBottom: 2 }}
              type="text"
              placeholder="Genre"
              name="book_genre"
              aria-label="Genre"
              role="textbox"
              value={newGenre}
              onChange={(e) => {
                setNewGenre(e.target.value);
              }} />
            <TextField
              sx={{ paddingBottom: 2 }}
              type="text"
              placeholder="Description"
              name="book_description"
              aria-label="Description"
              role="textbox"
              value={newDescription}
              onChange={(e) => {
                setNewDescription(e.target.value);
              }} />
            <Box display="flex" flexDirection="column" justifycontent="center">
              <Typography component="legend" variant="body1" sx={{ justifyContent: "center", color: 'gray' }}> Rate the book:</Typography></Box>
            <Rating
              name="book_rating"
              defaultValue={0}
              value={newRating}
              aria-label="Rating"
              size="medium"
              precision={0.5}
              onChange={(e, newRating) => {
                setNewRating(newRating);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }} />
          </Box>
        </Card>
        <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
          <Button variant="contained" onClick={handleAddBook} sx={{ backgroundColor: "#6c63ff", '&:hover': { backgroundColour: "#211e2f" }, marginTop: 2, padding: 2 }}>Add book to my library</Button>
        </Box>
      </Container>
    )
  )};