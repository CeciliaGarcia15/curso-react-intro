import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";


function TodoSearch() {
  const  {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  //a useContext le tenes que pasar cual es el contexto que estas queriendo usar
  
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
