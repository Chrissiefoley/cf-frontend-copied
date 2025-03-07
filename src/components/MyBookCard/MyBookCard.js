import './../../index.css';
import React, { useState, useEffect } from 'react';
import { getBooks } from '../../client.js';


export const MyBookCard = ({book, onRemove}) => {
  // const [seeMoreDescription, setSeeMoreDescription] = useState(null);

  const handleRemove = () => {
    onRemove(book.book_id);
  };

  // const handleEdit = () => {
  //   onEdit(book.book_id);
  // };
  
  
  const clipDescription = (description) => {
    const maxLength = 100;
    if (description.length > 100) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  }
  
  return (
    <div className="cardcontainer" id="list_result">
      <div key={book.book_id} className="card">
        <h3>{book.book_title}</h3>
        <p className="authortext">{book.book_author}</p>
        <p>{clipDescription(book.book_description)}</p> 
        <button className="removebutton" onClick={handleRemove}>Remove book</button>
        <button className="editbutton">Edit book</button>
      </div>
    </div>
  );
};
