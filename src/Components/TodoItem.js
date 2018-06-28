import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  deleteTodo(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="TodoItem" key={this.props.todo.id}>
        {this.props.todo.title} <button onClick={this.deleteTodo.bind(this, this.props.todo.id)}>löschen</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func
}

export default TodoItem;
