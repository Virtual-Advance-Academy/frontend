import React, { Component } from 'react'
import './App.css';
import NavBar from './shared/NavBar/'
import Home from './screens/Home';
import ColorScheme from './shared/ColorScheme';
// import Main from './screens/Main';
// import Survey from './screens/Survey';

  class App extends Component {
    render() {
      return (
        <div>
          <NavBar />
          <Home />
          {/* <ColorScheme /> */}
        </div>
      )
    }
  }

export default App;
