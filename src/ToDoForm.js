import { useState } from "react";
import React from "react";

function ToDoForm({ addTask, removeCompleted}) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
 

  return (
    <div className="ToDoForm">
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Input task"
        />
        <button className="add-task-button">Add Task</button>
      </form>
    </div>
  );
}

export default ToDoForm;
