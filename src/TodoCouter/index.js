import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const  {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  //a useContext le tenes que pasar cual es el contexto que estas queriendo usar
  
  return (
    <h1 className="TodoCounter">
      Haz completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
