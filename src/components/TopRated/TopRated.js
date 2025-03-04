// export const TopRated = () => {
//   const [topFiveList, setTopFiveList] = React.useState([]);

//   const dragBook = React.useRef(0);
//   const draggedOverBook = React.useRef(0);
//   const [bookItem, setBookItem] = React.useState("");

//   React.useEffect(() => {
//     const getFavouriteBooks = async () => {
//       try {
//         const response = await fetch("/api/books");
//         const myData = await response.json();
//         const topBooks = myData.slice(0, 5);
//         setTopFiveList(topBooks);
//       } catch (error) {
//         console.error("Couldnt fetch favourite books");
//       }
//     };
//     getFavouriteBooks();
//   }, []);

//   const handleSort = () => {
//     const topFiveClone = [...topFiveList];
//     const temp = topFiveClone[dragBook.current];
//     topFiveClone[dragBook.current] = topFiveClone[draggedOverBook.current];
//     topFiveClone[draggedOverBook.current] = temp;
//     setTopFiveList(topFiveClone);
//   };

//   const handleClick = () => {
//     if (topFiveList.length < 5) {
//       setTopFiveList([...topFiveList, bookItem]);
//       // setBookItem({});
//     }
//   };

//   // const handleViewPersonalClick = () => {
//   //   navigate("/myBooks");
//   // };

//   // const handleViewAllClick = () => {
//   //   navigate("/allBooks");
//   // };

//   // const handleViewMyRatingsClick = () = {
//   //   navigate("/myRatings");
//   // }

//   const removeItem = (index) => {
//     const newTopFiveList = topFiveList.filter((bookItem, i) => i !== index);
//     setTopFiveList(newTopFiveList);
//   };

//   const makeFavourite = (index) => {
//     const newTopFiveList = [...topFiveList];
//     const [movedItem] = newTopFiveList.splice(index, 1);
//     newTopFiveList.unshift(movedItem);
//     setTopFiveList(newTopFiveList);
//   };


//   return (
//     <>
//       <h2>My Top 5 Favourite Books</h2>
//       <ul>
//         {topFiveList.map((bookItem, index) => (
//           <div
//             key={index}
//             className="top_five"
//             draggable
//             onDragStart={() => {
//               dragBook.current = index;
//             }}
//             onDragEnter={() => {
//               draggedOverBook.current = index;
//             }}
//             onDragEnd={handleSort}
//             onDragOver={(event) => event.preventDefault()}
//           >
//             <li>
//               {bookItem.book_title}
//               <button
//                 className="remove_button"
//                 onClick={() => removeItem(index)}
//               >
//                 Remove Book from Favourite books
//               </button>
//               <button
//                 className="favourite_button"
//                 onClick={() => makeFavourite(index)}
//               >
//                 Make favourite book
//               </button>
//             </li>
//           </div>
//         ))}
//       </ul>
//       <button>View all my book ratings</button>
//       <button>Set new top 5 books</button>
//     </>
//   );
// };