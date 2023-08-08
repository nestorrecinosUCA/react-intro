import { TodoCounter, TodoSearch, TodoList } from './todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      {/* <CreateTodoButton /> */}
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Do something</p>
      <span>X</span>
    </li>
  );
}

export default App;
