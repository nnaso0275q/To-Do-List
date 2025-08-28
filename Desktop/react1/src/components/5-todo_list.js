"use client";
// 5. Todo List "Easy"

import { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    console.log("add todo", todos);
    // console.log("add todo", inputValue);
  };
  const handleDleteTodo = (index) => {
    const newTodos = todos.filter((el, i) => index !== i);
    setTodos(newTodos);
  };
  return (
    <div className="w-[300] h-[200] bg-white text-black text-2xl my-[30] mx-[30] pl-[5]">
      <h3>5.)</h3>
      <div>
        <input
          className="w-[200] h-[25] border-2 border-solid border-gray-500"
          onChange={handleOnChange}
          type="text"
          // placeholder="type...."
        />
        <button
          className="w-[120] h-[30] bg-gray-300 rounded-md"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>

      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
          <button
            className="w-[80] h-[25] bg-red-300 rounded-md "
            onClick={() => handleDleteTodo(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

// export default TodoList;
