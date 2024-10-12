import { TodoCounter } from "../TodoCouter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    
          <TodoList>
            {loading && <p>Estamos cargando....</p>}
            {error && <p>Desesperate,hubo un error!!!</p>}
            
            {/*si no esta cargando y si la lista de TODOs es igual a cero */(!loading && searchedTodos.length == 0)  &&<p>Crea tu primer TODO!!!</p>}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <CreateTodoButton />
        </>
      );
}

export {AppUI}