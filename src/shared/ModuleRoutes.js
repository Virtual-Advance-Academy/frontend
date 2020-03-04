import React from 'react'
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import modules from './modules/modules'

const ModuleRoutes = () => {
    const { slug } = useParams();
    const match = useRouteMatch();
    const Test = ({module}) => {
        {console.log(module)}
        return (<div>Test</div>)
    }
    return (
        <Switch>
            {modules.map((module) => {
                return (
                    <Route key={module.id} path={`${match.path}/${module.slug}`} component={module.component} />
                )
            })}
        </Switch>
    )
}

export default ModuleRoutes;