import React from "react";
import { Grid, Typography, Link, makeStyles } from "@material-ui/core";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";
import ModulePagination from "shared/modules/ModulePagination";

const Networking = () => {
    const classes = styles();
    const [networking] = modules.filter(
        (module) => module.title === "Networking"
    );
    return (
        <ModuleContent
            title={networking.title}
            description={networking.description}
            image={networking.image}
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
                                color="#03DAC6"
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

                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                        >
                            Hackathons
                        </Typography>
                    </Grid>

                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                <Link href="https://mlh.io" color="inherit">
                                    Major League Hacking
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                "Major League Hacking (MLH) is the official
                                student hackathon league. Each year, we power
                                over 200 weekend-long invention competitions
                                that inspire innovation, cultivate communities
                                and teach computer science skills to more than
                                65,000 students around the world. MLH is an
                                engaged and passionate maker community,
                                consisting of the next generation of technology
                                leaders and entrepreneurs. "
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                        >
                            Campus
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
                                    href="https://studentaffairs.fiu.edu/academic-success/career-and-talent-development/employers/get-involved-on-campus/recruiting-events/index.php"
                                    color="inherit"
                                >
                                    Recruitment Fairs @ FIU
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                For FIU students, there are plenty of
                                opportunites to network on campus! FIU organizes
                                several recruitment events on campus, check them
                                out here.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                        >
                            Local Events
                        </Typography>
                    </Grid>

                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                Local events are great to meet the people around
                                you in your own community. A great place to
                                start, is to check out the events posted on
                                Eventbrite and Facebook Events.
                            </Typography>
                        </Grid>
                    </Grid>
                </ModulePagination.Page>
                <ModulePagination.Page>
                    <Grid container justify="center" spacing={1}>
                        <Grid container>
                            <Typography
                                className={classes.contentHeader}
                                variant="h5"
                                color="primary"
                            >
                                Online Networking Platforms
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                className={classes.subContentHeader}
                                variant="h6"
                                color="#D8D8D8"
                            >
                                <Link
                                    href="https://www.linkedin.com"
                                    color="inherit"
                                >
                                    LinkedIn
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                “Manage your professional identity. Build and
                                engage with your professional network. Access
                                knowledge, insights and opportunities.”
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>
                                    Connect with recruiters and engineers in the
                                    company you’re interested in.
                                </li>

                                <li>
                                    Post professional updates to be seen
                                    (hackathon project, awards received,
                                    internship offer, conference attendance,
                                    etc)
                                </li>

                                <li>
                                    Look through job listings that are typically
                                    updated more frequently than their site.
                                </li>

                                <li>Directly message professionals</li>

                                <li>Personal profile page</li>
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
                                <Link href="http://indeed.com" color="inherit">
                                    Indeed
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                “At Indeed, our mission is to help people get
                                jobs.”
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>
                                    Look through endless job and internship
                                    opportunities
                                </li>
                                <li>
                                    Indeed gives you the option to upload your
                                    resume, and once you do all potential
                                    employeers will be able to see your resume
                                    and match you to job openings.{" "}
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
                                <Link
                                    href="https://careerpath.cis.fiu.edu"
                                    color="inherit"
                                >
                                    FIU SCIS CareerPath
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                Local partners of FIU job postings for the SCIS
                                community
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li> Local Miami posting</li>
                                <li>
                                    FIU SCIS Career Path is organized by
                                    internships, full time, fellowships,
                                    freelance, startups, research
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
                                <Link
                                    href="https://www.joinhandshake.com"
                                    color="inherit"
                                >
                                    Handshake
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                “We’re driven by the mission to give all
                                students the chance to build the career they
                                want, no matter where they’re from or what
                                school they attend.”
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>
                                    Shows specifically companies that are
                                    interested in hiring candidates from your
                                    university
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
                                <Link
                                    href="https://jumpstart.me/"
                                    color="inherit"
                                >
                                    JumpStart
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                “Jumpstart's mission is to make recruiting fair
                                for all.”
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>
                                    Personalized job opportunities based off
                                    what you’re looking for (location, industry
                                    type, culture, company size, and so on)
                                </li>
                                <li>Community based with forms</li>
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
                                    href="http://ripplematch.com"
                                    color="inherit"
                                >
                                    RippleMatch
                                </Link>
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                gutterBottom
                            >
                                “Get matched with your dream job. Automate your
                                job search and start interviewing for jobs and
                                internships with top companies.”
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                                component="ul"
                            >
                                <li>
                                    Typically someone from RippleMatch will
                                    directly call you for an initial phone
                                    screen to gauge your interests.
                                </li>
                                <li>
                                    Directly emails you opportunities best
                                    suited on what you’re looking for
                                </li>
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

export default Networking;
