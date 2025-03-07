import './../../index.css';
import React, { useState, useEffect } from 'react';
import { getBooks, removeBook } from  '../../client.js';
import { SearchBar } from './../../components/SearchBar/SearchBar.js';
import { MyBookCard } from './../../components/MyBookCard/MyBookCard.js';
import { BookCount } from './../../components/BookCount/BookCount.js';


export const MyBookList = () => {
  const [bookData, setBookData] = useState([]);

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

  const deleteBook = async (bookId) => {
    try {
      await removeBook(bookId);
        setBookData((prevBookData) => prevBookData.filter(book => book.book_id !== bookId));
    } catch (error) {
      console.error("Not able to delete book");
    }
  };


  // const updateBook = (bookId) => {
  //   updateBook(bookId);
  // }


  return (
    <div id="list_result">
      <h2>My Book List</h2>
      <div className="container" >
        {bookData.map((book) => (
          <MyBookCard key={book.book_id} book={book} onRemove={deleteBook} />
        ))}
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <BookCount />
      </div>
    </div>
  );
};

