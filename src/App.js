import React, { Component } from 'react'
import './App.css';
import NavBar from './shared/NavBar'
// import Home from './screens/Home';
// import Main from './screens/Main';
// import Survey from './screens/Survey';

  class App extends Component {
    render() {
      return (
        <div>
          <NavBar />
          <span>This page was deployed via GitHub Actions</span>
        </div>
      )
    }
  }

export default App;
