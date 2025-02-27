const React = window.React;
const ReactDOM = window.ReactDOM;
const { useState, useRef, useEffect, useNavigate } = React;

const getBooks = async (orderBy, orderDir) => {
  const resultElement = document.getElementById("result");
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
    resultElement.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
  }
};

window.getBooks = getBooks;

const getReviews = async (orderBy, orderDir) => {
  const resultElement = document.getElementById("result");
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


const postBook = async () => {
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Loading...";

  try {
    const response = await fetch(`/api/new_book`, {
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

const handleNavigate = (hash, orderBy, orderDir) => {
  window.location.hash = hash;
  getBooks(orderBy, orderDir);
}

const fetchBooks = () => {
    getBooks("book.title")
};
  
const fetchReviews = () => {
    getReviews("book.rating")
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
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/api/books`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.log("Error fetching book:", error);
      }
    };
    fetchBooks();
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

const handleRemove = () => {
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
}

function BookCard() {
  return (
    <div className="cardcontainer">
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
  // useEffect - use this to update it so when 
  return (
    <div><h2>My Book List</h2>
  <div className="container">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      {/* <button className="button">Remove book from library</button> */}
      </div>
      </div>
)
    }


function BookCount(data) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const getBookCount = async () => {
      try {
        const response = await fetch("/api/books");
        const myData = await response.json();
        setCount(data.count);
        console.log(data.count);
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
      {/* <TopRated /> */}
      <BookList />
      <BookCount />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
