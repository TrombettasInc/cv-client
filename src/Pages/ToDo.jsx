import React from 'react'
import { useState } from 'react'
import './ToDo.css'
import TodoForm from './TodoForm'
import Search from './Search'
import Filter from './Filter'

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
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Asc");


    const addTodo = (text, category)=>{
        const newTodos = [...todos, {
            id: Math.floor(Math.random()*10000),
            text,
            category, 
            isCompleted: false,
        }];

        setTodos(newTodos);
    }
    const removeTodo = (id) =>{
        const newTodos = [...todos]
        const filteredTodos = newTodos.filter(todo =>
            todo.id !== id ? todo : null);
        setTodos(filteredTodos);
    }

    const completeTodo = (id) => {
       const newTodos = [...todos]
       newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
       setTodos(newTodos);
    }
        
  return (
    <div className='app' >
        <h1>Task List </h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className="todo-list" >
           {todos
           .filter((todo)=> 
            filter === "All" 
           ? true 
           : filter === "Completed" 
           ? todo.isCompleted 
           : !todo.isCompleted)

           .filter((todo)=>
           todo.text.toLowerCase().includes(search.toLowerCase())
           )

           .sort((a, b) => 
            sort === "Asc" 
           ? a.text.localeCompare(b.text) 
           : b.text.localeCompare(a.text)
        )
           .map((todo)=>(
            <div className="todo" key={todo.id}
            style = {{textDecoration: todo.isCompleted ? "line-through" : ""}}>
                <div className="content">
                    <p>{todo.text}</p>
                    <p className="category">
                        ({todo.category})
                    </p>
                </div>
                <button className='complete' onClick={()=>completeTodo(todo.id)}>Complete</button>
                <button className='remove' onClick={()=>removeTodo(todo.id)}> X </button>
            </div>
           ))} 
        </div>
        <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default ToDo