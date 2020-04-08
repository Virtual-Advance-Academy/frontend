import React from "react";
import { Grid, Typography, Container, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";
import ModulePagination from "shared/modules/ModulePagination";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

import resume1 from "../../assets/modules/content/resume1.jpeg";
import resume2 from "../../assets/modules/content/resume2.jpeg";
import resume3 from "../../assets/modules/content/resume3.jpeg";

import resume1file from "../../assets/resumes/FirstName_LastName.doc";

const Resumes = () => {
    const classes = styles();
    const [resumes] = modules.filter(
        (module) => module.title === "Resume Building"
    );
    return (
        <Container className={classes.container}>
            <ModuleContent
                title={resumes.title}
                description={resumes.description}
                image={resumes.image}
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
                                A resume is a formal document that gives
                                recruiters a glimpse into your project
                                experience, work experience, skills, leadership
                                roles, education, and more. Having a polished,
                                simple, but informational resume is key to
                                landing your dream internship or job.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                        >
                            Resume Format
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                You should cater your resume based on the
                                position you are applying for and the company
                                you are applying for.
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                For example, if you’re applying for a UI/UX
                                role, your resume can be untraditional with
                                color and designs to showcase your talent. If
                                you’re applying for a Software Engineering role,
                                your resume can be more on the traditional side
                                with a pop of color (depending on the company).
                                If you’re unsure of the standard for the
                                role/company, it is safe to submit a
                                traditional, polished resume.
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
                                General Rules
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>Max 1 page</li>
                                <li>0.5-1 inch margins</li>
                                <li>
                                    Bold your name so that it stands out and use
                                    a 14-16pt font
                                </li>
                                <li>
                                    The content of your resume should use a
                                    9-12pt font
                                </li>
                                <li>Everything should be in third person</li>
                                <li>
                                    Try to avoid using graphics if you’re
                                    applying online because many companies
                                    automatically filter out resumes. Resumes
                                    with images are difficult to process and
                                    might never be looked at by a real person.
                                </li>
                                <li>
                                    Every sentence should begin with an action
                                    verb, check out{" "}
                                    <a
                                        href="https://studentaffairs.fiu.edu/academic-success/career-and-talent-development/handouts-and-resources/_assets/ResumeActionWords.pdf"
                                        className={classes.a}
                                    >
                                        FIU Student Affairs list.
                                    </a>
                                </li>

                                <li>
                                    Be consistent with items such as font sizes
                                    and styles.
                                </li>
                            </Typography>
                        </Grid>
                    </Grid>
                </ModulePagination.Page>
                <ModulePagination.Page>
                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                        >
                            Traditional 1-Column Resume Example
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={6}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={resume1}
                                        title="Classic"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            Classic Resume
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            This is an ideal resume for the
                                            majority of job or internship
                                            applications.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        className={classes.downloadHere}
                                        size="small"
                                        color="primary"
                                    >
                                        <a
                                            href={resume1file}
                                            className={classes.a}
                                        >
                                            Download Here
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </ModulePagination.Page>

                <ModulePagination.Page>
                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                        >
                            Modern 2-Column Resume Example
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={6}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={resume2}
                                        title="Modern Resume"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            Modern Resume
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            This resume is great for freshman
                                            and sophomore students looking to
                                            gain more experience. This resume is
                                            from Canva, an easy to use graphic
                                            design software. Canva is an amazing
                                            tool to develop resumes if you're
                                            looking to create something less
                                            traditional and unique to you!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        className={classes.downloadHere}
                                        size="small"
                                        color="primary"
                                    >
                                        <a
                                            href="https://www.canva.com"
                                            className={classes.a}
                                        >
                                            Canva
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </ModulePagination.Page>

                <ModulePagination.Page>
                    <Typography
                        className={classes.contentHeader}
                        variant="h5"
                        color="primary"
                        gutterBottom
                    >
                        Items to Include
                    </Typography>
                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                Personal Information
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>Full name</li>
                                <li>Phone Number</li>
                                <li>Non-university email (preferred)</li>
                                <li>Your current city and state</li>
                                <li>LinkedIn URL (suggested)</li>
                                <li>GitHub URL (suggested)</li>
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
    bulletDescription: {
        textAlign: "left",
        justify: "center",
        color: "#D8D8D8",
        maxWidth: 550,
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
        paddingTop: "68.9655172%",
        height: 2000
    },
    downloadHere: {
        marginLeft: "auto"
    },
    a: {
        color: "#BB86FC"
    },
    resume: {
        maxWidth: 1000
    },
    media: {
        paddingTop: "69.9655172%",
        padding: "49.50%"
    },
    downloadHere: {
        marginLeft: "auto"
    }
}));

export default Resumes;
