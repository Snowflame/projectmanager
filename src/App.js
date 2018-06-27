import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({projects: [
      {
        title: 'Verpflegung bereitstellen',
        category: 'Zufriedenheit'
      },
      {
        title: 'Arbeitsplatz einrichten',
        category: 'Effizents'
      },
      {
        title: 'Gespräch führen',
        category: 'Feedback'
      }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject AddProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
