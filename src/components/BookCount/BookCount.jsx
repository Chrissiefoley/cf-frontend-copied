import './../../index.css';
import React, { useState, useEffect } from 'react';
import { getBooks } from '../../client.js';
import { Typography } from '@mui/material';

export const BookCount = ({count}) => {

  return <Typography variant = "h2" sx = {{ fontSize: '28px', fontWeight: 'bold', color: '#3C1362', textAlign: 'center', paddingLeft: '20px', paddingTop: '20px' }
}>Book count: { count }</Typography>;
  };