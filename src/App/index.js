import "./App.css";

import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";


//  const defaultTodos = [
//    { text: "Cortar cebolla", completed: true },
//    { text: "Tomar el curso de intro a React", completed: false },
//    { text: "Llorar con la llorona", completed: false },
//    { text: "LALALALA", completed: false },
//    { text: "Lalas", completed: false },
//  ];

// localStorage.setItem('TODOS_V1',defaultTodos);


//localStorage.removeItem('TODOS_V1');


/*
para renombrar dentro de objetos se usan los dos puntos, 
la propiedad que viene del custom hook se llama item pero nosotros
necesitamos que aqui se llame todos, asi que renombramos con los dos 
puntos
const { 
  item: todos, 
  saveItem: saveTodos,
  loading,
  error
} = useLocalStorage("TODOS_V1",[]);
*/

function App() {
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1",[]);
  const [searchValue, setSearchValue] = React.useState('');

  //la doble negacion !! convierte el valor en un booleano
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });


 

  const completeTodo = (text) => {
    const newTodos = [...todos]; //crea una copia de los todos
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos]; //crea una copia de los todos
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

 return(
  <AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
  
  />
 );
}

export default App;
