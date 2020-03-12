import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ModuleContent from '../../shared/modules/ModuleContent';
import modules from '../../shared/modules/modules'

const BehaviorialQuestions = () => {
    const classes = styles()
    const [behaviorial] = modules.filter(module => module.title === "Behaviorial Questions");
    return (
        <ModuleContent
            title={behaviorial.title}
            description={behaviorial.description}
        />
    );
}

const styles = makeStyles(theme => ({

}))

export default BehaviorialQuestions