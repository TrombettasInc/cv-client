import React from 'react'
import './ToDo.css'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [ category, setCategory] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
       
    }

  return (
    <div>
        <h2 className='todo-form'> Create Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='task title' 
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                />
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="">Select a category</option>
                    <option value="work">Work</option>
                    <option value="studies">Studies</option>
                    <option value="personal">Personal</option>
                </select>
                <button type='submit'>Creat a Task</button>
            </form>
    
    </div>
  )
}

export default TodoForm