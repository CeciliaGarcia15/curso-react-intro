import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";



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
  

 return(
  <TodoProvider>
    <AppUI/>
  </TodoProvider>
  
 );
}

export default App;
