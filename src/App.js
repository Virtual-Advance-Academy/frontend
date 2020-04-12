import React, { Component } from "react";
import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page from "./shared/Page";
import Main from "./screens/Main";
import Login from "./screens/Login";
import ModuleRoutes from "shared/ModuleRoutes";
import Profile from "screens/Profile";
import SurveyPage from "screens/SurveyPage";
import withAuthentication from "shared/withAuthentication";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Page>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route
                            path="/profile"
                            exact
                            component={withAuthentication(Profile)}
                        />
                        <Route
                            path="/modules"
                            exact
                            component={withAuthentication(Main)}
                        />
                        <Route
                            path="/modules"
                            component={withAuthentication(ModuleRoutes)}
                        />
                        <Route
                            path="/survey"
                            exact
                            component={withAuthentication(SurveyPage)}
                        />
                        {/* This is a catch-all route */}
                        <Route component={null} />
                    </Switch>
                </Page>
            </BrowserRouter>
        );
    }
}

export default App;
