import './TodoList.css';

function TodoList(props) {
  return (
    <>
      { props.error && props.onError() }
      { props.loading && props.onLoading() }
      {
        (!props.loading && !props.error && props.searchedTodos?.length === 0)
        && props.onEmptyTodos()
      }
      {props.searchedTodos.map(props.render)}
      <ul className="TodoList">
        {props.children}
        </ul>
    </>
  );
}

export { TodoList };
