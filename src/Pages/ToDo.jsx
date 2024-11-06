import React from 'react'
import { useState } from 'react'
import './ToDo.css'
import TodoForm from './TodoForm'

const ToDo = () => {
    const [todos, setTodos] = useState([
        {
            id:1,
            text: "Make Excel Table",
            category: "Work",
            isCompleted: false,
          },
          {
            id:2,
            text: "go to gym",
            category: "Personal",
            isCompleted: false,
          },
          {
            id:3,
            text: "Study React",
            category: "Studies",
            isCompleted: false,
          }
    ])

    const addTodo = (text, category)=>{
        const newTodos = [...todos, {
            id: Math.floor(Math.random()*10000),
            text,
            category, 
            isCompleted: false,
        }];

        setTodos(newTodos);
    }
  return (
    <div className='app' >
        <h1>Task List </h1>
        <div className="todo-list" >
           {todos.map((todo)=>(
            <div className="todo" key={todo.id}>
                <div className="content">
                    <p>{todo.text}</p>
                    <p className="category">
                        ({todo.category})
                    </p>
                </div>
                <button className='complete'>Complete</button>
                <button className='remove'> X </button>
            </div>
           ))} 
        </div>
        <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default ToDo