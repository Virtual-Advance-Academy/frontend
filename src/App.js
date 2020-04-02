import React, { Component } from "react";
import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page from "./shared/Page";
import Main from "./screens/Main";
import Login from "./screens/Login";
// import Survey from './screens/Survey';
import ModuleRoutes from "shared/ModuleRoutes";
import Profile from "screens/Profile";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Page>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/modules" exact component={Main} />
                        <Route path="/modules" component={ModuleRoutes} />
                        {/*This is a catch all route*/}
                        <Route component={null} />
                    </Switch>
                </Page>
            </BrowserRouter>
        );
    }
}

export default App;
