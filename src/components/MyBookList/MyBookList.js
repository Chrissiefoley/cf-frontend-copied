import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { getBooks } from  '../../client.js';
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

  return (
    <div id="list_result">
      <h2>My Book List</h2>
      <div className="container" >
        {bookData.map((book) => (
          <MyBookCard key={book.book_id} book={book} />
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

