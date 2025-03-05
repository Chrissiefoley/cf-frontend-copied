import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { getBooks } from  '../../client.js';
import { SearchBar } from './../../components/SearchBar/SearchBar.js';
import { MyBookCard } from './../../components/MyBookCard/MyBookCard.js';

export const BookCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const getBookCount = async () => {
        try {
          const data = await getBooks();
          setCount(data.length);
          console.log(data.length);
        } catch (error) {
          console.error("Couldn't fetch book count:", error);
        }
      };
      getBookCount();
    }, []);
    return <h2>Book count: {count}</h2>;
  };


export const MyBookList = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const retrieveBookList = async () => {
      try {
        const data = await getBooks();
        setBookData(data);
        // console.log(data);
      } catch (error) {
        console.error("Couldnt fetch book list");
      }
    };
    retrieveBookList();
  }, []);

  return (
    <div id="ratings_result">
      <h2>My Book List</h2>
      <div className="container" >
        {bookData.map((book, index) => (
          <MyBookCard key={index} title={book.book_title} author={book.book_author} description={book.book_description} />
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

