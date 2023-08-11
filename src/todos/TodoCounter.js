import './css/TodoCounter.css';

function TodoCounter({ total, completed }) {
  if (total === 0) {
    return (
      <h1>
        You don't have any TODO 😥
      </h1>
    );
  }
  if (total === completed) {
    return (
      <h1>Congratulations! 🎖 You have complete all your TODOs 🥳</h1>
    );
  }
  return (
    <h1>
      You have completed
      {' '}
      <span>{completed}</span>
      {' '}
      of
      {' '}
      <span>{total}</span>
      {' '}
      TODOs
    </h1>
  );
}

export { TodoCounter };
