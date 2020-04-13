import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import modules from "./modules/moduleData";

const ModuleRoutes = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            {modules.map((module) => {
                return (
                    <Route
                        key={module.id}
                        exact
                        path={`${match.path}/${module.slug}/:page?`}
                        component={module.component}
                    />
                );
            })}
        </Switch>
    );
};

export default ModuleRoutes;
