import "./../../index.css";
import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Link,
} from "@mui/material";

export const Sorting = ({ books, onSort }) => {
  const [orderBy, setOrderBy] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value);
  };

  const handleSortSubmit = ({ sortBy, orderBy }) => {
    const data = [...books];
    let sortedData;

    if (orderBy === "asc") {
      sortedData = data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    } else if (orderBy === "desc") {
      sortedData = data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    }
    onSort(sortedData);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <FormControl variant="filled" sx={{ paddingTop: "10px", width: 250 }}>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sortBy"
            value={sortBy}
            onChange={handleSortByChange}
          >
            <MenuItem value="book_title">Book Title</MenuItem>
            <MenuItem value="book_author">Author</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ paddingTop: "10px", width: 250 }}>
          <InputLabel id="order-by-label">Order by</InputLabel>
          <Select
            labelId="order-by-label"
            id="orderBy"
            value={orderBy}
            onChange={handleOrderByChange}
          >
            <MenuItem value="asc">A-Z</MenuItem>
            <MenuItem value="desc">Z-A</MenuItem>
          </Select>
          <Link
            onClick={() => handleSortSubmit({ sortBy, orderBy })}
            sx={{
              paddingTop: 2,
              width: { xs: "100%", sm: "auto" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            SUBMIT
          </Link>
        </FormControl>
      </Box>
    </>
  );
};
