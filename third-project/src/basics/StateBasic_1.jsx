import './StateBasic.css'
import { useState } from 'react'

function StateBasic_1() {
    
    const [todos, setTodos] = useState(
        ['Learn React', 'Build a project']
    )

    const [newTodo, setNewTodo] = useState('')

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
        setNewTodo('')
    }

    const deleteTodo = (index) => {
        setTodos(
            todos.filter((_,i) => i !== index)
        )
    }

    return(
    <>
        <h2>Todo list</h2>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => deleteTodo(index)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
        <p>Typing: {newTodo}</p>
        <input type='text' value={newTodo} onChange={
            (e) => setNewTodo(e.target.value)}>
        </input>
        <button onClick={() => addTodo(newTodo)}>
            Add New Task
        </button>

    </>
    )
}

export default StateBasic_1
