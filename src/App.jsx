import './index.css';
import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddBookCard } from './components/AddBookCard/AddBookCard.jsx';
import { HeaderNav } from './components/HeaderNav/HeaderNav.jsx';
import { MyBookList } from './components/MyBookList/MyBookList.jsx';
import { SearchBar } from './components/SearchBar/SearchBar.jsx';
import { ReactComponent as MyBookSVG } from './components/assets/undraw_reading-time_gcvc.svg';
import { ReactComponent as MyBookTwoSVG } from './components/assets/undraw_reading_atc8.svg';
import { ReactComponent as MyBookThreeSVG } from './components/assets/undraw_relaxed-reading_wfkr.svg';


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
      <Container sx={{ padding: isMobile ? '10px' : '20px' }}>
      <BrowserRouter>
        <HeaderNav />
          <SearchBar onSearch={handleSearch} />
          <Typography variant="h1" sx={{
            fontSize: isMobile ? '24px' : '36px',
            color: '#A74165',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '20px',
            paddingBottom: '20px',
            position: 'relative'
          }}>Personal Book Library</Typography>
          <Grid container spacing={1} justifyContent="space-between">
            {isMobile ? (
              <Grid item xs={12}>
            <MyBookTwoSVG className="left-side" width="100%" height="auto" />
              </Grid>
            ) : (
                <>
            <Grid item>
            <MyBookSVG className="left-side" width="100%" height="auto" />
          </Grid>
          <Grid item>
            <MyBookTwoSVG className="left-side" width="100%" height="auto" />
          </Grid>
          <Grid item>
            <MyBookThreeSVG className="left-side" width="100%" height="auto" />
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
          element={<MyBookList filteredBooks={filteredBooks} searchResult={searchResult} onClearFilter={() => { setFilteredBooks(false); setSearchResult([]) }} />}
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
