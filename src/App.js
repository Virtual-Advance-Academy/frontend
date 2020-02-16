import React, { Component } from 'react'
import './App.css';
import Page from './shared/Page'
import Home from './screens/Home';
// import ColorScheme from './shared/ColorScheme';
// import Main from './screens/Main';
// import Survey from './screens/Survey';

  class App extends Component {
    render() {
      return (
        <>
          <Page>
            <Home />
          </Page>
        </>
      )
    }
  }

export default App;
