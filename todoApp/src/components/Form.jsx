import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Handle empty value
    if (!todo) {
      alert("Cannot add empty item");
      return;
    }

    // Check if the item is already in the list
    if (todos.includes(todo)) {
      alert("Item already added");
      setTodo(""); // Clear input after adding
      return;
    }
    // Add the new item to the list
    setTodos([...todos, todo]);
    setTodo(""); // Clear input after adding
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
          type="text"
          placeholder="Enter todo item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
