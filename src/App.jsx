import './index.css';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid, Typography, Fab, GridItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from './supabaseClient.js';
import { getBooks, postBook } from './client.js';
import { AddBookCard } from './components/AddBookCard/AddBookCard.jsx';
import { HeaderNav } from './components/HeaderNav/HeaderNav.jsx';
import { MyBookCard } from './components/MyBookCard/MyBookCard.jsx';
import { MyBookList } from './components/MyBookList/MyBookList.jsx';
import { SearchBar } from './components/SearchBar/SearchBar.jsx';
import { TopRated } from './components/TopRated/TopRated.jsx';
import { ReactComponent as MyBookSVG } from './components/assets/undraw_reading-time_gcvc.svg'
import { ReactComponent as MyBookTwoSVG } from './components/assets/undraw_reading_atc8.svg'
import { ReactComponent as MyBookThreeSVG } from './components/assets/undraw_relaxed-reading_wfkr.svg'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const handleNavigate = (hash, orderBy, orderDir) => {
  window.location.hash = hash;
  getBooks();
};

const fetchBooks = () => {
  getBooks();
};
  
// const fetchReviews = () => {
//   getRatings("book_rating", "asc")
// };

// const handleAddReview = () => {
//   postReview(newReview);
// };



export default function App() {
  return (
    // <div className="app-container">
    <div>
      <Container>
      <BrowserRouter>
        <HeaderNav />
          <SearchBar />
          <Typography variant="h1" sx={{
            fontSize: '36px',
            color: '#A74165',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '20px'
          }}>Personal Book Library</Typography>
                       {/* <h1 className="pagetitle">Personal Book Library</h1> */}
          <Grid container spacing={1} justifyContent="space-between">
            {/* <div className="searchouter-container"> */}
          <Grid item>
            <MyBookSVG className="left-side" width="320px" height="400px" />
          </Grid>
          <Grid item>
            <MyBookTwoSVG className="left-side" width="320px" height="400px" />
          </Grid>
          <Grid item>
            <MyBookThreeSVG className="left-side" width="320px" height="400px" />
          </Grid>
          </Grid>
        <Routes>
        <Route
          exact path="/books"
          element={<MyBookList />}
          />
          <Route
          exact path="/favourite_books"
          element={<TopRated />}
          />
        <Route
          exact path="/new_book"
          element={<AddBookCard />}
          />
        </Routes>
        </BrowserRouter>
        </Container>
      {/* <TopRated /> */}
    </div>
  );
};
