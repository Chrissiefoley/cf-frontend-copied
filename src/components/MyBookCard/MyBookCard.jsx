import './../../index.css';
import React, { useState, useEffect } from 'react';
import { getBooks } from '../../client.js';
import { EditBookCard } from './../../components/EditBookCard/EditBookCard.jsx';
import { Card, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const MyBookCard = ({ book, onRemove, onEdit }) => {
  const { book_title, book_author, book_publishedDate, book_genre, book_description } = book;
  // const [seeMoreDescription, setSeeMoreDescription] = useState(null);
  const [editPopUp, setEditPopUp] = useState(false);

  const handleRemove = () => {
    onRemove(book.book_id);
  };

  const handleEdit = () => {
    onEdit(book);
  }

  const editPopOver = (event) => {
    setEditPopUp(true);
    setAnchorEl(event.currentTarget);
  }
  
  
  const clipDescription = (book_description) => {
    const maxLength = 100;
    if (book_description && book_description.length > 100) {
      return book_description.substring(0, maxLength) + '...';
    }
    return book_description || "";
  }
  
  return (
    // <div className="cardcontainer" id="list_result">
    <div>
      <Card sx={{ maxWidth: 250 }} key={book.book_id}>
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
        <Button variant="text" onClick={handleRemove} startIcon={<DeleteIcon />}>Remove book</Button>
        <Button variant="text" color="secondary" onClick={editPopOver}>Edit book</Button>
        {/* <button className="removebutton" onClick={handleRemove}>Remove book</button>
        <button className="editbutton" onClick={editPopOver}>Edit book</button> */}
        {editPopUp && (
          <EditBookCard book={book} onEdit={handleEdit} />
        )}
        </Card>
    </div>
  );
};
