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