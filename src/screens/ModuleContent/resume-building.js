import React from "react";
import {
    Grid,
    Container,
    Typography,
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
import ModulePagination from "shared/modules/ModulePagination";
import resume1 from "../../assets/modules/content/resume1.jpeg";
import resume2 from "../../assets/modules/content/resume2.jpeg";
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
                                gutterBottom
                            >
                                Including your personal information is crucial
                                for companies to contact you if they're
                                interested. Do not include items such as your
                                address, race, religious views, martial status,
                                or gender.
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
                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                Education
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Your education should only include any colleges
                                or universities you have attended in undergrad
                                or graduate school.
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>
                                    University Name (i.e. Florida International
                                    University)
                                </li>
                                <li>
                                    Degree (i.e. Bachelors of Science in
                                    Computer Science)
                                </li>
                                <li>Non-university email (preferred)</li>
                                <li>City and State (i.e. Miami, FL)</li>
                                <li>
                                    Minor if applicable (i.e. Minor in
                                    Psychology)
                                </li>
                                <li>GPA if it is above a 3.0</li>
                                <li>Graduation Date (i.e. May 2020)</li>
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
                                Experience
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                In chronological format, list all your relevant
                                experiences. If you do not have any relevant
                                experience to the role, it is okay to include
                                1-2 long term positions you’ve held.
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Each experience should have the following:
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>Employer's Name</li>
                                <li>Position Title</li>
                                <li>Start and end date</li>
                                <li>City and State</li>
                                <li>
                                    2-3 bullet points about what the impact you
                                    made. Try to include as much quantitative
                                    results as you can, such as mentoring 30
                                    students, optimizing the program by 80%,
                                    etc. Also include any accomplishments or
                                    recognitions you received.
                                </li>
                                <li>
                                    Example: Debugged and optimized software
                                    tools in Python for tracking hurricane
                                    trajectories that resulted in a 76% speed
                                    improvement.
                                </li>
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
                                Personal Projects
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                If you don’t have much experience, you should
                                develop personal projects! Personal projects can
                                be side projects you worked on by yourself,
                                hackathon projects, or group projects.
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Each project should have the following:
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>Project Name</li>
                                <li>Your role (i.e. head iOS developer)</li>
                                <li>
                                    GitHub URL if it is an open source project
                                </li>
                                <li>1 bullet describing the project</li>
                                <li>
                                    1-2 bullets describing your contribution to
                                    the project and what you were able to
                                    accomplish (similar to experience format).
                                    Make sure to mention what languages and
                                    technologies were used.
                                </li>
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
                                Activities
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Activities can be anything from
                                extracurriculars, volunteer work, or leadership.
                                You should name this section to whatever is most
                                relevant to your background.
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Each activity should have the following:
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>
                                    Organization Name (i.e. Upsilon Pi Epsilon,
                                    Women in Computer Science, Habitat for
                                    Humanity, etc)
                                </li>
                                <li>
                                    Your role (i.e. President, member, event
                                    coordinator, etc)
                                </li>
                                <li>Start and end date</li>
                                <li>City and state</li>
                                <li>
                                    2-3 bullet points about the impact you made,
                                    such as how you grew that organization,
                                    organized events, etc.
                                </li>
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
                                Skills
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                It is recommended that you match your skills
                                with your proficiency level as well (beginner,
                                intermediate, advanced).
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Skills to include:
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>
                                    List all the technical skills you have (i.e.
                                    C#, Java, SQL, HTML/CSS, Python, Azure, AWS,
                                    etc)
                                </li>
                                <li>
                                    List all spoken languages (i.e. French,
                                    Spanish, etc)
                                </li>
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
                                Courses
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                You should only list your relevant courses if
                                you don’t have enough content on your resume.
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>
                                    Examples: Data Structures, Programming III
                                    (Java, C), Artificial Intelligence, Physics
                                    I with Calculus I, Discrete Mathematics,
                                    Logic, Statistics, and so on.
                                </li>
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
                                Honors
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                This is an optional section, if you have honors
                                or awards you’re proud of and want to include,
                                then you should!
                            </Typography>

                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>
                                    This can be honors such as academic or
                                    professional scholarships, Dean's List, or
                                    university awards (Student of the Year,
                                    Worlds Ahead, etc).
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
