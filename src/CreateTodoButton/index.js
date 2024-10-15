import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";
import React from "react";
function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <button
      onClick={() => setOpenModal(openModal === true ? false : true)}
      className="CreateTodoButton"
    >
      +
    </button>
  );
}

export { CreateTodoButton };
