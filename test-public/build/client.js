// Writing a function to communicate with our local server
import "../my-app/src/index.js";

export const getBooks = async (orderBy, orderDir) => {
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Loading...";

  try {
    const response = await fetch(`/api/books`, {
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

export const postBook = async () => {
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

export const removeBook = async () => {
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


// .getElementById("searchLibrary")
// .addEventListener("click", getBookDetails);
// .addEventListener("click", postRatingAndReview);
// .addEventListened("click", postMessage) - To post a message when clicking button.

// To begin try adding another button to use the postMessage function
