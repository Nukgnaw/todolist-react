import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.value !== '') {
      this.props.addTodo(this.state.value);
      this.setState({value: ''});
    }
    document.getElementById('myInput').focus();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(
      <div className="header">
        <h2>My To Do List</h2>
        <input 
          type="text" 
          id="myInput" 
          placeholder="What to do?" 
          value={this.state.value} 
          onChange={this.handleChange} 
        />
        <button onClick={this.handleClick} className="addBtn">Add</button>
      </div>
    );
  }
}

export default Header;