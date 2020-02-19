import React, { useState } from 'react'
import { Card, CardHeader, IconButton, CardContent, CardActions, Button, makeStyles, Avatar, CardMedia, Typography, CircularProgress } from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { Link } from 'react-router-dom';

const ModuleCard = (props) => {
    let [raised, setRaised] = useState(false)
    const classes = styles()
    return (
        <Card raised={raised}
            onMouseEnter={() => setRaised(true)}
            onMouseLeave={() => setRaised(false)}
            className={classes.moduleCard}>
            <CardHeader
                title={<Typography variant="h5">Types of Internships</Typography>}
                action={<Avatar>
                	<CircularProgress variant="static" value={50} />
                    <CheckCircleRoundedIcon className={classes.completeCheck}/>
                </Avatar>}
            />
            <CardMedia
            />
            <CardContent>
                Learn about various types of internships available in the field, how requirements change for different types of internships & about company culture
            </CardContent>
            <CardActions>
                <Button component={Link} to="/" color="primary">
                    Get Started
                </Button>
            </CardActions>
        </Card>
    );
}

const styles = makeStyles(theme => ({
    moduleCard: {
        maxWidth: 300
    },
    completeCheck:{
        position: 'absolute'
    }
}))

export default ModuleCard;