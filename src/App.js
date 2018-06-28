import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      activeProject: ''
    }
  }

  componentWillMount() {
    let initState = {projects: [
        {
          id: uuid.v4(),
          title: 'Verpflegung bereitstellen',
          category: 'Zufriedenheit',
          todos: [
            {
              id: uuid.v4(),
              title: 'Kaffee kochen'
            },{
              id: uuid.v4(),
              title: 'Brötchen schmieren'
            }]
        },
        {
          id: uuid.v4(),
          title: 'Arbeitsplatz einrichten',
          category: 'Effizents',
          todos: [
            {
              id: uuid.v4(),
              title: 'PC einrichten'
            }]
        },
        {
          id: uuid.v4(),
          title: 'Gespräch führen',
          category: 'Feedback',
          todos: [
            {
              id: uuid.v4(),
              title: 'analysieren'
            },{
              id: uuid.v4(),
              title: 'auswerten'
            },{
              id: uuid.v4(),
              title: 'bewerten'
            }]
        }
      ],
      activeProject: ''
    };
      let projects = initState.projects;
      this.setState({projects: projects, activeProject: projects[0].id});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects, activeProject: this.state.activeProject});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects, activeProject: this.state.activeProject});
  }

  handleactivateProject(id){
    let projects = this.state.projects;
    this.setState({projects: projects, activeProject: id});
  }

  handleDeleteTodo(id){
    let projects = this.state.projects;
    let projectIndex = this.state.projects.findIndex(x => x.id === this.state.activeProject);
    let index = projects[projectIndex].todos.findIndex(x => x.id === id);
    projects[projectIndex].todos.splice(index, 1);
    this.setState({projects: projects, activeProject: this.state.activeProject});
  }

  handleAddTodo(todo){
    let projects = this.state.projects;
    let projectIndex = this.state.projects.findIndex(x => x.id === this.state.activeProject);
    projects[projectIndex].todos.push(todo);
    this.setState({projects: projects, activeProject: this.state.activeProject});
  }

  render() {
    let index = this.state.projects.findIndex(x => x.id === this.state.activeProject);
    return (
      <div className="App">
        <AddProject AddProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} activateProject={this.handleactivateProject.bind(this)}/>
        <AddTodo AddTodo={this.handleAddTodo.bind(this)} />
        <Todos todos={this.state.projects[index].todos} onDelete={this.handleDeleteTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
