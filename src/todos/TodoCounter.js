function TodoCounter({ total, completed }) {
  return (
    <h1>
      You have {completed} of {total} TODOS
    </h1>
  )
}

export { TodoCounter };