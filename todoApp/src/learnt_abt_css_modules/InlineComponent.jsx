import styles from "./inlinecomponent.module.css";
export default function InlineComponent() {
  //   const header = { color: "red", fontSize: "50px", fontFamily: "arial" };
  return (
    <div>
      <h1 className={styles.header}>Inline Component</h1>
    </div>
  );
}
