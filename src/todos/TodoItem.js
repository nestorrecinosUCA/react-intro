import React from 'react';
import { AiFillCloseSquare, AiFillCheckSquare } from 'react-icons/ai';
import './css/TodoItem.css';

function TodoItem(props) {
  const { todo, onComplete, onDelete } = props;
  const { text, completed } = todo;
  return (
    <li className="TodoItem">
      <AiFillCheckSquare
        className={`CompleteButton flexItem Icon ${completed ? 'CompletedItem' : ''}`}
        onClick={() => onComplete(todo.text)}
      />
      <p className={`flexItem ${completed ? 'TodoItem-p--complete' : ''}`}>{text}</p>
      <AiFillCloseSquare
        className="flexItem DeleteButton Icon"
        onClick={() => onDelete(todo.text)}
      />
    </li>
  );
}

export { TodoItem };
