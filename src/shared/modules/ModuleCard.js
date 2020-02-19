import React, { useState } from 'react'
import { Card, CardHeader, CardContent, CardActions, Button, makeStyles, Avatar, CardMedia, Typography, CircularProgress, Grid } from '@material-ui/core';
import { CheckCircle, RadioButtonUnchecked } from '@material-ui/icons';
import { Link, useRouteMatch } from 'react-router-dom';

const CompletionBadge = ({ completion }) => {
    const classes = styles()
    return (
        <Avatar className={classes.avatar}>
            <CircularProgress variant="static" value={completion % 100} />
            {completion < 100 && <RadioButtonUnchecked className={classes.completeCheck} />}
            {completion === 100 && <CheckCircle className={classes.completeCheck} />}
        </Avatar>
    )
}

const ModuleCard = ({ title, description, image, completion = 0, slug }) => {
    let [raised, setRaised] = useState(false)
    const classes = styles()
    const match = useRouteMatch()
    return (
        <Card raised={raised}
            onMouseEnter={() => setRaised(true)}
            onMouseLeave={() => setRaised(false)}
            className={classes.moduleCard}
            //Dim the card if it's complete
            style={(completion === 100) ? { opacity: .6 } : {}}
            classes={{
                root: classes.cardRoot
            }}>
            <CardHeader
                title={<Typography variant="h6">{title}</Typography>}
                action={<CompletionBadge completion={completion} />}
                classes={{
                    action: classes.actionOverride
                }}
            />
            <CardMedia
                image={require(`assets/modules/${image}.png`)}
                className={classes.cardImg}
            />
            <CardContent>
                <Typography variant="body2" >
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.getStarted} size="large" component={Link} to={`${match.path}/${slug}`} color="primary">
                    Get Started
                </Button>
            </CardActions>
        </Card>
    );
}

const styles = makeStyles(theme => ({
    moduleCard: {
        // Provide some spacing between cards
        margin: 16,

        // Use flex layout with column direction for components in the card
        // (CardContent and CardActions)
        display: "flex",
        flexDirection: "column",

        // Justify the content so that CardContent will always be at the top of the card,
        // and CardActions will be at the bottom
        justifyContent: "space-between",
        flexGrow: 1
    },
    cardImg: {
        paddingTop: '68.9655172%'
    },
    cardRoot: {
        backgroundColor: "#2b2730"
    },
    completeCheck: {
        position: 'absolute'
    },
    getStarted: {
        marginLeft: 'auto'
    },
    avatar: {
        backgroundColor: 'transparent',
        color: theme.palette.common.white
    },
    actionOverride: {
        marginTop: 0
    }
}))

export default ModuleCard;