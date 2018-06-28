import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  activateProject(id){
    this.props.activateProject(id);
  }

  render() {
    let ProjectItems;
    if(this.props.projects) {
      ProjectItems = this.props.projects.map(project => {
        return(
          <ProjectItem activateProject={this.activateProject.bind(this)} onDelete={this.deleteProject.bind(this)} key={project.id} project={project} />
        );
      });
    }

    return (
      <div className="Projects">
        <h3>Projekte</h3>
        {ProjectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default Projects;
