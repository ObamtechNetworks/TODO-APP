import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  // sort the todo list, create a copy, and then convert the booleans to numbers and sort
  // the sorting is done by the boolean, done and not done, all DONE down and not DONE up
  const sortedTodos = todos.slice().sort((a, b) => Number(a.done - b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
