import React, { useGlobal, useState, useEffect } from "reactn";
import { Grid, Typography, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleCard from "../shared/modules/ModuleCard";
import contributors from "../shared/ContributorsData";
import ScrollToTop from "shared/ScrollToTop";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    CircularProgress
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { CheckCircle } from "@material-ui/icons";
import clsx from "clsx";
import { Link, useRouteMatch } from "react-router-dom";

const Contributors = () => {
    const classes = styles();

    return (
        <>
            <ScrollToTop />
            <Grid item>
                <Typography
                    className={classes.title}
                    variant="h2"
                    component="h1"
                    color="primary"
                >
                    Contributors
                </Typography>
            </Grid>
            <Grid
                item
                container
                spacing={0}
                justify="center"
                className={classes.moduleGrid}
            >
                {contributors.map((contributor, i) => {
                    return (
                        <Zoom
                            in
                            style={{
                                transitionDelay: `calc(.25s + ${i * 100}ms)`
                            }}
                        >
                            <Grid
                                key={contributor.id}
                                item
                                className={classes.card}
                            >
                                <ContributorCard
                                    image={contributor.image}
                                    name={contributor.name}
                                    biography={contributor.biography}
                                    grad={contributor.grad}
                                />
                            </Grid>
                        </Zoom>
                    );
                })}
            </Grid>
        </>
    );
};

const ContributorCard = ({ image, name, biography, grad, loading = false }) => {
    let [raised, setRaised] = useState(false);
    const classes = styles();
    const match = useRouteMatch();

    let imgSrc;

    try {
        imgSrc = require(`assets/contributors/${image}.jpg`);
    } catch (e) {
        imgSrc = "";
    }

    return (
        <Card
            raised={raised}
            onMouseEnter={() => setRaised(true)}
            onMouseLeave={() => setRaised(false)}
            className={clsx(classes.moduleCard)}
            // Light up the card on hover
            style={raised ? { opacity: 1 } : {}}
            classes={{
                root: classes.cardRoot
            }}
        >
            <div>
                <CardHeader
                    avatar={
                        <Avatar
                            alt="Contributor"
                            src={imgSrc}
                            className={classes.contributorImg}
                        />
                    }
                    classes={{
                        action: classes.actionOverride
                    }}
                />
                <CardContent>
                    {!loading && (
                        <Typography variant="body2">{biography}</Typography>
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
        </Card>
    );
};

const styles = makeStyles((theme) => ({
    title: {
        margin: "20px 0"
    },
    card: {
        display: "flex",
        flex: "1 1 290px"
    },
    moduleGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))"
    },
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
    cardRoot: {
        backgroundColor: "#2b2730"
    },
    avatar: {
        backgroundColor: "transparent",
        color: theme.palette.common.white,
        transform: "rotateY(180deg)",
        position: "absolute",
        backfaceVisibility: "hidden"
    },
    actionOverride: {
        marginTop: 0
    },
    contributorImg: {
        width: theme.spacing(20),
        height: theme.spacing(20)
        // alignSelf: "center",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // flex: 1,
        // display: "flex"
    },
    heading: {
        alignItems: "center",
        justifyContent: "center"
    }
}));

export default Contributors;
