import './../../index.css';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyBookCard } from '../MyBookCard/MyBookCard.js';
import { AddBookCard } from '../AddBookCard/AddBookCard.js';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { MyBookList } from '../MyBookList/MyBookList.js';

export const HeaderNav = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isAddBookVisible, setIsAddBookVisible] = useState(false);
  const [isMyBooksVisible, setIsMyBooksVisible] = useState(false);
  const [isMyReviewsVisible, setIsMyReviewsVisible] = useState(false);
  const navigate = useNavigate();

  return (
      <div className="navbar">
        <nav className="navbar">
          {/* <a href="#home" className="aNav" onClick={() => {
            navigate(`/1`);
          }}>Home</a> */}
          <a href="#myBooks" className="aNav" onClick={() => {
            navigate(`/mybooks`);
          }}>My books</a>
          {/* <a href="#myReviews"  className="aNav" onClick={() => {
            navigate(`/3`);
          }}>My reviews</a> */}
          <a href="#addBook" className="aNav" onClick={() => {
            navigate(`/addbook`);
          }}>Add book</a>
        </nav>
        {isMyBooksVisible && <MyBookCard />}
        {/* {isMyReviewsVisible && <RatingsList />} */}
        {isAddBookVisible && <AddBookCard />}
  </div>
  );
};
        
  