import './index.css';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from './supabaseClient.js';
import { getBooks, postBook } from './client.js';
import { AddBookCard } from './components/AddBookCard/AddBookCard.js';
import { HeaderNav } from './components/HeaderNav/HeaderNav.js';
import { MyBookCard } from './components/MyBookCard/MyBookCard.js';
import { MyBookList } from './components/MyBookList/MyBookList.js';
import { SearchBar } from './components/SearchBar/SearchBar.js';

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
    <div>
      <BrowserRouter>
        <HeaderNav />
        <h1 className="pagetitle">Personal Book Library</h1>
        <Routes>
        <Route
          exact path="/books"
          element={<MyBookList />}
        />
        <Route
          exact path="/new_book"
          element={<AddBookCard />}
          />
      </Routes>
    </BrowserRouter>
      {/* <TopRated /> */}
    </div>
  );
};
