import React, { Component } from 'react';

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

export default AddProject;
