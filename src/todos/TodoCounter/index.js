import './TodoCounter.css';
import React from 'react';

function TodoCounter({ completedTodos, totalTodos }) {
  
  if (totalTodos === 0) {
    return (
      <h1>
        You don't have any TODO 😥
      </h1>
    );
  }
  if (totalTodos === completedTodos) {
    return (
      <h1>Congratulations! 🎖 You have complete all your TODOs 🥳</h1>
    );
  }
  return (
    <h1>
      You have completed
      {' '}
      <span>{completedTodos}</span>
      {' '}
      of
      {' '}
      <span>{totalTodos}</span>
      {' '}
      TODOs
    </h1>
  );
}

export { TodoCounter };
