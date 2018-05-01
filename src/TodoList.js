import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends React.Component {
  render() {
    return(
      <ul>{this.props.todos.map((todo, index) => 
        <TodoItem 
          id={index}
          key={todo.key} // About keys: https://reactjs.org/docs/lists-and-keys.html#keys
          
          value={todo.text} 
          deleteTodo={this.props.deleteTodo} 
          // Or use an arrow function to pass paras: 
          // https://reactjs.org/docs/faq-functions.html#example-passing-params-using-arrow-functions
        />
      )}</ul>
    );
  }
}

export default TodoList;