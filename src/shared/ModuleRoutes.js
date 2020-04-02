import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import modules from "./modules/modules";

const ModuleRoutes = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            {modules.map((module) => {
                return (
                    <Route
                        key={module.id}
                        path={`${match.path}/${module.slug}`}
                        component={module.component}
                    />
                );
            })}
        </Switch>
    );
};

export default ModuleRoutes;
