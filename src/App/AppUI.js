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
  return (
    <>
      <TodoContext.Consumer>
        {({completedTodos, totalTodos}) => (
          <TodoCounter completed={completedTodos} total={totalTodos} />
        )}
      </TodoContext.Consumer>
      <TodoContext.Consumer>
        {({searchValue, setSearchValue}) => (
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        )}
      </TodoContext.Consumer>
      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
            {console.log(completeTodo)}
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
        )}
      </TodoContext.Consumer>
      <TodoContext.Consumer>
        {() => (
          <CreateTodoButton />
        )}
      </TodoContext.Consumer>
    </>
  );
}

export { AppUI };
