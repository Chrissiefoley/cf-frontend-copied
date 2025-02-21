

export const HeaderNav = () => {
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
