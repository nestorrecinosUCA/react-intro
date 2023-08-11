import React from 'react';
import {
  TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton,
} from './todos';
import './App.css';

/* const defaultTodos = [
  { text: 'Finish React course', completed: false },
  { text: 'Create a github repo for React course', completed: true },
  { text: 'Change images for webpage', completed: true },
  { text: 'Update favicon', completed: false },
  { text: 'User derived status', completed: true },
];
localStorage.setItem('TODOS_V1', defaultTodos);
localStorage.removeItem('TODOS_V1');
*/
function useLocalStorage(itemKey, initialValue) {
  const localStorageItems = localStorage.getItem(itemKey);
  if (!localStorageItems) {
    localStorage.setItem(itemKey, JSON.stringify(initialValue));
  }
  const parsedItems = localStorageItems ? JSON.parse(localStorageItems) : initialValue;
  const [items, setItems] = React.useState(parsedItems);

  const saveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem(itemKey, JSON.stringify(newItems));
  };

  return [items, saveItems];
}
function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const text = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return text.includes(searchText);
  });

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
