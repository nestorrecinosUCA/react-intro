import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton} from './todos';

const defaultTodos = [
  { text: 'Finish React course', completed: false },
  { text: 'Create a github repo for React course', completed: true },
  { text: 'Change images for webpage', completed: false },
  { text: 'Update favicon', completed: false},
]

function App() {
  return (
    <div className="App">
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo =>
          <TodoItem
            key={todo.text}
            todo={todo}
          />
        )}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
