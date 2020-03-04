import React, { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';

const ModuleContent = ({ title, description}) => {
    let [raised, setRaised] = useState(false)
    const classes = styles()
    const match = useRouteMatch()
    return (
        <Typography variant="h2" component="h1" color="primary">{title}</Typography>
    );
}

const styles = makeStyles(theme => ({
    
}))

export default ModuleContent;