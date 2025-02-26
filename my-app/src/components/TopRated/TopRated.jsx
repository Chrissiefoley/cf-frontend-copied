import React from "react";

export const TopRated = () => {
  const [topFiveList, setTopFiveList] = useState([{}]);

  const dragBook = useRef(0);
  const draggedOverBook = useRef(0);
  const [bookItem, setBookItem] = useState({});

  const handleSort = () => {
    const topFiveClone = [...topFiveList];
    const temp = topFiveClone[dragBook.current];
    topFiveClone[draggedBook.current] = topFiveClone[draggedOverBook.current];
    topFiveClone[draggedOverBook.current] = temp;
    setTopFiveList(topFiveClone);
  };

  const handleClick = () => {
    if (bookItem !== {} && topFiveList.length < 5) {
      setTopFiveList([...topFiveList, bookItem]);
      // setBookItem({});
    }
  };

  const removeItem = (index) => {
    const newTopFiveList = topFiveList.filter((bookItem, i) => i !== index);
  };

  const makeFavourite = (index) => {
    const newTopFiveList = [...topFiveList];
    const movedItem = newTopFiveList.split(index, 1);
    newTopFiveList.unshift(movedItem);
    setTopFiveList(newTopFiveList);
  };

  return (
    <>
      <h1>My Favourite Books</h1>
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ol>
      <link>View all my ratings</link>
    </>
  );
};
