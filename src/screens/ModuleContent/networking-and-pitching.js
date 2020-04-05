import React from "react";
import { Grid, Typography, Container, Divider, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import ModulePagination from "shared/modules/ModulePagination";

const Networking = () => {
    const classes = styles();
    const [networking] = modules.filter(
        (module) => module.title === "Networking & Pitching"
    );
    return (
        <Container className={classes.container}>
            <ModuleContent
                title={networking.title}
                description={networking.description}
                image={networking.image}
            />
            <ModulePagination>
                <ModulePagination.Page>
                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                            gutterBottom
                        >
                            Introduction
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                Networking is how you can put yourself out there
                                to the world and for people to know the person
                                behind the resume. There are plenty of
                                networking opportunities, you should try to
                                attend as many in-person events as you can and
                                be active online!
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                        >
                            Conferences
                        </Typography>
                    </Grid>

                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                Conferences are massive spaces to network,
                                learn, and develop new skills. Most conferences
                                cater towards a specific demographic, such as
                                women, hispanics, african americans, designers,
                                or entrepreneurs. Check out some of Advance’s
                                top picks below!
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                <Link
                                    href="https://ghc.anitab.org"
                                    color="inherit"
                                >
                                    Grace Hopper Celebration
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                "Grace Hopper Celebration is the world's largest
                                gathering of women technologists. It is produced
                                by AnitaB.org and presented in partnership with
                                ACM." 
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                <Link
                                    href="https://www.shpe.org/events/national-convention-2020"
                                    color="inherit"
                                >
                                    National SHPE Convention
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                "The SHPE National Convention serves as the
                                country’s largest gathering of Hispanic STEM
                                students and professionals, offering a unique
                                opportunity to engage, support, educate and
                                advance the careers of Hispanic students and
                                professionals. We encourage all who are invested
                                in Hispanics in STEM -students, professionals,
                                academics, hiring managers, and recruiters "
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                <Link
                                    href="http://tapiaconference.org"
                                    color="inherit"
                                >
                                    Richard Tapia Conference
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                "The Tapia conference is the premier venue to
                                acknowledge, promote and celebrate diversity in
                                computing."
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                <Link
                                    href="https://s4.goeshow.com/ccgroup/beyastem/2020/index.cfm"
                                    color="inherit"
                                >
                                    BEYA Stem Conference
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                "Black Engineer of the Year Award (BEYA) STEM
                                Conference brings professionals and students
                                together for three days to share their
                                experiences and career information. You can
                                network with attendees from around the country
                                while participating in seminars and workshops
                                that explore every facet of STEM career paths."
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                <Link
                                    href="https://events.google.com/io"
                                    color="inherit"
                                >
                                    Google I/O
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                "Google I/O is an annual developer conference
                                held by Google in Mountain View, California.
                                "I/O" stands for input/output, as well as the
                                slogan "Innovation in the Open". The event's
                                format is similar to Google Developer Day."
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                <Link
                                    href="https://emergeamericas.com"
                                    color="inherit"
                                >
                                    eMerge Americas
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                "At eMerge Americas, we’re transforming Miami
                                into the tech hub of the Americas by partnering
                                with the entire tech and entrepreneurial
                                ecosystem, from government to higher-ed,
                                startups to investors, corporate enterprises to
                                media. We’re connecting the dots – between
                                talent, capital and entrepreneurs. And we’re
                                telling – and amplifying – the stories of how
                                Miami is transforming. We’re attracting the best
                                and the brightest from around the world to come
                                to Miami to launch, build, and successfully
                                scale their ideas. We believe Miami can serve as
                                a gateway to the Americas and help bridge
                                divides while fueling innovation and building
                                out a sustainable, diverse and inclusive
                                ecosystem."
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                <Link
                                    href="https://techconferences.co"
                                    color="inherit"
                                >
                                    Curious about other events?
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                This is a great source to check out other tech
                                conferences across the world! You can filter by
                                country and then month.
                            </Typography>
                        </Grid>
                    </Grid>
                </ModulePagination.Page>
            </ModulePagination>
        </Container>
    );
};

const styles = makeStyles((theme) => ({
    container: {
        maxWidth: 1500
    },
    contentHeader: {
        fontWeight: "700",
        padding: theme.spacing(3),
        marginLeft: "10%"
    },
    subContentHeader: {
        fontWeight: "500",
        padding: theme.spacing(3),
        textAlign: "center",
        justify: "center"
        // marginLeft: '14%',
    },
    contentDescription: {
        textAlign: "left",
        justify: "center",
        color: "#D8D8D8",
        maxWidth: 800,
        display: "block",
        "& span": {
            display: "block"
        }
    },
    subDescription: {
        textAlign: "left",
        justify: "center",
        color: "#D8D8D8",
        maxWidth: 600,
        display: "block",
        "& span": {
            display: "block"
        }
    },
    titleSpacing: {
        textAlign: "left",
        marginRight: "80px",
        [theme.breakpoints.down("xs")]: {
            marginRight: "unset"
        }
    },
    root: {
        maxWidth: 1000
    },
    media: {
        paddingTop: "68.9655172%"
    },
    downloadHere: {
        marginLeft: "auto"
    }
}));

export default Networking;
