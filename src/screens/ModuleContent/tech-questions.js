import React from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";
import ModulePagination from "shared/modules/ModulePagination";
const TechnicalQuestions = () => {
    const classes = styles();
    const [technical] = modules.filter(
        (module) => module.title === "Technical Questions"
    );
    return (
        <ModuleContent
            title={technical.title}
            description={technical.description}
            image={technical.image}
        >
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
                                Questions could be anything from:
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                                gutterBottom
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
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Typically, questions will be centered around
                                what you say you know on your resume, but it is
                                very much possible to receive questions about
                                something that you didn’t say you know. They are
                                testing your knowledge on popular technologies
                                or technologies they use within their company.
                                If you could answer those questions, you would
                                stand out from other candidates.
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
                            gutterBottom
                        >
                            In Person Interviews
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                In person interviews can be a mix of everything.
                                You can expect whiteboarding questions,
                                technical questions presented on one of their
                                computers, behavioral questions, or anything
                                else.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                The best way to prepare for these styles of
                                interviews is doing your own research. Your
                                recruiter should prepare you with what that
                                would like. If they do not explicitly tell you,
                                ask them. Then, look up the company's name and
                                see if you can find out their structure and
                                previous questions asked so you can gauge what
                                you should prepare for.
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
                            Technical Interview etiquette
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                From the{" "}
                                <a
                                    href="https://learntocodewith.me/posts/technical-interview/"
                                    className={classes.a}
                                >
                                    Ultimate Guide to Acing Your Technical
                                    Interview
                                </a>
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
                                During a real-time coding challenge
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                                gutterBottom
                            >
                                <li>
                                    Ask clarifying questions before you even
                                    start writing code.
                                </li>
                                <li>
                                    Communicate with your interviewer and think
                                    out loud.
                                </li>
                                <li>
                                    Make it a collaborative process (use “we”
                                    instead of “I”); interviewers want to know
                                    that you’re a team player.
                                </li>
                                <li>
                                    If you’re stuck, stay calm, think out loud,
                                    and try new ideas
                                </li>
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
                                During a take-home coding assignment
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                                gutterBottom
                            >
                                <li>
                                    Take time to plan out your code before
                                    writing it out.
                                </li>
                                <li>
                                    Make sure you fully understand the
                                    instructions and requirements. Re-read them
                                    several times before starting and once more
                                    after you’re finished with the challenge to
                                    make sure you've ticked every box.
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
                            Resources to Practice Technical Questions
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                <Link
                                    href="https://www.khanacademy.org/computing/computer-science/algorithms"
                                    color="inherit"
                                >
                                    Algorithms by Khan Academy
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                If someone hasn’t told you yet, the majority of
                                technical questions come back to data structures
                                and algorithms. This course by Khan Academy will
                                go over all the major algorithms that you should
                                know.
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
                                    href="https://leetcode.com"
                                    color="inherit"
                                >
                                    LeetCode
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                If you already have some understanding of data
                                structures and algorithms, you should be
                                practicing at least a couple times a week.
                                LeetCode is a great resource, it is organized by
                                difficulty as well as by company.
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
                                    href="http://www.crackingthecodinginterview.com"
                                    color="inherit"
                                >
                                    Cracking the Coding Interview
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Whether you’re a beginner or experienced,
                                Cracking the Coding Interview can help you
                                advance your skills. The book has over 150
                                programming questions with solutions and
                                explanations on solving them.
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
                                    href="https://www.hackerrank.com"
                                    color="inherit"
                                >
                                    HackerRank
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                If you’re looking for more experience on how
                                technical screening interviews work, HackerRank
                                is for you. Similar to HireVue, it is an
                                application companies use to screen candidates.
                                HackerRank also offers developers practice
                                problems in the same environment as a real
                                HackerRank screening interview.
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
                                    href="https://www.youtube.com/watch?v=IhJGJG-9Dx8&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX"
                                    color="inherit"
                                >
                                    Data Structures via YouTube
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                If you are looking up to brush up on your data
                                structures, YouTube will be one of your best
                                resources. The one linked above is from the
                                author of Cracking the Coding Interview, Gayle
                                Laakmann McDowell.
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
                                    href="https://www.glassdoor.com/index.htm"
                                    color="inherit"
                                >
                                    GlassDoor
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                All candidates should search the company they
                                are interviewing with on GlassDoor before
                                interviewing. GlassDoor shows all the basic info
                                about a company told by their current or
                                previous employees. It also shows interview
                                questions asked by previous candidates. Go
                                through these and practice them. Not necessarily
                                the questions you will get, but it will prepare
                                you the style of questions the company asks.
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
                            gutterBottom
                        >
                            Finally...
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                                gutterBottom
                            >
                                We would like to leave you with advice from an
                                ex-Amazon SDE intern and now a full time
                                Microsoft PM.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.quote}
                                variant="body1"
                            >
                                “Cracking the coding interview and quite
                                honestly, just doing them. Go interview. Be okay
                                with failing...A LOT. That's how you learn.
                                Don't use excuses like waiting until you're a
                                junior, just go try.”
                            </Typography>
                        </Grid>
                    </Grid>
                </ModulePagination.Page>
            </ModulePagination>
        </ModuleContent>
    );
};

const styles = makeStyles((theme) => ({
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
    quote: {
        textAlign: "left",
        justify: "center",
        color: "#D8D8D8",
        maxWidth: 800,
        fontStyle: "italic",
        fontWeight: "500",
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
