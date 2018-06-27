import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddProject extends Component {

  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Zufriedenheit', 'Effizents', 'Feedback']
  }

  handleSubmit(e) {
    this.setState({
      newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }
    }, function(){
      this.props.AddProject(this.state.newProject);
    });
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h2>Projekt hinzufügen</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Titel</label><br/>
              <input type="text" ref="title" />
            </div>
            <div>
              <label>Kategorie</label><br/>
              <select ref="category">
                {categoryOptions}
              </select>
            </div>
            <br/>
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  AddProject: PropTypes.func
}

export default AddProject;
