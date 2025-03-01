const React = window.React;
const ReactDOM = window.ReactDOM;
const { useState, useRef, useEffect, useNavigate } = React;

const getBooks = async (orderBy, orderDir) => {
  const resultElement = document.getElementById("list_result");
  resultElement.textContent = "Loading...";

  try {
    const queryParams = new URLSearchParams({ orderBy, orderDir }).toString();
    const response = await fetch(`/api/books?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
    throw error;
  }
};

const getRatings = async (orderBy, orderDir) => {
  const resultElement = document.getElementById("ratings_result");
  resultElement.textContent = "Loading...";

  try {
    const queryParams = new URLSearchParams({ orderBy, orderDir }).toString();
    const response = await fetch(`/api/ratings?${queryParams}`, {
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


const postBook = async (newBook) => {
  const resultElement = document.getElementById("add_result");
  resultElement.textContent = "Loading...";

  try {
    const response = await fetch(`/api/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "If you can see this POST is working :)",
      }),
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

const removeBook = async (book_id) => {
  const response = await fetch(`/api/books`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "If you can see this DELETE is working :)",
    })
  }); return response;
}

const handleNavigate = (hash, orderBy, orderDir) => {
  window.location.hash = hash;
  getBooks(orderBy, orderDir);
}

const fetchBooks = () => {
    getBooks("book.title")
};
  

const fetchReviews = () => {
    getRatings("book.rating")
};

  

const HeaderNav = () => {
  return (
    <div className="navbar">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#myBooks" onClick={fetchBooks}>My books</a>
        <a href="#myReviews" onClick={fetchReviews}>My reviews</a>
        <a href="#allBooks">All books</a>
      </nav>
    </div>
  );
};


const SearchBar = () => {
  const [books, setBooks] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
     getBooks ("book.title", "asc"); 
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

 const handleAdd = () => {
    postBook(newBook);
  }



const AddBookCard = () => {
  // const [newBookCardOpen, setNewBookCardOpen] = useState(false);
  const [newBook, setNewBook] = React.useState({ book_title: '', book_author: '', book_publishedDate: '', book_genre: '', book_description: '' })
  const [newTitle, setNewTitle] = React.useState("")
  const [newAuthor, setNewAuthor] = React.useState("")
  const [newPublishedDate, setNewPublishedDate] = React.useState("")
  const [newGenre, setNewGenre] = React.useState("")
  const [newDescription, setNewDescription] = React.useState("")


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
            <button onClick={handleAdd}>Add book to my library</button>
          </div>
        </div>
      </div>
    ))
};


// function BookList() {
//   return (
//     <Grid container spacing={2}>
//   <Grid size={8}>
//     <Item>size=8</Item>
//   </Grid>
//   <Grid size={4}>
//     <Item>size=4</Item>
//   </Grid>
//   <Grid size={4}>
//     <Item>size=4</Item>
//   </Grid>
//   <Grid size={8}>
//     <Item>size=8</Item>
//   </Grid>
//     </Grid>
//   )
// }


function BookCard() {

  const handleRemove = () => {
  removeBook();
}
  
  return (
    <div className="cardcontainer" id="list_result">
      <div className="card">
        <h3>Book</h3>
        <p>Author</p>
        <p>Description</p>
        <p>Rating</p>
        <button onClick={handleRemove}>Remove book from library</button>
        {/* <button onClick={handleEdit}>Edit book</button> */}
        </div>
    </div>
  )
}


function BookList() {
  const [showBookList, setShowBookList] = React.useState(false);

  const handleClick = () => {
    setShowBookList()
  }

   React.useEffect(() => {
    const retrieveBookList = async () => {
      try {
        const data = await getBooks("title", "asc");
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
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      </div>
      <div>
        <button className="button" onClick={handleAdd}>Add new book to library</button>
        </div>
      </div>
)
    }




function BookCount() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const getBookCount = async () => {
      try {
        const data = await getBooks("title", "asc");
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

function App() {
  return (
    <div>
      <HeaderNav />
      <h1 className="pagetitle">Personal Book Library</h1>
      <SearchBar />
      <AddBookCard />
      {/* <TopRated /> */}
      <BookList />
      <BookCount />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
