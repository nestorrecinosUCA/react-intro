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
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => {
      return todo.text === text;
    })
    newTodos[todoIndex].completed =
      newTodos[todoIndex].completed
        ? false
        : true;
    setTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => {
      return todo.text === text;
    })
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const text = todo.text.toLowerCase(); 
    const searchText = searchValue.toLowerCase();
    return text.includes(searchText);
  })
  return (
    <div className="App">
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo =>
          <TodoItem
            key={todo.text}
            todo={todo}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
        )}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
