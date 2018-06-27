import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  render() {
    let ProjectItems;
    if(this.props.projects) {
      ProjectItems = this.props.projects.map(project => {
        return(
          <ProjectItem key={project.title} project={project} />
        );
      });
    }

    return (
      <div className="Projects">
        {ProjectItems}
      </div>
    );
  }
}

export default Projects;
