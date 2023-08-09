import './css/TodoItem.css';

function TodoItem(props) {
  const { todo } = props;
  const { text, completed } = todo;
  return (
    <li className='TodoItem'>
      <span className='flexItem'>V</span>
      <p className='flexItem'>{text}</p>
      <span className='flexItem'>X</span>
    </li>
  );
}

export { TodoItem };