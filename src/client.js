
export const getBooks = async () => {
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Loading...";

  try {
    const response = await fetch(`http://localhost:8080/api/books`, {
      method: "GET",
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json",

      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    resultElement.textContent = "";
    return data;
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
    throw error;
  }};



export const postBook = async (newBook) => {
  const { book_title, book_author, book_publishedDate, book_genre, book_description, book_rating } = newBook;
  const validInput = (book_title && book_author && book_publishedDate && book_genre && book_description && book_rating);
 
  if (!validInput) {
    throw new Error(`Cannot add book - missing book details`);
  }

  try {
    const response = await fetch(`http://localhost:8080/api/new_book`, {
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
    return data;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error;
  }
};

export const updateBook = async (updatedBookInformation) => {
  try {
    const response = await fetch(`http://localhost:8080/api/update_book/${updatedBookInformation.book_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBookInformation),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error;
  }
};


export const removeBook = async (book_id) => {
  const response = await fetch(`http://localhost:8080/api/delete_book/${book_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

