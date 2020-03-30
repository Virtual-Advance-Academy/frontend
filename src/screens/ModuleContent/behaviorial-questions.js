import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ModuleContent from '../../shared/modules/ModuleContent';
import modules from '../../shared/modules/modules'

const BehaviorialQuestions = () => {
    const classes = styles()
    const [behaviorial] = modules.filter(module => module.title === "Behaviorial Questions");
    return (
        <Container className={classes.container}>
            <ModuleContent
                title={behaviorial.title}
                description={behaviorial.description}
                image={behaviorial.image}
            />
            <Grid container>
                <Typography className={classes.contentHeader} variant="h5" color="#D8D8D8">Introduction</Typography>
            </Grid>
            <Grid container
                justify="center"
            >
                <Grid item>
                    <Typography className={classes.contentDescription} variant="body1" color="#D8D8D8">
                        <span>Companies are like a jigsaw puzzle, each piece is unique and they all come together to form one big picture
                        just as each employee brings their one-of-a-kind energy, personality and skillset to the table yet when they
                        all come together they are one harmonious organization.</span>

                        <span> When an interviewer asks you behavioral interview questions,
                        they’re seeing how your character fits into their puzzle. Knowing Java alone doesn’t make you stand out, but
                        the collection of your stories, your personal projects and your background do.</span>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Typography className={classes.contentHeader} variant="h5" color="#D8D8D8">Preparation</Typography>
            </Grid>
            <Grid container
                justify="center"
            >
                <Grid item>
                    <Typography className={classes.contentDescription} variant="body1" color="#D8D8D8">
                        <span>To prepare for behavioral interviews, Gayle Laakmann, created a resume grid where you can diagram your stories. </span>

                        <span>  </span>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

const styles = makeStyles(theme => ({
    container: {
        maxWidth: 1500
    },
    contentHeader: {
        fontWeight: '500',
        padding: theme.spacing(3),
    },
    contentDescription: {
        textAlign: 'left',
        justify: 'center',
        maxWidth: 1200,
        display: "inline-block",
        "& span": {
            display: "block"
        }
    },
    titleSpacing: {
        textAlign: 'left',
        marginRight: "80px",
        [theme.breakpoints.down("xs")]: {
            marginRight: "unset"
        }
    },
}))

export default BehaviorialQuestions