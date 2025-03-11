import './../../index.css';
import React, { useState, useEffect } from 'react';
import { getBooks } from '../../client.js';
import { Typography } from '@mui/material';

export const BookCount = ({count}) => {
  // const [count, setCount] = useState(0);

    // useEffect(() => {
    //   const getBookCount = async () => {
    //     try {
    //       const data = await getBooks();
    //       setCount(data.length);
    //       console.log(data.length);
    //     } catch (error) {
    //       console.error("Error:", error);
    //     }
    //   };
    //   getBookCount();
    // }, []);
  return <Typography variant = "h2" sx = {{ fontSize: '28px', fontWeight: 'bold', color: '#3C1362', textAlign: 'center', paddingLeft: '20px', paddingTop: '20px' }
}>Book count: { count }</Typography>;
  };