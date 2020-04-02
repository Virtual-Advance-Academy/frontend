import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ModuleContent from '../../shared/modules/ModuleContent';
import modules from '../../shared/modules/modules'

const Resumes = () => {
    const classes = styles()
    const [resumes] = modules.filter(module => module.title === "Resume Building");
    return (
        <ModuleContent
            title={resumes.title}
            description={resumes.description}
            image={resumes.image}
        />
    );
}

const styles = makeStyles(theme => ({

}))

export default Resumes