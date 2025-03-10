import './../../index.css';
import React, { useState, useEffect, useRef} from 'react';
import { Container, Grid, Typography, Button, List, ListItem, Box, Fab } from '@mui/material';
import { getFavourites, postFavourites, updateFavourites } from '../../client.js';
import AddIcon from '@mui/icons-material/Add';

export const TopRated = () => {
  const [topFiveList, setTopFiveList] = useState([]);
  const [favouritesCreated, setFavouritesCreated] = useState(false);
  const dragBook = useRef(0);
  const draggedOverBook = useRef(0);

  const getFavouriteBooks = async () => {
    try {
          const data = await getFavourites();
          const topBooks = data.slice(0, 5);
          setTopFiveList(topBooks);
    } catch (error) {
        console.error("Couldnt fetch favourite books", error);
     }
    };

  useEffect(() => {
    getFavouriteBooks();
  }, []);
    
  const handleSort = () => {
    const topFiveClone = [...topFiveList];
    const temp = topFiveClone[dragBook.current];
    topFiveClone[dragBook.current] = topFiveClone[draggedOverBook.current];
    topFiveClone[draggedOverBook.current] = temp;
    setTopFiveList(topFiveClone);
  };

  const handleClick = async (book) => {
    if (topFiveList.length < 5) {
      setTopFiveList([...topFiveList, book]);
      try {
        await postFavourites(book);
        setFavouritesCreated(true);
        getFavouriteBooks();
      } catch (error) {
        console.error("Couldnt post favourite books", error);
      }
    }
  };

  const removeItem = (index) => {
    const newTopFiveList = topFiveList.filter((book, i) => i !== index);
    setTopFiveList(newTopFiveList);
  };

  const makeFavourite = async (index) => {
    const newTopFiveList = [...topFiveList];
    const [movedItem] = newTopFiveList.splice(index, 1);
    newTopFiveList.unshift(movedItem);
    setTopFiveList(newTopFiveList);
};
  
  const handleUpdateFavourites = async () => {
    try {
      await updateFavourites(topFiveList);
      getFavouriteBooks();
    } catch (error) {
      console.error("Couldnt post updated favourite books", error);
    }
  };


return (
    <Container>
       <Typography variant="h2" sx={{ fontSize: '28px', fontWeight: 'bold', color: '#3C1362', textAlign: 'center', paddingTop: '20px' }}>My Top 5 Favourites</Typography>
    {favouritesCreated && (
      <Grid>
        {topFiveList.map((book, index) => (
          <List
            key={book.book_id || index}
            className="card"
            draggable
            onDragStart={() => {
              dragBook.current = index;
            }}
            onDragEnter={() => {
              draggedOverBook.current = index;
            }}
            onDragEnd={handleSort}
            onDragOver={(event) => event.preventDefault()}
          >
            <ListItem>{index} {book.book_title}
              <Button
                className="remove_button"
                onClick={() => removeItem(index)}
              >
                Remove from favourites
              </Button>
              <Button
                className="favourite_button"
                onClick={() => makeFavourite(index)}
              >
                Make number 1
              </Button>
            </ListItem>
            <Button
              className="updatefavourite_button"
              onClick={() => handleUpdateFavourites(index)}
            >
              Update favourites list
            </Button>
          </List>
        ))}
      </Grid>)} 
    {!favouritesCreated && (
      <Box alignItems="end">
        {/* <MyBookList/> */}
        <Fab colour="secondary" aria-label="add" onClick={handleClick}><AddIcon /></Fab>
      </Box>
    )}
      </Container>
  );
};