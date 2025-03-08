import './../../index.css';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyBookCard } from '../MyBookCard/MyBookCard.jsx';
import { AddBookCard } from '../AddBookCard/AddBookCard.jsx';
import { SearchBar } from '../SearchBar/SearchBar.jsx';
import { MyBookList } from '../MyBookList/MyBookList.jsx';
import { Container} from '@mui/material';

export const HeaderNav = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isAddBookVisible, setIsAddBookVisible] = useState(false);
  const [isMyBooksVisible, setIsMyBooksVisible] = useState(false);
  const [isMyReviewsVisible, setIsMyReviewsVisible] = useState(false);
  const navigate = useNavigate();

  return (
        <Container>
      <div className="navbar">
        <nav className="navbar">
          <a href="#home" className="aNav" onClick={() => {
            navigate(`/1`);
          }}>Home</a>
          <a className="aNav" onClick={() => {
            navigate(`/books`);
        }}>My books</a>
        <a className="aNav" onClick={() => {
            navigate(`/favourite_books`);
          }}>Favourite books</a>
          <a className="aNav" onClick={() => {
            navigate(`/new_book`);
        }}>Add book</a>
          <a href="#myReviews"  className="aNav" onClick={() => {
            navigate(`/ratings`);
          }}>My reviews</a>
         <a className="aNav" onClick={() => {
            navigate(`/books`);
          }}>All books</a>
        </nav>
        {isMyBooksVisible && <MyBookCard />}
        {/* {isMyReviewsVisible && <RatingsList />} */}
        {isAddBookVisible && <AddBookCard />}
      </div>
      </Container>
  );
};
        
  