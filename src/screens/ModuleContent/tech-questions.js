import React from "react";
import {
    Grid,
    Typography,
    Container,
    makeStyles,
    Card,
    CardActionArea,
    CardContent,
    CardMedia
} from "@material-ui/core";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";
import ModulePagination from "shared/modules/ModulePagination";
const TechnicalQuestions = () => {
    const classes = styles();
    const [technical] = modules.filter(
        (module) => module.title === "Technical Questions"
    );
    return (
        <Container className={classes.container}>
            <ModuleContent
                title={technical.title}
                description={technical.description}
                image={technical.image}
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
                                Technical interviews can seem intimidating, but
                                once you are aware of the process, you prepare,
                                and you do a few, you’ll be on track to
                                receiving an offer.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                            gutterBottom
                        >
                            Virtual Interviews
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                Virtual technical interviews vary in format,
                                here we will go over a couple of the main ones.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                Screen Share
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                If your interview will be a screen sharing
                                session, you can likely expect the interviewer
                                will give you a link to an online coding editor
                                with a question already loaded. Alternatively,
                                they will tell you to pick your favorite code
                                editor and then tell you the coding question.
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                Your recruiter typically will tell you the
                                format before. This style of virtual interviews
                                is for the interviewer to see how you approach a
                                problem, to see your thinking process and then
                                see you solve it.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                Take Home Project
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Take home projects are typically a bit more
                                challenging, but you usually have the advantage
                                of using any online resources you find to solve
                                the problem. You are typically given 24-48 hours
                                to solve the problem and submit your work.
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                This style is used because it is the closest to
                                how you would actually perform at work. At work
                                you have access to online resources, so why
                                shouldn’t you have that for your interview is
                                the logic.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                HireVue
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                HireVue’s are modular virtual interviews. It can
                                include multiple programming questions as well
                                as behavioral questions such as “walk me through
                                your logic when solving the previous problem”.
                                This platform is great because you can complete
                                the interview at any time, and then your
                                potential employer can assess your technical
                                ability as well as your soft skills.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                Phone Calls
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                If you are scheduled for a regular phone call,
                                you can expect questions about your technical
                                experience, general technical discussions or
                                questions.
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                You should be prepared to talk about your
                                personal projects or experiences in detail as
                                well as be familiar with the skills you listed
                                on your resume.
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Questions could be anything from:{" "}
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>
                                    “What are your two favorite programming
                                    languages? Okay great, now tell me the
                                    differences between the two of them.”
                                </li>
                                <li>
                                    “Compare and contrast REST and SOAP web
                                    services.”
                                </li>
                                <li>
                                    “What is clustering, and describe its use?”
                                </li>
                                <li>
                                    “How do you enforce relational integrity in
                                    database design?”
                                </li>
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
        padding: "15%"
    },
    downloadHere: {
        marginLeft: "auto"
    },
    a: {
        color: "#BB86FC"
    }
}));

export default TechnicalQuestions;
