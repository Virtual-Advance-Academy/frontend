import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ModuleContent from '../../shared/modules/ModuleContent';
import modules from '../../shared/modules/modules'

const Networking = () => {
    const classes = styles()
    const [networking] = modules.filter(module => module.title === "Networking & Pitching");
    return (
        <ModuleContent
            title={networking.title}
            description={networking.description}
            image={networking.image}
        />
    );
}

const styles = makeStyles(theme => ({

}))

export default Networking