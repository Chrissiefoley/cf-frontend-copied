import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { postBook, getBooks } from '../../client.js';
import { Popover, Card, TextField, Rating, Button } from '@mui/material';


export const EditBookCard = ({onEdit, book, anchorEl, setAnchorEl}) => {
  // const [newBookCardOpen, setNewBookCardOpen] = useState(false);
  // const [updatedBook, setUpdatedBook] = useState({ book_title: '', book_author: '', book_publishedDate: '', book_genre: '', book_description: '', book_rating: '' });
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPublishedDate, setNewPublishedDate] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [hover, setHover] = useState(-1);

  useEffect(() => {
    if (book) {
      setNewTitle(book.book_title);
      setNewAuthor(book.book_author);
      setNewPublishedDate(book.book_publishedDate);
      setNewGenre(book.book_genre);
      setNewDescription(book.book_description);
      setNewRating(book.book_rating)
    }
  }, [book]);


  const handleEdit = async () => {
    const updatedBookInformation = {...book, book_title: newTitle, book_author: newAuthor, book_publishedDate: newPublishedDate, book_genre: newGenre, book_description: newDescription, book_rating: newRating };
  await onEdit(updatedBookInformation);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

const isOpen = Boolean(anchorEl);
const id = open ? 'simple-popover' : undefined;

  return (
<div>
    <Popover id={id} open={isOpen} anchorEl={anchorEl} onClose={handleClose}>
      <Card sx={{ maxWidth: 250 }} key={book.book_id}>
      <TextField
            required
            className="inputBar"
            type="text"
            placeholder="Name"
            name="book_title"
            aria-label="Book title"
            role="textbox"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
          <TextField
            required
            className="inputBar"
            type="text"
            placeholder="Author name"
            name="book_author"
            aria-label="Author name"
            role="textbox"
            value={newAuthor}
            onChange={(e) => {
              setNewAuthor(e.target.value);
            }}
          />
          <TextField
            required
            className="inputBar"
            type="text"
            placeholder="Published date"
            name="book_publishedDate"
            aria-label="Published date"
            role="textbox"
            value={newPublishedDate}
            onChange={(e) => {
              setNewPublishedDate(e.target.value);
            }}
          />
          <TextField
            required
            className="inputBar"
            type="text"
            placeholder="Genre"
            name="book_genre"
            aria-label="Gnere"
            role="textbox"
            value={newGenre}
            onChange={(e) => {
              setNewGenre(e.target.value);
            }}
          />
          <TextField
            required
            className="inputBar"
            type="text"
            placeholder="Description"
            name="book_description"
            aria-label="Description"
            role="textbox"
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          />
            <Rating
              name="book_rating"
              defaultValue={0}
              value={newRating}
              aria-label="Rating"
              role="textbox"
              size="small"
              precision={0.5}
              onChange={(e, newRating) => {
                setNewRating(newRating);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }} />
        <Button onClick={handleEdit}>Submit changes</Button>
            </Card>
          </Popover>
      </div>
    );
};
