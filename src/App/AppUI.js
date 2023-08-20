import React from 'react';
import { TodoContext } from '../TodoContext';
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

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
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
      <CreateTodoButton />
    </>
  );
}

export { AppUI };
