import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todos.id));
    };
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn"><i className="fas fa-check"></i></button>
            <button onCick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;