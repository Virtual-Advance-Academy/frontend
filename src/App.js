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
import { withBigContainer } from "shared/BigContainer";
import Contributors from "screens/Contributors";
import Helmet from "react-helmet";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Helmet
                    titleTemplate="%s &ndash; Advance Academy: Online"
                    defaultTitle="Advance Academy: Online"
                />
                <Page>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route
                            path="/profile"
                            exact
                            component={withAuthentication(
                                withBigContainer(Profile)
                            )}
                        />
                        <Route
                            path="/modules"
                            exact
                            component={withAuthentication(
                                withBigContainer(Main)
                            )}
                        />
                        <Route
                            path="/modules"
                            component={withAuthentication(
                                withBigContainer(ModuleRoutes)
                            )}
                        />
                        <Route
                            path="/survey"
                            exact
                            component={withAuthentication(
                                withBigContainer(SurveyPage)
                            )}
                        />
                        <Route
                            path="/contributors"
                            exact
                            component={withBigContainer(Contributors)}
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
