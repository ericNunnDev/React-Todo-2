import React, { Component } from 'react';

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
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;

// All handler functions should live in this file
// This file will be the container for Todo components