import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    CircularProgress,
    makeStyles,
    Typography
} from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import clsx from "clsx";
import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const CompletionBadge = ({ completion }) => {
    const classes = styles();
    const completionText = `${Math.floor(completion)}%`;
    return (
        <Avatar className={classes.avatar}>
            <CircularProgress variant="static" value={completion % 100} />
            {completion < 100 && (
                <Typography variant="caption" className={classes.completeCheck}>
                    {completionText}
                </Typography>
            )}
            {completion === 100 && (
                <CheckCircle className={classes.completeCheck} />
            )}
        </Avatar>
    );
};

const ModuleCard = ({
    title,
    description,
    image,
    completion = 0,
    slug,
    msDelay = 0
}) => {
    let [raised, setRaised] = useState(false);
    const classes = styles();
    const match = useRouteMatch();

    return (
        <Card
            raised={raised}
            onMouseEnter={() => setRaised(true)}
            onMouseLeave={() => setRaised(false)}
            className={clsx(
                classes.moduleCard,
                completion === 100 && classes.cardDimmed
            )}
            // Light up the card on hover, even if it's completed
            style={raised ? { opacity: 1 } : {}}
            classes={{
                root: classes.cardRoot
            }}
        >
            <div>
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
                    <Typography variant="body2">{description}</Typography>
                </CardContent>
            </div>
            <CardActions>
                <Button
                    className={classes.getStarted}
                    size="large"
                    component={Link}
                    to={`${match.path}/${slug}`}
                    color="primary"
                >
                    {completion === 100 && "Review"}
                    {completion < 100 && completion > 0 && "Continue"}
                    {completion === 0 && "Get Started"}
                </Button>
            </CardActions>
        </Card>
    );
};

const styles = makeStyles((theme) => ({
    moduleCard: {
        // Provide some spacing between cards
        margin: 8,

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
        paddingTop: "68.9655172%"
    },
    cardRoot: {
        backgroundColor: "#2b2730"
    },
    completeCheck: {
        position: "absolute"
    },
    getStarted: {
        marginLeft: "auto"
    },
    avatar: {
        backgroundColor: "transparent",
        color: theme.palette.common.white
    },
    actionOverride: {
        marginTop: 0
    },
    cardDimmed: {
        opacity: 0.6,
        transition: "opacity .3s"
    }
}));

export default ModuleCard;
