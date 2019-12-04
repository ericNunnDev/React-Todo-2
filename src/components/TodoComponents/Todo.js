import React from 'react';
import TodoForm from './TodoForm';

const Todo = props => {
    console.log(props)
    return (
        <div>
        <h1>{props.item.todo}</h1>
        <TodoForm />
        </div>
    )
}

export default Todo;