import React, { Component } from 'react';
import Projects from './Components/Projects'
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

  render() {
    return (
      <div className="App">
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
