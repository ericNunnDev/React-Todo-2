import React, { Component } from 'react';
import Todo from './components/TodoComponents/Todo';
import './components/TodoComponents/Todo.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    }
  }


  
  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default App;

// All handler functions should live in this file
// This file will be the container for Todo components