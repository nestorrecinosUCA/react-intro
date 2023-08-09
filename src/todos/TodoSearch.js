import React from 'react';
import './css/TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input
      placeholder="Type a new task"
      className="TodoSearch"
      value={ searchValue }
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  );
}

export { TodoSearch };