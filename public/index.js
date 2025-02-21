import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar/SearchBar";

const App = () => (
  <div>
    <SearchBar />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
