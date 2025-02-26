import React from "react";

export const SearchBar = ({ value, onChange, label, name }) => {
  //   const [searchTerm, setSearchTerm] = useState("");

  //       const Books = useCallback(async (term) => {
  //             if (term.length < 2) return;
  //       })
  //       try {
  //             const response = await fetch();
  //             const data = await response.json();

  //             // const formattedBooks = data.map((books) => ({
  //             // }))

  //             setSearchTerm(formattedBooks);
  //       } catch (error) {
  //             console.log('Error fetching book:', error)
  //       }
  // }, []);

  //   useEffect(() => {
  //     fetchBooks(term);
  //   }, [term, fetchBooks]);

  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#about">About</a>
      <input
        type="text"
        placeholder="Search for a book"
                    value={""}
                    onChange={() => {}}
        //   onChange={(e) => {
        //     setSearchTerm(e.value);
        //   }}
      />
      <button text="Search"></button>
    </div>
  );
};
