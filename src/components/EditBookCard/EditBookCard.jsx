import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { postBook, getBooks } from '../../client.js';
import { Popover, Card, TextField } from '@mui/material';


export const EditBookCard = ({onEdit, book}) => {
  // const [newBookCardOpen, setNewBookCardOpen] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({ book_title: '', book_author: '', book_publishedDate: '', book_genre: '', book_description: '' });
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPublishedDate, setNewPublishedDate] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (book) {
      setNewTitle(book.book_title);
      setNewAuthor(book.book_author);
      setNewPublishedDate(book.book_publishedDate);
      setNewGenre(book.book_genre);
      setNewDescription(book.book_description);
    }
  }, [book]);


  const handleEdit = async () => {
    const updatedBookInformation = {...book, book_title: newTitle, book_author: newAuthor, book_publishedDate: newPublishedDate, book_genre: newGenre, book_description: newDescription };
  await onEdit(updatedBookInformation);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

const isOpen = anchorEl;
const id = open ? 'simple-popover' : undefined;

  return (
<div>
    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
      <Card>
      <TextField
            required
            className="inputBar"
            type="text"
            placeholder="Name"
            name="book_title"
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
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          />
        <Button onClick={handleEdit}>Submit changes</Button>
            </Card>
          </Popover>
      </div>
    );
};
