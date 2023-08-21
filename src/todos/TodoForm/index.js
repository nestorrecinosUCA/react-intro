import { TodoContext } from '../../TodoContext';
import './TodoForm.css';
import React from "react";

export function TodoForm() {
  const {
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  return (
    <form onSubmit={ onSubmit }>
      <label>Add your new TODO</label>
      <textarea
        placeholder="Do some stuff"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoFormButtonsContainer">
        <button
          type=''
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancel
        </button>
        <button
        type='submit'
          className="TodoForm-button TodoForm-button--add"
        >
          Add
        </button>
      </div>
    </form>
  );
}
