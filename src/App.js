import React, { Component } from 'react'
import './App.css';
import Home from './screens/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page from './shared/Page';
// import ColorScheme from './shared/ColorScheme';
// import Main from './screens/Main';
// import Survey from './screens/Survey';

  class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={Page} /> { /* This is a catch-all route */ }
          </Switch>
        </BrowserRouter>
      )
    }
  }

export default App;
