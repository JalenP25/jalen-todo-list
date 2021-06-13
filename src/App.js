import React, {useState} from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <header>
        <h1>Jalen's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
