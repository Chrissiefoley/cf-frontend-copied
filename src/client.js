export const getBooks = async () => {
  // const resultElement = document.getElementById("list_result");
  // resultElement.textContent = "Loading...";

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
    return data; 
  } catch (error) {
    console.error(`Error: ${error.message}`);
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


export const postBook = async (newBook) => {
  // const resultElement = document.getElementById("add_result");
  // resultElement.textContent = "Loading...";

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
    console.log(data);
  } catch (error) {
    console.error(`Error: ${error.message}`);
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
};


export const getFavourites = async (orderBy, orderDir) => {
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
