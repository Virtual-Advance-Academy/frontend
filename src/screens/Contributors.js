import React, { useState } from "reactn";
import contributors from "../shared/ContributorsData";
import ScrollToTop from "shared/ScrollToTop";
import {
    Grid,
    Typography,
    Zoom,
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    makeStyles,
    Chip
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import clsx from "clsx";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

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
            <Grid container justify="center" alignContent="center">
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
                                    linkedin={contributor.linkedin}
                                    github={contributor.github}
                                />
                            </Grid>
                        </Zoom>
                    );
                })}
            </Grid>
        </>
    );
};

const ContributorCard = ({
    image,
    name,
    biography,
    loading = false,
    linkedin,
    github
}) => {
    let [raised, setRaised] = useState(false);
    const classes = styles();

    let imgSrc;

    try {
        imgSrc = require(`assets/contributors/${image}.jpg`);
    } catch (e) {
        imgSrc = "";
    }

    const handleClick = () => {
        console.info("You clicked the Chip.");
    };

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
                <Grid container justify="center" className={classes.avatar}>
                    <Avatar
                        alt="Contributor"
                        src={imgSrc}
                        className={classes.contributorImg}
                    />
                </Grid>
                <CardContent className={classes.content}>
                    <Typography
                        variant="h6"
                        className={classes.contributorName}
                    >
                        {name}
                    </Typography>
                    {!loading && (
                        <Typography
                            variant="body2"
                            className={classes.contributorBio}
                        >
                            {biography}
                        </Typography>
                    )}
                    {loading && (
                        <>
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />s
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" width="85%" />
                        </>
                    )}
                </CardContent>
            </div>
            <div className={classes.centerPls}>
                <CardActions justifyContent="center">
                    <Chip
                        icon={<LinkedInIcon color="action" fontSize="small" />}
                        label="LinkedIn"
                        clickable
                        variant="outlined"
                        color="primary"
                        href={linkedin}
                        component="a"
                    />
                    <Chip
                        icon={<GitHubIcon color="action" fontSize="small" />}
                        label="GitHub"
                        href={github}
                        clickable
                        variant="outlined"
                        color="primary"
                        component="a"
                    />
                </CardActions>
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
        flex: "0 1 290px",
        [theme.breakpoints.down("sm")]: {
            flexGrow: 1
        }
    },
    moduleGrid: {},
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
        paddingTop: 32
    },
    content: {
        paddingTop: 12
    },
    contributorImg: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: "unset"
    },
    contributorName: {
        fontWeight: 200,
        textAlign: "center",
        padding: theme.spacing(1)
    },
    contributorBio: {
        fontWeight: 400,
        textAlign: "center"
    }
}));

export default Contributors;
