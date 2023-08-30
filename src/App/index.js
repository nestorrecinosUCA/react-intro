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
import { TodoForm } from '../todos/TodoForm';
import { useTodos } from './useTodos';
import './App.css';

function App() {
  const {
    loading,
    error,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    addTodo
  } = useTodos();

  return (
    <>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <ErrorTodos />}
        onLoading={() => <LoadingTodos />}
        onEmptyTodos={() => <EmptyTodos />}
        render={todo =>
        searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
          )
        )}
      />

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {
        openModal && (
          <Modal>
            <TodoForm
              setOpenModal={setOpenModal}
              addTodo={addTodo}
            />
          </Modal>
        )
      }
    </>
  );
}

export default App;
