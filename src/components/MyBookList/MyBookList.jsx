import './../../index.css';
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Fab, Box, FormControl, InputLabel, Select, MenuItem, Link } from '@mui/material';
import { getBooks, removeBook, updateBook } from  '../../client.js';
import { SearchBar } from './../../components/SearchBar/SearchBar.jsx';
import { MyBookCard } from './../../components/MyBookCard/MyBookCard.jsx';
import { BookCount } from './../../components/BookCount/BookCount.jsx';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export const MyBookList = () => {
  const [books, setBooks] = useState([]);
  const [refinedSearch, setRefinedSearch] = useState([]);
  const navigate = useNavigate();
  const [filteredBooks, setFilteredBooks] = useState(false);
  const [orderBy, setOrderBy] = useState("");
  const [sortBy, setSortBy] = useState("");
  
    useEffect(() => {
    const retrieveBookList = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error("Couldn't fetch book list");
      }
    };
    retrieveBookList();
  }, []);


  const deleteBook = async (book_id) => {
    try {
      setBookData((prevBookData) => prevBookData.filter(book => book.book_id !== book_id));
      removeBook(book_id);
      console.log("Deleted book successfully")
    } catch (error) {
      console.error("Not able to delete book", error);
    }
  };

  const updateBookInfo = (updatedBook) => {
    try {
      setBookData((prevBookData) => prevBookData.map(book => book.book_id === updatedBook.book_id ? updateBook : book));
      updateBook(updatedBook);
    } catch (error) {
      console.error("Not able to update book", error);
    }
  };

  const handleClick = () => {
    navigate(`/new_book`);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value)
  };

  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value)
  };

  const handleSortSubmit = ({sortBy, orderBy}) => {
    const data = [...books];
    let sortedData;

    if (orderBy === "asc") {
      sortedData = data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    } else if (orderBy === "desc") {
      sortedData = data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    }
    setFilteredBooks(sortedData);
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ fontSize: '28px', fontWeight: 'bold', color: '#3C1362', textAlign: 'center', paddingTop: '20px' }}>My Book List</Typography>
        <div className="bar-container">
      <Box>
        <FormControl variant="filled" sx={{width: 200}}>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select labelId="sort-by-label" id="sortBy" value={sortBy} onChange={handleSortByChange}>
            <MenuItem value="book_title">Book Title</MenuItem>
            <MenuItem value="book_author">Author</MenuItem>
            <MenuItem value="book_genre">Genre</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{width: 200}}>
          <InputLabel id="order-by-label">Order by</InputLabel>
          <Select labelId="order-by-label" id="orderBy" value={orderBy} onChange={handleOrderByChange}>
          <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
            </Select>
          <Link onClick={handleSortSubmit} sx={{paddingTop: 2}}>SUBMIT</Link>
        </FormControl>
          </Box>
          </div>
      <Grid container spacing={3} justifyContent="space-between" sx={{ paddingTop: '60px' }}>
        {/* filteredBooks && (
      
        ) : */}
        {books.map((book) => (
          <MyBookCard key={book.book_id} book={book} onRemove={deleteBook} onEdit={updateBookInfo} />
        ))}
      </Grid>
      <Box alignItems="end">
        <Fab colour="secondary" aria-label="add" onClick={handleClick}><AddIcon /></Fab>
        </Box>
          <BookCount />
       </Container>
  );
};

