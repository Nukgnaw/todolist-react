import React, { Component } from 'react';
import TodoList from './TodoList';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(value) {
    const newTodo = {
      text: value,
      key: Date.now()
    };
    this.setState(prevState => ({
      // concat() does not change prevState.todos
      todos: prevState.todos.concat(newTodo)
    }));
  }
  
  deleteTodo(id) {
    this.setState(prevState => ({
      // filter() creates a new array
      todos: prevState.todos.filter((todo, index) => index !== id)
    }));
  }

  render() {
    return (
      <div className="App">
        <Header addTodo={this.addTodo} />
        <TodoList 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo} 
        />
      </div>
    );
  }
}

export default App;
