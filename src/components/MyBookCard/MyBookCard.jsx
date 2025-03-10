import './../../index.css';
import React, { useState, useEffect } from 'react';
import { getBooks } from '../../client.js';
import { EditBookCard } from './../../components/EditBookCard/EditBookCard.jsx';
import { Card, Button, Typography, Rating, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const MyBookCard = ({ book, onRemove, onEdit }) => {
  const { book_id, book_title, book_author, book_publishedDate, book_genre, book_description, book_rating } = book;
  // const [seeMoreDescription, setSeeMoreDescription] = useState(null);
  const [editPopUp, setEditPopUp] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleRemove = () => {
    onRemove(book.book_id);
  };

  const handleEdit = () => {
    onEdit(book);
    setEditPopUp(false);
    // setAnchorEl(null);
  }

  const editPopOver = (event) => {
    setEditPopUp(true);
    setAnchorEl(event.currentTarget);
  }
  
  
  const clipDescription = (book_description) => {
    const maxLength = 200;
    if (book_description && book_description.length > 200) {
      return book_description.substring(0, maxLength) + '...';
    }
    return book_description || "";
  }
  
  return (
    <div>
      <Card sx={{ maxWidth: 250, height: 300 }} key={book_id}>
        <Typography variant="subtitle1" sx={{
            fontSize: '18px',
            color: '#A74165',
            textAlign: 'center',
            fontWeight: 'bold',
          paddingTop: '10px',
          margin: '5px',
            lineHeight: '1.2',
        }}>{book_title}</Typography>
          <Typography variant="subtitle2" sx={{
            textAlign: 'center',
            fontWeight: 'bold',
          paddingTop: '10px',
            margin: '5px',
        }}>{book_author}</Typography>
        <Typography variant="body2" sx={{
            textAlign: 'center',
          paddingTop: '5px',
           margin: '5px',
        }}>{clipDescription(book_description)}</Typography>
         <Box
      display="flex"
      justifyContent="center"
          alignItems="center"
          sx={{paddingTop:"10px"}}
    >
        <Rating
          name="book_rating"
          size="small"
          value={book_rating}
          precision={0.5}
          readOnly
          ></Rating>
        </Box>
         <Typography variant="body2" sx={{
            textAlign: 'center',
          paddingTop: '5px',
           margin: '5px',
          }}></Typography>
        <Button variant="text" onClick={handleRemove} startIcon={<DeleteIcon />}>Remove book</Button>
        <Button variant="text" color="secondary" onClick={editPopOver}>Edit book</Button>
        {editPopUp && (
          <EditBookCard book={book} onEdit={handleEdit} anchorEl={anchorEl} />
        )}
        </Card>
    </div>
  );
};
