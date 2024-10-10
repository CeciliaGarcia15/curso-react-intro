import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(event) => {
        console.log("escribiste en el todo search");

        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
