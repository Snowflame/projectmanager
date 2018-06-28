import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  activateProject(id){
    this.props.activateProject(id);
  }


  render() {
    return (
      <li className="Projects">
        {this.props.project.title}: {this.props.project.category} <button onClick={this.activateProject.bind(this, this.props.project.id)}>Aufgaben</button> <button onClick={this.deleteProject.bind(this, this.props.project.id)}>löschen</button>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func,
  activateProject: PropTypes.func
}

export default ProjectItem;
