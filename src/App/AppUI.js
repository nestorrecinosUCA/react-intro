import {
  TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton,
} from '../todos';

function AppUI({
  completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo,
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
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
