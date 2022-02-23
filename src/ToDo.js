import React from "react";

import { useState } from "react";

function ToDo({ todo, toggleTask, removeTask }) {
  const [modalActive, setModalActive] = useState(false);
  const changeTask = (id) => {};
  return (
    <div
      key={todo.id}
      className={todo.complete ? "done item-todo " : "item-todo"}
    >
      <div className="text-content"> {todo.task} </div>
      <div className="change-task">
        <button className="change-task" onClick={() => removeTask(todo.id)}>
          Delete
        </button>
        <button className="change-task" onClick={() => toggleTask(todo.id)}>
          Done
        </button>
      </div>
    </div>
  );
}

export default ToDo;
