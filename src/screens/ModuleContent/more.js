import React from "react";
import {
    Grid,
    Typography,
    Container,
    makeStyles,
    ListItemText,
    ListItemIcon,
    ListItem,
    List
} from "@material-ui/core";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";
import ModulePagination from "shared/modules/ModulePagination";
import LinkIcon from "@material-ui/icons/Link";

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const More = () => {
    const classes = styles();
    const [more] = modules.filter(
        (module) => module.title === "Hungry for more?"
    );
    return (
        <Container className={classes.container}>
            <ModuleContent
                title={more.title}
                description={more.description}
                image={more.image}
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
                            Additional Resources
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                Resume Building
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemLink href="https://studentaffairs.fiu.edu/academic-success/career-and-talent-development/handouts-and-resources/index.php">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="FIU Student Affairs Career Resources" />
                            </ListItemLink>
                            <ListItemLink href="http://internmakers.com/2020/02/12/resume-tips-samples/">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Resume Tips + Samples from the InternMakers" />
                            </ListItemLink>
                            <ListItemLink href="https://capd.mit.edu/sites/default/files/jobs/files/sample-resumes.pdf">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="MIT Sample Resumes" />
                            </ListItemLink>
                            <ListItemLink href="https://www.bc.edu/content/dam/files/offices/careers/pdf/resumes/TechStartupsEntrepreneurshipSampleResumes2017.pdf">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Boston College Sample Resumes" />
                            </ListItemLink>
                            <ListItemLink href="https://www.resumeviking.com/templates/word/">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Creative Resume Templates by Resume Viking" />
                            </ListItemLink>
                            <ListItemLink href="https://spark.adobe.com/templates/resumes/">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Resume Templates by Adobe Spark" />
                            </ListItemLink>
                        </List>
                    </Grid>
                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                Pitching Yourself
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemLink href="https://www.personalbrandingblog.com/how-to-pitch-yourself-to-employers/">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="How to Pitch Yourself to Employers" />
                            </ListItemLink>
                            <ListItemLink href="https://www.themuse.com/advice/4-messages-you-need-to-know-and-nail-to-pitch-yourself">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Prepare and Nail Pitching Yourself by the Muse" />
                            </ListItemLink>
                        </List>
                    </Grid>
                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                Networking
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemLink href="https://techconferences.co">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="List of Tech Conferences Around the World" />
                            </ListItemLink>
                            <ListItemLink href="https://mashable.com/2014/03/15/tech-networking/">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="How to Master Networking Events by Mashable" />
                            </ListItemLink>
                        </List>
                    </Grid>

                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                Behaviorial Questions
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemLink href="http://www.crackingthepminterview.com/uploads/6/5/2/8/6528028/handout_-_cracking_the_soft_skills.png">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Cracking the Soft Skills Prep Sheet" />
                            </ListItemLink>
                            <ListItemLink href="http://internmakers.com/2020/02/12/behavioral-interview-preparation/">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Behaviorial Interview Prep by the InternMakers" />
                            </ListItemLink>
                            <ListItemLink href="https://www.topechelon.com/blog/placement-process/top-behavioral-interview-questions-list-examples/">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="100 Behavioral Interview Questions" />
                            </ListItemLink>
                            <ListItemLink href="https://www.themuse.com/advice/51-interview-questions-you-should-be-asking">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="51 Questions to Ask the Interviewer" />
                            </ListItemLink>
                            <ListItemLink href="https://everydayinterviewtips.com/7-types-of-behavioral-interview-categories/">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Types of Behavioral Questions" />
                            </ListItemLink>
                        </List>
                    </Grid>
                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                Technical Questions
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemLink href="https://medium.com/employbl/the-2-types-of-software-engineering-interviews-and-how-to-prepare-for-them-2e7bd4daa0b">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Types of Software Engineering Interviews" />
                            </ListItemLink>
                            <ListItemLink href="https://hackernoon.com/5-steps-to-successfully-prepare-for-software-engineering-interviews-qc1lh33ho">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="How to Successfully Prepare for SWE Interviews" />
                            </ListItemLink>
                            <ListItemLink href="https://www.businessinsider.com/what-its-like-to-interview-at-facebook-google-and-other-tech-companies-2016-1?r=UK">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Interviewing at Big Tech Companies" />
                            </ListItemLink>
                            <ListItemLink href="https://www.thebalancecareers.com/top-technical-interview-questions-2061227">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Most Common Tech Interview Questions" />
                            </ListItemLink>
                            <ListItemLink href="http://www.crackingthecodinginterview.com/uploads/6/5/2/8/6528028/cracking_the_coding_skills_-_v6.pdf">
                                <ListItemIcon>
                                    <LinkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Cracking the Coding Skills Prep Sheet" />
                            </ListItemLink>
                        </List>
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
    }
}));

export default More;
