import './css/TodoItem.css';

function TodoItem(props) {
  const { todo } = props;
  const { text, completed } = todo;
  return (
    <li className='TodoItem'>
      <span className='CompleteButton flexItem Icon'>V</span>
      <p className='flexItem'>{text}</p>
      <span className='flexItem DeleteButton Icon'>X</span>
    </li>
  );
}

export { TodoItem };