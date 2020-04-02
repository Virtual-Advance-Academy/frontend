import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ModuleContent from '../../shared/modules/ModuleContent';
import modules from '../../shared/modules/modules'

const InternshipTypes = () => {
    const classes = styles()
    const [internships] = modules.filter(module => module.title === "Types of Internships");
    return (
        <ModuleContent
            title={internships.title}
            description={internships.description}
            image={internships.image}
        />
    );
}

const styles = makeStyles(theme => ({

}))

export default InternshipTypes