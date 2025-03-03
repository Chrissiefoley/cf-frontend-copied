const React = window.React;
const ReactDOM = window.ReactDOM;
const { useState, useRef, useEffect, useNavigate } = React;

const getBooks = async () => {
  const resultElement = document.getElementById("list_result");
  resultElement.textContent = "Loading...";

  try {
    const response = await fetch(`/api/books`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    resultElement.innerHTML = data.map(book => 
      `<BookCard data=${JSON.stringify(book)} />`).join('');
    
    return data; 
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
    throw error;
}};

// const getRatings = async (orderBy, orderDir) => {
//   const resultElement = document.getElementById("ratings_result");
//   resultElement.textContent = "Loading...";

//   try {
//     const queryParams = new URLSearchParams({ orderBy, orderDir }).toString();
//     const response = await fetch(`/api/ratings?${queryParams}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }

//     const data = await response.json();
//     resultElement.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
//     return data;
//   } catch (error) {
//     resultElement.textContent = `Error: ${error.message}`;
//   }
// };


const postBook = async (newBook) => {
  const resultElement = document.getElementById("add_result");
  resultElement.textContent = "Loading...";

  try {
    const response = await fetch(`/api/new_book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    resultElement.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    console.log(data);
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
  }
};


// const postReview = async (newReview) => {
//   const resultElement = document.getElementById("add_review_result");
//   resultElement.textContent = "Loading...";

//   try {
//     const response = await fetch(`/api/ratings`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         message: "If you can see this POST is working :)",
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }

//     const data = await response.json();
//     resultElement.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
//     console.log(data);
//   } catch (error) {
//     resultElement.textContent = `Error: ${error.message}`;
//   }
// };


const removeBook = async () => {
  const response = await fetch(`/api/remove_book`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "If you can see this DELETE is working :)",
    })
  }); return response;
}


const getFavourites = async (orderBy, orderDir) => {
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Loading...";

  try {
    const response = await fetch(`/api/favourites`, {
      params: {orderBy, orderDir},
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    resultElement.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
  }
};

// const postFavourites = async () => {
//   const resultElement = document.getElementById("result");
//   resultElement.textContent = "Loading...";

//   try {
//     const response = await fetch(`/api/new_favourites`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         message: "If you can see this POST is working :)",
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }

//     const data = await response.json();
//     resultElement.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
//   } catch (error) {
//     resultElement.textContent = `Error: ${error.message}`;
//   }
// };

// const removeFavourite = async () => {
//   const response = await fetch(`/api/remove_favourite`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       message: "If you can see this DELETE is working :)",
//     })
//   }); return response;
// }


const handleNavigate = (hash, orderBy, orderDir) => {
  window.location.hash = hash;
  getBooks(orderBy, orderDir);
}

const fetchBooks = () => {
    getBooks("book_title", "asc")
};
  

const fetchReviews = () => {
    getRatings("book_rating", "asc")
};



const AddBookCard = () => {
  // const [newBookCardOpen, setNewBookCardOpen] = useState(false);
  const [newBook, setNewBook] = React.useState({ book_title: '', book_author: '', book_publishedDate: '', book_genre: '', book_description: '' })
  const [newTitle, setNewTitle] = React.useState("")
  const [newAuthor, setNewAuthor] = React.useState("")
  const [newPublishedDate, setNewPublishedDate] = React.useState("")
  const [newGenre, setNewGenre] = React.useState("")
  const [newDescription, setNewDescription] = React.useState("")

  const handleAddBook = () => {
   const bookInformation = {book_title: newTitle, book_author: newAuthor, book_publishedDate: newPublishedDate, book_genre: newGenre, book_description: newDescription}
    postBook(bookInformation);
  }

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
              setNewTitle(e.target.value)
            }}
          />
          <input
            className="inputBar"
            type="text"
            placeholder="Author name"
            name="book_author"
            value={newAuthor}
            onChange={(e) => {
              setNewAuthor(e.target.value)
            }}
          />
          <input
            className="inputBar"
            type="text"
            placeholder="Published date"
            name="book_publishedDate"
            value={newPublishedDate}
            onChange={(e) => {
              setNewPublishedDate(e.target.value)
            }}
          />
          <input
            className="inputBar"
            type="text"
            placeholder="Genre"
            name="book_genre"
            value={newGenre}
            onChange={(e) => {
              setNewGenre(e.target.value)
            }}
          />
          <input
            className="inputBar"
            type="text"
            placeholder="Description"
            name="book_description"
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value)
            }}
          />
          <div>
            <button onClick={handleAddBook}>Add book to my library</button>
          </div>
        </div>
      </div>
    ))
};

const HeaderNav = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isAddBookVisible, setIsAddBookVisible] = useState(false);
  const [isMyBooksVisible, setIsMyBooksVisible] = useState(false);
  const [isMyReviewsVisible, setIsMyReviewsVisible] = useState(false);

  const homepageChange = () => {
    setIsHomeVisible(state => !state);
  }
  
  const addBookChange = () => {
    setIsAddBookVisible(state => !state);
  }
  const myBooksChange = () => {
    setIsMyBooksVisible(state => !state);
  }

  const myReviewsChange = () => {
    setIsMyReviewsVisible(state => !state);
  }

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
  const [books, setBooks] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
     getBooks ("book_title", "asc"); 
  }, []);

  const handleSearch = () => {
    // getBooks("book.title")
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
      <button onClick={handleSearch}>Search for book</button>
      <div id="result"></div>
    </div>
  );
};


 const handleAddReview = () => {
    postReview(newReview);
  }




// const AddReviewCard = () => {
//   // const [newBookCardOpen, setNewBookCardOpen] = useState(false);
//   const [newBookReview, setNewBookReview] = React.useState({ book_rating: '', book_review: '' })
//   const [newRating, setNewRating] = React.useState("")
//   const [newReview, setNewReview] = React.useState("")


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


function BookCard({ data }) {
    const [bookData, setBookData] = React.useState([])
  const handleRemove = () => {
  removeBook();
  }
  
     React.useEffect(() => {
    const retrieveBookList = async () => {
      try {
        const data = await getBooks("book_title", "asc");
        setBookData(data);
        console.log(data);
      } catch (error) {
        console.error("Couldnt fetch book count");
      }
    };
    retrieveBookList();
  }, []);
  
  return (
    <div className="cardcontainer" id="list_result">
      <div className="card">
        <p>{data.book_title}</p>
        <p>{data.book_author}</p>
        <p>{data.book_description}</p>

        <button onClick={handleRemove}>Remove book from library</button>
        {/* <button onClick={handleEdit}>Edit book</button> */}
        </div>
    </div>
  )
}


function BookList({data}) {
  const [bookData, setBookData] = React.useState([])
  const [showBookList, setShowBookList] = React.useState(false);

  const handleClick = () => {
    setShowBookList(!showBookList);
  }

   React.useEffect(() => {
    const retrieveBookList = async () => {
      try {
        const data = await getBooks("book_title", "asc");
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
)
    }


function BookCount() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const getBookCount = async () => {
      try {
        const data = await getBooks("book_title", "asc");
        setCount(data.length);
        console.log(data.length);
      } catch (error) {
        console.error("Couldnt fetch book count");
      }
    };
    getBookCount();
  }, []);
  return <h2>Book count: {count}</h2>;
}

function App() { //Home page 
  return (
    <div>
      <HeaderNav />
      <h1 className="pagetitle">Personal Book Library</h1>
      <SearchBar />
      {/* <TopRated /> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
