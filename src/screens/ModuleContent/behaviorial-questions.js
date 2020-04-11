import React from "react";
import {
    Grid,
    Typography,
    Container,
    Typography,
    Container,
    makeStyles,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Button,
    CardActions
} from "@material-ui/core";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";
import resumeGrid from "../../assets/modules/resumeGrid.png";
import NSAR from "../../assets/modules/NSAR.png";
import ModulePagination from "shared/modules/ModulePagination";

const BehaviorialQuestions = () => {
    const classes = styles();
    const [behaviorial] = modules.filter(
        (module) => module.title === "Behaviorial Questions"
    );
    return (
        <Container className={classes.container}>
            <ModuleContent
                title={behaviorial.title}
                description={behaviorial.description}
                image={behaviorial.image}
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
                                Companies are like a jigsaw puzzle, each piece
                                is unique and they all come together to form one
                                big picture just as each employee brings their
                                one-of-a-kind energy, personality and skillset
                                to the table yet when they all come together
                                they are one harmonious organization.
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                When an interviewer asks you behavioral
                                interview questions, they’re seeing how your
                                character fits into their puzzle. Knowing Java
                                alone doesn’t make you stand out, but the
                                collection of your stories, your personal
                                projects and your background do.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                        >
                            Preparation
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={3}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                To prepare for behavioral interviews, Gayle
                                Laakmann, created a resume grid where you can
                                diagram your stories.
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={resumeGrid}
                                        title="Resume Grid"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            Resume Grid
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            It is organized by central themes,
                                            such as leadership and influence,
                                            mistakes and failures, challenges,
                                            bugs, scaling, and so on. On the
                                            horizontal axis, you would put each
                                            of your experiences; internships,
                                            leadership roles, hourly-jobs, and
                                            so on. Don't feel pressured to fill
                                            out every single box, only the ones
                                            that are relevant and stand out for
                                            each of the experiences. Check out
                                            our adaptation of Gayle's chart by
                                            downloading your own copy below!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        className={classes.downloadHere}
                                        size="small"
                                        color="primary"
                                    >
                                        Download Here
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                When filling out the grid, it is important to
                                have structured answers so recruiters can
                                clearly understand the scenario, the situation,
                                the actions you took, along with the results.
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={NSAR}
                                        title="Structured Anaswers"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            Structured Answers
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Laakmann uses 'NSAR' to navigate
                                            each story in your resume grid. It
                                            is a useful structure to follow to
                                            ensure your stories are meaningful,
                                            to the point, clear, and showcase
                                            who you are.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
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
                            Types of Questions
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                There are a variety of categories that
                                behavioral questions fall into and it is
                                important to prepare for all the majors ones
                                just in case! Below we have broken up the
                                categories and listed typical questions you
                                might see for them. Sourced from, Florida
                                International University’s UPE Chapter,
                                InternMakers, and Top Echelon.
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
                                Problem Solving
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you give an example of a time you
                                streamlined a process?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you talk about a time when you used your
                                analytical skills to find a problem? How did you
                                discover the problem? What did you do after you
                                discovered it?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you talk about a time you had to make a
                                decision with limited information? How did you
                                determine what would be the best decision?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you tell me about a problem you solved in a
                                unique way? What happened?
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
                                Team Work
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Which role do you usually play in a team?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                What would your teammates say about working with
                                you?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Why would your teammates choose to work with
                                someone else instead of you?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Describe a time when you worked in a team where
                                there were disagreements among the team.
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
                                Leadership
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you tell me about a project you were in
                                charge of? How did you organize the tasks and
                                make sure everything got done?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you describe a time when you were in charge
                                of a project? What would you do differently?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you tell me about a time when you had a
                                difficult group to lead? What did you do to
                                manage them?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you describe something that challenged you
                                as a leader? How did the challenge change you?
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
                                Initiative
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you describe a time when you saw a problem
                                at work and created a solution for it.
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you tell me about a project that was
                                implemented because of the work you did?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                How did you get your work assigned at your last
                                position?
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
                                Negativity
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                What did you not like about ____ experience?
                                Looking back, how would you have been able to
                                change that experience?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you talk about a mistake you made in the
                                past, and how you overcame it?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you tell me a time when you failed to meet a
                                deadline?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you describe a decision that you regretted?
                                Why did you regret it?
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
                                Decision Making
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you talk us through a time when you had to
                                decline a client’s request? How did you approach
                                that?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Your friend is cheating on a test. He’s on his
                                last warning. You’re the only one who knows he’s
                                cheating. What do you do?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                How do you make difficult decisions?
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
                                Professional Priorities
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                What motivates you in life?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Why did you choose your college/university? Why
                                led you to choose your major? Are you happy with
                                your decision?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                What’s been the most important experience of
                                your career? Why?
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
                                About the Company
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Why Company X?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                What makes Company X different from its
                                competitors? For example, can you compare one of
                                our products to one of our competitors products?
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Why do you want to work for this division of
                                Company X?
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                        >
                            Questions to ask your interviewer
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                When an interviewer asks at the end “do you have
                                any questions for me?” the worst thing you can
                                say is “no”. It shows you don’t have much
                                interest in what they do at the company, the
                                role, or the company in general.
                            </Typography>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Here are a couple of our personal favorite
                                questions to ask them:
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Why did you come to this company?
                            </Typography>

                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                What is your biggest professional regret?
                            </Typography>

                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                I’ve read about the company’s founding, but can
                                you tell me more about...?
                            </Typography>

                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Where do you see this company in the next few
                                years?
                            </Typography>

                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                What inspires you everyday?
                            </Typography>

                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                What can you tell me about your new products or
                                plans for growth?
                            </Typography>

                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                What are the current goals that the company is
                                focused on, and how does this team work to
                                support hitting those goals?
                            </Typography>

                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                How would you describe the work environment
                                here—is the work typically collaborative or more
                                independent?
                            </Typography>

                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Can you tell me about the last team event you
                                did together?
                            </Typography>

                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                What’s different about working here than
                                anywhere else you’ve worked?
                            </Typography>

                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                How has the company changed since you joined?
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
        paddingTop: "68.9655172%"
    },
    downloadHere: {
        marginLeft: "auto"
    }
}));

export default BehaviorialQuestions;
