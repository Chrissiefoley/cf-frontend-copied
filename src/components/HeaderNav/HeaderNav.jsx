import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Link, Breadcrumbs } from '@mui/material';
import './../../index.css';

export const HeaderNav = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" sx={{backgroundColor: '#A74165', color: '#f0e3e5', alignContent: 'space-between', justifyItems: 'center', padding: '10px'}}>
        <Link sx={{ color: '#ded2d4'}} onClick={() => {
          navigate(`/`);
        }}>Home</Link>
        <Link sx={{ color: '#ded2d4'}} onClick={() => {
          navigate(`/books`);
        }}>My books</Link>
        <Link sx={{ color: '#ded2d4'}} onClick={() => {
          navigate(`/new_book`);
        }}>Add book</Link>
      </Breadcrumbs>
    </Container>
  );
};
        
  