import React, { Component } from 'react';
import Todo from './components/TodoComponents/Todo';
import './components/TodoComponents/Todo.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: data,
    }
  }


  
  render() {
    const todoItems = this.state.todo.map(item => <Todo item={item} />)

    return (
      <div>
        {todoItems}
      </div>
    );
  }
}

export default App;

// All handler functions should live in this file
// This file will be the container for Todo components