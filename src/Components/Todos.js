import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem'

class Todos extends Component {

  deleteTodo(id) {
    this.props.onDelete(id);
  }

  render() {
    let TodoItems;
    if(this.props.todos) {
      TodoItems = this.props.todos.map(todo => {
        return(
          <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.id} todo={todo} />
        );
      });
    }

    return (
      <div className="Todos">
        <h3>Aufgaben</h3>
        {TodoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todo: PropTypes.array,
  onDelete: PropTypes.func
}

export default Todos;
