import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>

      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
