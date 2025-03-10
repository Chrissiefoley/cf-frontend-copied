   import './../../index.css';
import React, { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Link } from '@mui/material';
import { getBooks } from  '../../client.js';
import { useNavigate } from 'react-router-dom';  

export const Sorting = ({books}) => {
    const [orderBy, setOrderBy] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(false);

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
        <>
        <Box>
            <FormControl variant="filled" sx={{ width: 200 }}>
                <InputLabel id="sort-by-label">Sort by</InputLabel>
                <Select labelId="sort-by-label" id="sortBy" value={sortBy} onChange={handleSortByChange}>
                    <MenuItem value="book_title">Book Title</MenuItem>
                    <MenuItem value="book_author">Author</MenuItem>
                    <MenuItem value="book_genre">Genre</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ width: 200 }}>
                <InputLabel id="order-by-label">Order by</InputLabel>
                <Select labelId="order-by-label" id="orderBy" value={orderBy} onChange={handleOrderByChange}>
                    <MenuItem value="asc">Ascending</MenuItem>
                    <MenuItem value="desc">Descending</MenuItem>
                </Select>
                <Link onClick={() => handleSortSubmit({ sortBy, orderBy })} sx={{ paddingTop: 2 }}>SUBMIT</Link>
            </FormControl>
            </Box>
            </>
    )
};