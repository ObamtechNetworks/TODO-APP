import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete Button Clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    console.log("Item text clicked", name);
    const newArray = todos.map(
      (
        todo // check if every todo item == name of what was cli
      ) => (todo.name === name ? { ...todo, done: !todo.done } : todo)
      // if true, set the done value of that item to its inverse
    );
    // set the new state of the todo items
    setTodos(newArray);
    // console.log(todos)
  }

  const isCompleted = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={isCompleted} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
