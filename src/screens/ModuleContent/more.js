import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ModuleContent from '../../shared/modules/ModuleContent';
import modules from '../../shared/modules/modules'

const More = () => {
    const classes = styles()
    const [more] = modules.filter(module => module.title === "Hungry for more?");
    return (
        <ModuleContent
            title={more.title}
            description={more.description}
        />
    );
}

const styles = makeStyles(theme => ({

}))

export default More