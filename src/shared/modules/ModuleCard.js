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
import Skeleton from "@material-ui/lab/Skeleton";
import { CheckCircle } from "@material-ui/icons";
import clsx from "clsx";
import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const CompletionBadge = ({ completion, loading = false }) => {
    const classes = styles();
    const completionText = `${Math.floor(completion)}%`;
    return (
        <Avatar className={classes.avatar}>
            {!loading && (
                <>
                    <CircularProgress
                        variant="static"
                        value={completion % 100}
                    />
                    {completion < 100 && completion > 0 && (
                        <Typography
                            variant="caption"
                            className={classes.completeCheck}
                        >
                            {completionText}
                        </Typography>
                    )}
                    {completion === 100 && (
                        <CheckCircle className={classes.completeCheck} />
                    )}
                </>
            )}
            {loading && (
                <Skeleton variant="circle" height="100%" width="100%" />
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
    loading = false
}) => {
    let [raised, setRaised] = useState(false);
    const classes = styles();
    const match = useRouteMatch();

    let imgSrc;

    try {
        imgSrc = require(`assets/modules/${image}.png`);
    } catch (e) {
        imgSrc = "";
    }

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
                    title={
                        loading ? (
                            <Skeleton width="90%" />
                        ) : (
                            <Typography variant="h6">{title}</Typography>
                        )
                    }
                    action={
                        <CompletionBadge
                            loading={loading}
                            completion={completion}
                        />
                    }
                    classes={{
                        action: classes.actionOverride
                    }}
                />
                {loading && (
                    <Skeleton variant="rect" className={classes.cardImg} />
                )}
                {!loading && (
                    <CardMedia image={imgSrc} className={classes.cardImg} />
                )}
                <CardContent>
                    {!loading && (
                        <Typography variant="body2">{description}</Typography>
                    )}
                    {loading && (
                        <>
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" width="85%" />
                        </>
                    )}
                </CardContent>
            </div>
            <CardActions>
                <Button
                    className={classes.getStarted}
                    size="large"
                    component={slug ? Link : "button"}
                    to={`${match.path}/${slug}`}
                    color="primary"
                >
                    {!loading && (
                        <>
                            {completion === 100 && "Review"}
                            {completion < 100 && completion > 0 && "Continue"}
                            {completion === 0 && "Get Started"}
                        </>
                    )}
                    {loading && <Skeleton variant="text" width={100} />}
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
