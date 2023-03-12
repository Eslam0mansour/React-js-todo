import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleAddTodo() {
        if (inputValue) {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    }

    function handleDelete(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="input-group">
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span>{todo}</span>
                        <button onClick={() => handleDelete(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
