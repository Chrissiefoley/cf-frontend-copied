import './index.css';
import React, { useState, useEffect, useNavigate, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from './supabaseClient.js';
import { getBooks, postBook } from './client.js';


const handleNavigate = (hash, orderBy, orderDir) => {
  window.location.hash = hash;
  getBooks();
};

const fetchBooks = () => {
  getBooks();
};
  

// const fetchReviews = () => {
//   getRatings("book_rating", "asc")
// };



const AddBookCard = () => {
  // const [newBookCardOpen, setNewBookCardOpen] = useState(false);
  const [newBook, setNewBook] = useState({ book_title: '', book_author: '', book_publishedDate: '', book_genre: '', book_description: '' });
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPublishedDate, setNewPublishedDate] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddBook = () => {
    const bookInformation = { book_title: newTitle, book_author: newAuthor, book_publishedDate: newPublishedDate, book_genre: newGenre, book_description: newDescription };
    postBook(bookInformation);
  };

  return (
    // newBookCardOpen &&
    (
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
            <button onClick={handleAddBook}>Add book to my library</button>
          </div>
        </div>
      </div>
    ));
};

const HeaderNav = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isAddBookVisible, setIsAddBookVisible] = useState(false);
  const [isMyBooksVisible, setIsMyBooksVisible] = useState(false);
  const [isMyReviewsVisible, setIsMyReviewsVisible] = useState(false);

  const homepageChange = () => {
    setIsHomeVisible(state => !state);
  };
  
  const addBookChange = () => {
    setIsAddBookVisible(state => !state);
  };
  const myBooksChange = () => {
    setIsMyBooksVisible(state => !state);
  };

  const myReviewsChange = () => {
    setIsMyReviewsVisible(state => !state);
  };

  return (
    <div className="navbar">
      <nav className="navbar">
        <a href="#home" className="aNav" onClick={homepageChange}>Home</a>
        <a href="#myBooks"  className="aNav" onClick={myBooksChange}>My books</a>
        <a href="#myReviews"  className="aNav" onClick={myReviewsChange}>My reviews</a>
        <a href="#addBook"  className="aNav" onClick={addBookChange}>Add book</a>
      </nav>
      {isMyBooksVisible && <BookCard />}
      {/* {isMyReviewsVisible && <RatingsList />} */}
      {isAddBookVisible && <AddBookCard />}
    </div>
  );
};


const SearchBar = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getBooks (); 
  }, []);

  const handleSearch = () => {
    getBooks("book_title");
  };

  return (
    <div>
      <input
        className="searchbar"
        type="text"
        placeholder="Search for a book"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
      <div id="result"></div>
    </div>
  );
};


// const handleAddReview = () => {
//   postReview(newReview);
// };


// const AddReviewCard = () => {
//   // const [newBookCardOpen, setNewBookCardOpen] = useState(false);
//   const [newBookReview, setNewBookReview] = useState({ book_rating: '', book_review: '' })
//   const [newRating, setNewRating] = useState("")
//   const [newReview, setNewReview] = useState("")


//   return (
//     // newBookCardOpen &&
//     (
//       <div className="cardcontainer" id="add_review_result">
//         <div className="card">
//           <input
//             className="inputBar"
//             type="checkbox"
//             name="book_rating"
//             value={newRating}
//             onChange={(e) => {
//               setNewRating(e.target.value)
//             }}
//           />
//           <input
//             className="checkbox"
//             type="tex"
//             placeholder="Book review"
//             name="book_review"
//             value={newReview}
//             onChange={(e) => {
//               setNewReview(e.target.value)
//             }}
//           />
//           <div>
//             <button onClick={handleAddReview}>Add review</button>
//           </div>
//         </div>
//       </div>
//     ))
// };


function BookCard() {
  const [bookData, setBookData] = useState({ book_title: '', book_author: '', book_publishedDate: '', book_genre: '', book_description: '' });
  
  // const handleRemove = () => {
  //   const bookInformation = { book_title: newTitle, book_author: newAuthor, book_publishedDate: newPublishedDate, book_genre: newGenre, book_description: newDescription };
  //   removeBook(bookInformation);
  // };
  
  useEffect(() => {
    const retrieveBookList = async () => {
      try {
        const data = await getBooks();
        setBookData(data);
        console.log(data);
      } catch (error) {
        console.error("Couldnt fetch book list");
      }
    };
    retrieveBookList();
  }, []);
  
  return (
    <div className="cardcontainer" id="list_result">
      <div className="card">
        <p>{bookData.book_title}</p>
        <p>{bookData.book_author}</p>
        <p>{bookData.book_description}</p>
        {/* <button onClick={handleEdit}>Edit book</button> */}
      </div>
    </div>
  );
};


function BookList({data}) {
  const [bookData, setBookData] = useState([]);
  const [showBookList, setShowBookList] = useState(false);

  // const handleClick = () => {
  //   setShowBookList(!showBookList);
  // }

  useEffect(() => {
    const retrieveBookList = async () => {
      try {
        const data = await getBooks();
        setBookData(data);
        console.log(data);
      } catch (error) {
        console.error("Couldnt fetch book count");
      }
    };
    retrieveBookList();
  }, []);

  return (
    <div id="ratings_result">
      <h2>My Book List</h2>
      <div className="container" >
        {bookData.map((book, index) => (
          <BookCard key={index} title={book.book_title} author={book.book_author} description={book.book_description} />
        ))}
      </div>
      <div>
        <BookCount />
      </div>
    </div>
  );
};


function BookCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getBookCount = async () => {
      try {
        const data = await getBooks();
        setCount(data.length);
        console.log(data.length);
      } catch (error) {
        console.error("Couldnt fetch book count");
      }
    };
    getBookCount();
  }, []);
  return <h2>Book count: {count}</h2>;
};

export default function App() {
  return (
    <div>
      <HeaderNav />
      <h1 className="pagetitle">Personal Book Library</h1>
      <SearchBar />
      {/* <TopRated /> */}
    </div>
  );
};
