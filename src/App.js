import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: Date.now(),
          item: 'Finish my portfolio',
          completed: false
        },
        {
          id: Date.now(),
          item: 'Apply for jobs',
          completed: false
        }
      ],
      todo: ''
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
      return (
      <div>
        <TodoList
          todos={this.state.todos}
        />
       <TodoForm
         value={this.state.todo}
         onChange={this.handleChange}
       />
      </div>
    );
  }
}

export default App;

// All handler functions should live in this file
// This file will be the container for Todo components