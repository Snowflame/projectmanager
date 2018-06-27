import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Projects">
        {this.props.project.title}: {this.props.project.category} <button onClick={this.deleteProject.bind(this, this.props.project.id)}>delete</button>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
