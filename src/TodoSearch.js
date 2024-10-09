import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");
  console.log("los usuarios buscan" + searchValue);
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
