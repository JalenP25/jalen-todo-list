import React from 'react';
import ToDo from './ToDo';
import Form from "./Form";
import TodoList from "./TodoList";


const BASE_URL = 'https://json-todo.herokuapp.com/todo';

function MyToDoList() {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(r => r.json())
      .then(todoData => {
        console.log(todoData);
        setToDos(todoData);
      })
  }, [])

  function deleteToDo(todoId) {
    const URL = `${BASE_URL}/${todoId}`; 
    const config = { method: "DELETE" };
    fetch(URL, config)
      .then(r => r.json())
      .then(() => {
        const newToDos = todos.filter(todo => todo.id !== todoId);
        setToDos(newToDos);
      })
  }

  function addToDo(todo) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo)
    }

    fetch(BASE_URL, config)
      .then(r => r.json())
      .then(newtodo => {
        const newToDos = [...todos, newtodo];
        setToDos(newToDos);
      })
  }

  function updateToDo(id, updatedtodo) {
    fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedtodo),
    })
      .then((r) => r.json())
      .then((updatedtodo) => {
        const updatedToDos = todos.map((todo) => {
          if (todo.id === updatedtodo.id) return updatedtodo;
          return todo;
        });
        setToDos(updatedToDos);
      });
  }

  return (
    <div>
      <Form addToDo={addToDo} />
      <div>
        {todos.length === 0
          ? <h1>Loading...</h1>
          : todos.map(todo => {
            return <ToDo
              key={todo.id}
              todo={todo}
              deleteToDo={deleteToDo}
              updateToDo={updateToDo}
            />
          })
        }
      </div>
    </div>
  )
}

  export default TodoFetch;