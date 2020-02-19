import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ModuleCard from '../shared/modules/ModuleCard';

const Main = () => {
    const classes = styles()
    return (
        <Container>
            <Grid item lg>
                <Typography className={classes.title} variant="h2" color="primary">
                    Welcome back, Carolina!
                </Typography>
            </Grid>
            <Grid item lg container>
                <Grid>
                    <ModuleCard>

                    </ModuleCard>
                </Grid>
            </Grid>
        </Container>
    );
}

const styles = makeStyles(theme => ({
    title: {
        margin: '20px 0'
    }
}))

export default Main