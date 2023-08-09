function TodoItem(props) {
  const { todo } = props;
  const { text, completed } = todo;
  return (
    <li>
      <span>V</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };