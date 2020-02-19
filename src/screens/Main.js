import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ModuleCard from '../shared/modules/ModuleCard';
import modules from 'shared/modules/modules'

const Main = () => {
    const classes = styles()
    return (
        <Container maxWidth='xl'>
            <Grid item>
                <Typography className={classes.title} variant="h2" component="h1" color="primary">
                    Welcome back, Carolina!
                </Typography>
            </Grid>
            <Grid item container spacing={0}>
                {modules.map((module) =>
                    (
                        <Grid key={module.id} item className={classes.card}>
                            <ModuleCard
                                image={module.image}
                                title={module.title}
                                description={module.description}
                                completion={Math.floor((Math.random() * 11)) * 10}
                                slug={module.slug}
                            />
                        </Grid>
                    )
                )}

            </Grid>
        </Container>
    );
}

const styles = makeStyles(theme => ({
    title: {
        margin: '20px 0'
    },
    card: {
        display: "flex",
        flex: "1 1 300px"
    }
}))

export default Main