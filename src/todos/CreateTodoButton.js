import './css/CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className="CreateTodoButton" onClick={() => { console.log('hellos'); }}>+</button>
  );
}

export { CreateTodoButton };
