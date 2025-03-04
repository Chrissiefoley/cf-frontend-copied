import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { getBooks } from './../../client.js';
import { SearchBar } from './../../components/SearchBar/SearchBar.js';

export const MyBookList = ({ data }) => {
  const [bookData, setBookData] = useState([]);
  const [showBookList, setShowBookList] = useState(false);
    
  const BookCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const getBookCount = async () => {
        try {
          const data = await getBooks();
          setCount(data.length);
          console.log(data.length);
        } catch (error) {
          console.error("Couldnt fetch book count");
        }
      };
      getBookCount();
    }, []);
    return <h2>Book count: {count}</h2>;
  };

  // const handleClick = () => {
  //   setShowBookList(!showBookList);
  // }

  useEffect(() => {
    const retrieveBookList = async () => {
      try {
        const data = await getBooks();
        setBookData(data);
        console.log(data);
      } catch (error) {
        console.error("Couldnt fetch book count");
      }
    };
    retrieveBookList();
  }, []);

  return (
    <div id="ratings_result">
      <h2>My Book List</h2>
      <div className="container" >
        {bookData.map((book, index) => (
          <MyBookList key={index} title={book.book_title} author={book.book_author} description={book.book_description} />
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

