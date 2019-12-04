import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form>
                <input 
                    type='text' 
                    placeholder='What to do...'
                />
                <button>Add Item</button>
            </form>
        </div>
    )
}

export default TodoForm;