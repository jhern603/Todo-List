import "./styles/app.css";
import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    fitlerHandler();
  }, [todos, status]);

  const fitlerHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>To-Do List</p>
      </header>
      <Form
        setStatus={setStatus}
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList filterTodos={filterTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
