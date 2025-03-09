// import './../../index.css';
// import React, { useState, useEffect, useNavigate, useRef } from 'react';
// import { postBook, getBooks } from '../../client.js';
// import { Popover, Card, TextField, Rating, Button } from '@mui/material';


// export const EditRatingCard = ({onEdit, book}) => {
//   // const [newBookCardOpen, setNewBookCardOpen] = useState(false);
//   const [updatedRating, setUpdatedRating] = useState({ book_rating: '' });
//   const [anchorEl, setAnchorEl] = useState(null);

//   useEffect(() => {
//     if (book) {
//       setUpdatedRating(book.book_rating);
//     }
//   }, [book]);


//   const handleEdit = async () => {
//     const updatedBookInformation = {...book, book_rating: newRating };
//   await onEdit(updatedBookInformation);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   }

// const isOpen = anchorEl;
// const id = open ? 'simple-popover' : undefined;

//   return (
// <div>
//     <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
//       <Card sx={{ maxWidth: 250 }} key={book.book_id}>
//            <Rating
//               name="book_rating"
//               defaultValue={0}
//               value={newRating}
//               size="small"
//               precision={0.5}
//               onChange={(e) => {
//               setNewRating(e.target.value);
//               }} />
//         <Button onClick={handleEdit}>Submit changes</Button>
//             </Card>
//           </Popover>
//       </div>
//     );
// };
