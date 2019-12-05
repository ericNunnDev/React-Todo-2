import React from 'react';

const Todo = props => {
    console.log(props)
    return (
        <div>
            <ul>
                <li>{props.todo.item}</li>
            </ul>
        </div>
    )
}

export default Todo;