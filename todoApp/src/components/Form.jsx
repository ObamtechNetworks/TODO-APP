import { useState } from "react";
import styles from "./form.module.css";

// Utility function to convert string to sentence case
function toSentenceCase(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(event) {
    event.preventDefault();

    // Handle empty value
    if (todo.name.trim() === "") {
      alert("Cannot add an empty item");
      return;
    }

    // Convert todo.name to sentence case
    const formattedName = toSentenceCase(todo.name.trim());

    // Check if the item is already in the list (case-insensitive check)
    const isDuplicate = todos.some(
      (existingTodo) =>
        existingTodo.name.toLowerCase() === formattedName.toLowerCase()
    );
    if (isDuplicate) {
      alert("Item already added");
      setTodo({ name: "", done: false }); // Clear input after adding
      return;
    }

    // Add the new item with the formatted name
    setTodos([...todos, { ...todo, name: formattedName }]);
    setTodo({ name: "", done: false }); // Clear input after adding
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(event) =>
            setTodo({ name: event.target.value, done: false })
          }
          value={todo.name}
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
