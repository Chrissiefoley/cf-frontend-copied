const React = window.React;
const ReactDOM = window.ReactDOM;
const { useState, useRef, useEffect } = React;
// const { useNavigate } = ReactRouterDOM;

const topBooks = ["book1", "book2", "book3", "book4", "book5"];

const HeaderNav = () => {
  return (
    <div className="navbar">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#myBooks">My books</a>
        <a href="#myReviews">My reviews</a>
        <a href="#allBooks">All books</a>
      </nav>
    </div>
  );
};

const SearchBar = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

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

  // const filteredBooks = books.filter((book) =>
  //   book.book_title.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // setFiltered(filteredBooks);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a book"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button onClick={{}}>Search for book</button>
    </div>
  );
};

const TopRated = () => {
  //   const navigate = React.useNavigate();
  const [topFiveList, setTopFiveList] = React.useState([]);

  const dragBook = React.useRef(0);
  const draggedOverBook = React.useRef(0);
  const [bookItem, setBookItem] = React.useState("");

  React.useEffect(() => {
    const getFavouriteBooks = async () => {
      try {
        const response = await fetch("/api/books");
        const myData = await response.json();
        const topBooks = myData.slice(0, 5);
        setTopFiveList(topBooks);
      } catch (error) {
        console.error("Couldnt fetch favourite books");
      }
    };
    getFavouriteBooks();
  }, []);

  const handleSort = () => {
    const topFiveClone = [...topFiveList];
    const temp = topFiveClone[dragBook.current];
    topFiveClone[dragBook.current] = topFiveClone[draggedOverBook.current];
    topFiveClone[draggedOverBook.current] = temp;
    setTopFiveList(topFiveClone);
  };

  const handleClick = () => {
    if (topFiveList.length < 5) {
      setTopFiveList([...topFiveList, bookItem]);
      // setBookItem({});
    }
  };

  // const handleViewPersonalClick = () => {
  //   navigate("/myBooks");
  // };

  // const handleViewAllClick = () => {
  //   navigate("/allBooks");
  // };

  // const handleViewMyRatingsClick = () = {
  //   navigate("/myRatings");
  // }

  const removeItem = (index) => {
    const newTopFiveList = topFiveList.filter((bookItem, i) => i !== index);
    setTopFiveList(newTopFiveList);
  };

  const makeFavourite = (index) => {
    const newTopFiveList = [...topFiveList];
    const [movedItem] = newTopFiveList.splice(index, 1);
    newTopFiveList.unshift(movedItem);
    setTopFiveList(newTopFiveList);
  };

  return (
    <>
      <h2>My Top 5 Favourite Books</h2>
      <ul>
        {topFiveList.map((bookItem, index) => (
          <div
            key={index}
            className="top_five"
            draggable
            onDragStart={() => {
              dragBook.current = index;
            }}
            onDragEnter={() => {
              draggedOverBook.current = index;
            }}
            onDragEnd={handleSort}
            onDragOver={(event) => event.preventDefault()}
          >
            <li>
              {bookItem.book_title}
              <button
                className="remove_button"
                onClick={() => removeItem(index)}
              >
                Remove Book from Favourite books
              </button>
              <button
                className="favourite_button"
                onClick={() => makeFavourite(index)}
              >
                Make favourite book
              </button>
            </li>
          </div>
        ))}
      </ul>
      <button>View all my book ratings</button>
      <button>Set new top 5 books</button>
    </>
  );
};

function BookCount() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const getBookCount = async () => {
      try {
        const response = await fetch("/api/books");
        const myData = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error("Couldnt fetch book count");
      }
    };
    getBookCount();
  }, []);
  return <h3>Book count: {count}</h3>;
}

function App() {
  return (
    <>
      <HeaderNav />
      <h1>Personal Book Library</h1>
      <SearchBar />
      <TopRated />
      {/* <BookList /> */}
      <BookCount />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
