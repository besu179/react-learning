import { useState } from "react";

export default function App() {
  return (
    <div className="app-container">
      <ToDoList />
    </div>
  );
}

function ToDoList() {
  const listOfToDo = [];

  const [list, setList] = useState(listOfToDo);

  return (
    <div className="toDoList">
      <h1>This is a simple to do list app</h1>
      <ListOfToDo list={list} setList={setList} />
      <h1>Add Todo</h1>
      <AddToDo list={list} setList={setList} />
    </div>
  );
}

function ListOfToDo({ list, setList }) {
  return (
    <div className="list-container">
      {list.length === 0 && (
        <p className="no-tasks-message">No task to do, please add some 😊</p>
      )}
      {list.map((toDo) => (
        <Todo toDo={toDo} key={toDo.id} list={list} setList={setList} />
      ))}
    </div>
  );
}

function Todo({ toDo, list, setList }) {
  function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmDelete) return;
    setList(list.filter((item) => item.id !== toDo.id));
  }
  return (
    <div className="todo-item">
      <h3>{toDo.name}</h3>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

function AddToDo({ list, setList }) {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      alert("Please enter a task");
      return;
    }
    setList([
      ...list,
      {
        id: Date.now().toString(),
        name: name,
        isComplete: false,
      },
    ]);
    setName("");
  }
  return (
    <div className="add-todo-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <label className="task-label">
          Name of the task{" "}
          <input
            type="text"
            placeholder="Add todo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="task-input"
          />
        </label>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
}
