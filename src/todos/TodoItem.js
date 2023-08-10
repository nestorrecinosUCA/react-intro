import './css/TodoItem.css';

function TodoItem(props) {
  const { todo, onComplete, onDelete } = props;
  const { text, completed } = todo;
  return (
    <li className='TodoItem'>
      <span
        className={`CompleteButton flexItem Icon ${completed ? 'CompletedItem' : ''}`}
        onClick={() => onComplete(todo.text)}
      >
        V
      </span>
      <p className={`flexItem ${completed ? 'TodoItem-p--complete' : ''}`}>{text}</p>
      <span
        className={`flexItem DeleteButton Icon`}
        onClick={() => onDelete(todo.text)}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };