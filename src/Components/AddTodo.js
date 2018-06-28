import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddTodo extends Component {

  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  handleSubmit(e) {
    this.setState({
      newTodo: {
        id: uuid.v4(),
        title: this.refs.title.value
      }
    }, function(){
      this.props.AddTodo(this.state.newTodo);
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Aufgabe hinzufügen</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Titel</label><br/>
              <input type="text" ref="title" />
            </div>
            <br/>
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  AddTodo: PropTypes.func
}

export default AddTodo;
