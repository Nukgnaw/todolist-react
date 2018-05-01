import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends React.Component {
  render() {
    return(
      <ul>{this.props.todos.map((todo, index) => 
        <TodoItem 
          id={index}
          value={todo.text}
          key={todo.key} 
          deleteTodo={this.props.deleteTodo}
        />
      )}</ul>
    );
  }
}

export default TodoList;