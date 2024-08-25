export default function TodoItem({ item }) {
  if (item) {
    return <h3>{item}</h3>;
  }
}
