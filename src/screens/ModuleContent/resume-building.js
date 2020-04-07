import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";
import ModulePagination from "shared/modules/ModulePagination";

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
        paddingTop: "68.9655172%"
    },
    downloadHere: {
        marginLeft: "auto"
    }
}));

export default Resumes;
