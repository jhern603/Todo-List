import React from "react";
function Form({ setInputText, inputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    //Use UUID instead of Math.random
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="form">
      <form>
        <input
          type="text"
          value={inputText}
          className="todo-input"
          onChange={inputTextHandler}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option onChange={statusHandler} value="all">
              All
            </option>
            <option onChange={statusHandler} value="completed">
              Completed
            </option>
            <option onChange={statusHandler} value="uncompleted">
              Uncompleted
            </option>
          </select>
        </div>
      </form>
    </div>
  );
}
export default Form;
