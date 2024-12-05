import React, { useState } from 'react';
import styles from './ToDo.module.css';
import TodoForm from './TodoForm';
import Search from './Search';
import Filter from './Filter';

const ToDo = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Make Excel Table",
            category: "Work",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Go to gym",
            category: "Personal",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Study React",
            category: "Studies",
            isCompleted: false,
        }
    ]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Asc");

    const addTodo = (text, category) => {
        const newTodos = [
            ...todos,
            {
                id: Math.floor(Math.random() * 10000),
                text,
                category,
                isCompleted: false,
            }
        ];
        setTodos(newTodos);
    };

    const removeTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    };

    const completeTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div className={styles.TotodoApp}>
            <h1 className={styles.Toheader}>Task List</h1>
            <Search search={search} setSearch={setSearch} />
            <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
            <div className={styles.TotodoList}>
                {todos
                    .filter(todo =>
                        filter === "All"
                            ? true
                            : filter === "Completed"
                                ? todo.isCompleted
                                : !todo.isCompleted
                    )
                    .filter(todo =>
                        todo.text.toLowerCase().includes(search.toLowerCase())
                    )
                    .sort((a, b) =>
                        sort === "Asc"
                            ? a.text.localeCompare(b.text)
                            : b.text.localeCompare(a.text)
                    )
                    .map(todo => (
                        <div
                            key={todo.id}
                            className={styles.TotodoItem}
                            style={{
                                textDecoration: todo.isCompleted ? "line-through" : ""
                            }}
                        >
                            <div className={styles.Tocontent}>
                                <p>{todo.text}</p>
                                <p className={styles.Tocategory}>({todo.category})</p>
                            </div>
                            <button
                                className={styles.TocompleteButton}
                                onClick={() => completeTodo(todo.id)}
                            >
                                Complete
                            </button>
                            <button
                                className={styles.ToremoveButton}
                                onClick={() => removeTodo(todo.id)}
                            >
                                X
                            </button>
                        </div>
                    ))}
            </div>
            <TodoForm addTodo={addTodo} />
        </div>
    );
};

export default ToDo;
