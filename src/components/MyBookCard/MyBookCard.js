import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { getBooks } from './../../client.js';

export const MyBookCard = () => {
  const [bookData, setBookData] = useState({ book_title: '', book_author: '', book_publishedDate: '', book_genre: '', book_description: '' });
  
  // const handleRemove = () => {
  //   const bookInformation = { book_title: newTitle, book_author: newAuthor, book_publishedDate: newPublishedDate, book_genre: newGenre, book_description: newDescription };
  //   removeBook(bookInformation);
  // };
  
  useEffect(() => {
    const retrieveBookList = async () => {
      try {
        const data = await getBooks();
        setBookData(data);
        console.log(data);
      } catch (error) {
        console.error("Couldnt fetch book list");
      }
    };
    retrieveBookList();
  }, []);
  
  return (
    <div className="cardcontainer" id="list_result">
      <div className="card">
        <p>{bookData.book_title}</p>
        <p>{bookData.book_author}</p>
        <p>{bookData.book_description}</p>
        {/* <button onClick={handleEdit}>Edit book</button> */}
      </div>
    </div>
  );
};
