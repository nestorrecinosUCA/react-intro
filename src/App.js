import React from 'react';
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton } from './todos';
import './App.css';

const defaultTodos = [
  { text: 'Finish React course', completed: false },
  { text: 'Create a github repo for React course', completed: true },
  { text: 'Change images for webpage', completed: true },
  { text: 'Update favicon', completed: false },
  {text: 'User derived status', completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Usears searched', searchValue);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  return (
    <div className="App">
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
