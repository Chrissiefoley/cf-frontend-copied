import './../../index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { postBook, getBooks } from '../../client.js';

export const EditBookCard = () => {
  // const [newBookCardOpen, setNewBookCardOpen] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({ book_title: '', book_author: '', book_publishedDate: '', book_genre: '', book_description: '' });
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPublishedDate, setNewPublishedDate] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleEditBook = () => {
    const bookInformation = { book_title: newTitle, book_author: newAuthor, book_publishedDate: newPublishedDate, book_genre: newGenre, book_description: newDescription };
    updateBook(bookInformation);
    // console.log("Book successfully updated")
  };

  return (
      <div className="cardcontainer" id="add_result">
        <div className="card">
          <input
            className="inputBar"
            type="text"
            placeholder="Name"
            name="book_title"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
          <input
            className="inputBar"
            type="text"
            placeholder="Author name"
            name="book_author"
            value={newAuthor}
            onChange={(e) => {
              setNewAuthor(e.target.value);
            }}
          />
          <input
            className="inputBar"
            type="text"
            placeholder="Published date"
            name="book_publishedDate"
            value={newPublishedDate}
            onChange={(e) => {
              setNewPublishedDate(e.target.value);
            }}
          />
          <input
            className="inputBar"
            type="text"
            placeholder="Genre"
            name="book_genre"
            value={newGenre}
            onChange={(e) => {
              setNewGenre(e.target.value);
            }}
          />
          <input
            className="inputBar"
            type="text"
            placeholder="Description"
            name="book_description"
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          />
          <div>
            <button onEditBook={handleEditBook}>Submit changes</button>
          </div>
        </div>
      </div>
    );
};
