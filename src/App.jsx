import './index.css';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid, Typography, Fab } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { styled } from '@mui/material/styles';
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
import { ReactComponent as MyBookSVG } from './components/assets/undraw_reading-time_gcvc.svg';
import { ReactComponent as MyBookTwoSVG } from './components/assets/undraw_reading_atc8.svg';
import { ReactComponent as MyBookThreeSVG } from './components/assets/undraw_relaxed-reading_wfkr.svg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleSearch = (searchResults) => {
    setSearchResult(searchResults);
    setFilteredBooks(searchResults.length > 0);
  }

  return (
    <div>
      <Container>
      <BrowserRouter>
        <HeaderNav />
          <SearchBar onSearch={handleSearch} />
          <Typography variant="h1" sx={{
            fontSize: '36px',
            color: '#A74165',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '20px'
          }}>Personal Book Library</Typography>
          <Grid container spacing={1} justifyContent="space-between">
            {isMobile ? (
              <Grid item>
            <MyBookTwoSVG className="left-side" width="320px" height="400px" />
              </Grid>
            ) : (
                <>
            <Grid item>
            <MyBookSVG className="left-side" width="320px" height="400px" />
          </Grid>
          <Grid item>
            <MyBookTwoSVG className="left-side" width="320px" height="400px" />
          </Grid>
          <Grid item>
            <MyBookThreeSVG className="left-side" width="320px" height="400px" />
                  </Grid>
                  </>
             )}
          </Grid>
           <div style={{ marginTop: '20px' }}></div>
          <Routes>
            <Route
              exact path="/"
              element={<MyBookList filteredBooks={filteredBooks} searchResult={searchResult} onClearFilter={() => { setFilteredBooks(false); setSearchResult([]) }} />}
          />
        <Route
          exact path="/books"
          element={<MyBookList filteredBooks={filteredBooks} searchResult={searchResult}/>}
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
    </div>
  );
};
