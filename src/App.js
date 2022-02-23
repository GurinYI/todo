import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";


function App() {
  const [todos, setTodos] = useState([]);
  

  const addTask = (userInput, tasks) => {
    if (userInput) {
      const newItem = {
        id: Math.random(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  function removeCompleted() {
    setTodos([...todos.filter((todo) => todo.complete !== true)]);
  }

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}

      <button className="clear-completed" onClick={removeCompleted}>
        Clear done
      </button>
     
    </div>
  );
}

export default App;
