import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyBookCard } from '../MyBookCard/MyBookCard.jsx';
import { AddBookCard } from '../AddBookCard/AddBookCard.jsx';
import { SearchBar } from '../SearchBar/SearchBar.jsx';
import { Container, Link, Breadcrumbs } from '@mui/material';
import './../../index.css';

export const HeaderNav = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isAddBookVisible, setIsAddBookVisible] = useState(false);
  const [isMyBooksVisible, setIsMyBooksVisible] = useState(false);
  const [isMyReviewsVisible, setIsMyReviewsVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" sx={{backgroundColor: '#A74165', color: '#f0e3e5',
  alignContent: 'space-between', justifyItems: 'center', padding: '10px'}}>
      <Link sx={{ color: '#ded2d4'}} onClick={() => {
            navigate(`/1`);
        }}>Home</Link>
           <Link sx={{ color: '#ded2d4'}} onClick={() => {
            navigate(`/books`);
        }}>My books</Link>
        <Link sx={{ color: '#ded2d4'}} onClick={() => {
            navigate(`/favourite_books`);
          }}>Favourite books</Link>
          <Link sx={{ color: '#ded2d4'}} onClick={() => {
            navigate(`/new_book`);
        }}>Add book</Link>
          {/* <Link sx={{ color: '#ded2d4'}} onClick={() => {
            navigate(`/ratings`);
          }}>My reviews</Link> */}
         {/* <Link sx={{ color: '#ded2d4'}} onClick={() => {
            navigate(`/books`);
          }}>All books</Link> */}
      </Breadcrumbs>
        {isMyBooksVisible && <MyBookCard />}
        {/* {isMyReviewsVisible && <RatingsList />} */}
        {isAddBookVisible && <AddBookCard />}
      </Container>
  );
};
        
  