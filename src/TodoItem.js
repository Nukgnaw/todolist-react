import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickOnSpan = this.handleClickOnSpan.bind(this);
  }

  handleClickOnLi(event) {
    event.target.classList.toggle('checked');
  }

  handleClickOnSpan() {
    this.props.deleteTodo(this.props.id);
  }

  render() {
    return(
      <li onClick={this.handleClickOnLi}>
        {this.props.value}
        <span onClick={this.handleClickOnSpan} className="close">
          &times;
        </span>
      </li>
    );
  }
}

export default TodoItem;