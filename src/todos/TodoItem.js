import './css/TodoItem.css';

function TodoItem(props) {
  const { todo } = props;
  const { text, completed } = todo;
  return (
    <li className='TodoItem'>
      <span className={`CompleteButton flexItem Icon ${completed ? 'CompletedItem' : ''}`}>V</span>
      <p className={`flexItem ${completed ? 'TodoItem-p--complete' : ''}`}>{text}</p>
      <span className={`flexItem DeleteButton Icon`}>X</span>
    </li>
  );
}

export { TodoItem };