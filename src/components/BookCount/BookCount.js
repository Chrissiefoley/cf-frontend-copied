import './../../index.css';
import React, { useState, useEffect } from 'react';
import { getBooks } from  '../../client.js';

export const BookCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const getBookCount = async () => {
        try {
          const data = await getBooks();
          setCount(data.length);
          console.log(data.length);
        } catch (error) {
          console.error("Couldn't fetch book count:", error);
        }
      };
      getBookCount();
    }, []);
    return <h2>Book count: {count}</h2>;
  };