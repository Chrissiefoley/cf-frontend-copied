import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { getBooks } from '../../client.js';

export const TopRated = () => {
  const [topFiveList, setTopFiveList] = React.useState([]);

  const dragBook = React.useRef(0);
  const draggedOverBook = React.useRef(0);

  useEffect(() => {
      const getFavouriteBooks = async () => {
      try {
          const data = await getBooks();
          const topBooks = data.slice(0, 5);
          setTopFiveList(topBooks);
      } catch (error) {
        console.error("Couldnt fetch favourite books");
      }
    };
    getFavouriteBooks();
  }, []);
    
  const handleSort = () => {
    const topFiveClone = [...topFiveList];
    const temp = topFiveClone[dragBook.current];
    topFiveClone[dragBook.current] = topFiveClone[draggedOverBook.current];
    topFiveClone[draggedOverBook.current] = temp;
    setTopFiveList(topFiveClone);
  };

  const handleClick = () => {
    if (topFiveList.length < 5) {
      setTopFiveList([...topFiveList, book]);
      // setBookItem({});
    }
  };

  const removeItem = (index) => {
    const newTopFiveList = topFiveList.filter((book, i) => i !== index);
    setTopFiveList(newTopFiveList);
  };

  const makeFavourite = (index) => {
    const newTopFiveList = [...topFiveList];
    const [movedItem] = newTopFiveList.splice(index, 1);
    newTopFiveList.unshift(movedItem);
    setTopFiveList(newTopFiveList);
  };


  return (
    <>
      <h2>My Top 5 Favourite Books</h2>
      <ul>
        {topFiveList.map((book, index) => (
          <div
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
                <li>{index} {book.book_title} 
              <button
                className="remove_button"
                onClick={() => removeItem(index)}
              >
                Remove from favourites
              </button>
              <button
                className="favourite_button"
                onClick={() => makeFavourite(index)}
              >
                Make number 1
                    </button>
                </li>
                  <button
                className="updatefavourite_button"
                onClick={() => makeFavourite(index)}
              >
                Update favourites list
              </button>
          </div>
        ))}
      </ul>
      {/* <button>View all my book ratings</button>
      <button>Set new top 5 books</button> */}
    </>
  );
};