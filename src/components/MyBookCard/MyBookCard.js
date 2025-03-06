import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { getBooks } from '../../client.js';


export const MyBookCard = ({ book_title, book_author, book_genre, book_description }) => {
  // const [seeMoreDescription, setSeeMoreDescription] = useState(null);

  // const handleRemove = () => {
  //   const bookInformation = { book_title: newTitle, book_author: newAuthor, book_publishedDate: newPublishedDate, book_genre: newGenre, book_description: newDescription };
  //   removeBook(bookInformation);
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
      {bookData.map((book) => (
      <div key={book.book_id} className="card">
        <h3>{book.book_title}</h3>
        <p>{book.book_author}</p>
        <p>{clipDescription(book.book_description)}</p> 
      </div>
        ))}
        {/* <button onClick={handleEdit}>Edit book</button> */}
    </div>
  );
};
