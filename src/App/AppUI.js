import React from 'react';
import {
  TodoCounter,
  TodoSearch,
  TodoList,
  TodoItem,
  CreateTodoButton,
  LoadingTodos,
  ErrorTodos,
  EmptyTodos,
} from '../todos';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../todos/TodoForm';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <LoadingTodos />}
        {error && <ErrorTodos />}
        {
          (!loading && !error && searchedTodos.length === 0)
          && <EmptyTodos />
        }
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {
        openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
    </>
  );
}

export { AppUI };
