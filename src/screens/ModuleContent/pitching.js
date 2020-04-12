import React from "react";
import {
    Grid,
    Typography,
    makeStyles,
    Card,
    CardActionArea,
    CardContent,
    CardMedia
} from "@material-ui/core";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";
import ModulePagination from "shared/modules/ModulePagination";
import pitch from "../../assets/modules/content/pitch.png";

const Pitching = () => {
    const classes = styles();
    const [pitching] = modules.filter(
        (module) => module.title === "Pitching Yourself"
    );
    return (
        <ModuleContent
            title={pitching.title}
            description={pitching.description}
            image={pitching.image}
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
                                Developing a concise, personal, and thoughtful
                                pitch will get you noticed in person or online.
                                Beyond skills, recruiters are looking for
                                someone they would enjoy working with. When
                                pitching, not only do you want to mention the
                                skills relevant to the position, but that you
                                can get along well with the other people who
                                will be working with you.
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
                            Preparation
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                <a
                                    href="https://www.themuse.com/advice/4-messages-you-need-to-know-and-nail-to-pitch-yourself"
                                    className={classes.a}
                                >
                                    Alex Honeysett from the Muse
                                </a>{" "}
                                says before constructing your pitch, you should
                                reflect on:
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
                                “Who are you?” And “What do you do?”
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                To do this, write up a list of items that
                                describe you and what you do. Writing this out
                                can also help you realize what genuinely is
                                important to you and can help you figure out
                                what type of job you’re looking for. Depending
                                on the situation, you can use pieces of these
                                for your pitch.
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
                                Your Story
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                “What are the defining moments and experiences
                                of your life that got you where you are today
                                and interested in doing the work that you’re
                                pitching yourself for?”
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                Try to think about what led you to choose a
                                degree in computing and what has kept you on
                                that path.
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
                                Your "Why?"
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                Before pitching yourself, do your part and come
                                prepared. Research the companies you want to
                                work for, and identify reasons why you want to
                                be a part of that company. You can research the
                                company by looking at articles, videos and news
                                related to them and their site.
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                Your answer should be unique and personal, not
                                just “you build nice computers”, “I like your
                                products” or “your company culture is awesome”.
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
                                Why you?
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                What makes you special and what are you awesome
                                at?
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                If this includes technical skills, make sure
                                you’re prepared to be asked technical questions
                                about that skill.
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
                            In Person Pitch
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={6}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={pitch}
                                        title="List of items about oneself"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            Simple Pitch
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            When meeting a recuriter or engineer
                                            in person, this pitch is ideal
                                            because it is short, and covers the
                                            basic information they are looking
                                            for while also conveying exactly
                                            what you're interested in.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Typography
                            className={classes.contentHeader}
                            variant="h5"
                            color="primary"
                            gutterBottom
                        >
                            Example
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                "Hello, my name is Charlotte! I am studying
                                Computer Science at Florida International
                                University. At my university, I am involved with
                                student organizations such as Upsilon Pi
                                Epsilon, FIU's largest student organization for
                                technology and ShellHack, Florida's largest
                                hackathon. With my role as hackathon director,
                                the team and I were able to grow ShellHacks from
                                a 300 person hackathon to a 1000 person
                                hackathon within 3 years. I have also interned
                                at JP Morgan and Facebook as a Software
                                Engineer. Now I am interested in exploring PM
                                roles at Apple. Also, outside of school I spend
                                my time volunteering or hiking!"
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
                            Cold Emailing or Messaging Recruiters
                        </Typography>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                className={classes.contentDescription}
                                variant="body1"
                            >
                                When emailing or LinkedIn messaging a recruiter
                                or engineer you do not know, the following
                                samples are great templates to reach out. It
                                includes the essential information about you as
                                a candidate, it shows you already put the work
                                in by applying, and it has action items for the
                                individual to follow up with you.
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
                                Sample #1
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                Hi ____. My name is ____ and I am studying ____
                                at ____ and I am graduating in ____. I have
                                experience in ____ and with my background I know
                                I would be a great fit for this role that I
                                applied for, ____ with Req. ID ____. I would
                                love the chance to discuss more about the
                                opportunity and your journey to ____. Please let
                                me know if you would be able to jump on a quick
                                10 minute call. I have also attached my resume
                                for reference. Have a wonderful day and I look
                                forward to hearing back!
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
                                Sample #2
                            </Typography>
                            <Typography
                                className={classes.subDescription}
                                variant="body1"
                            >
                                Hi ____. My name is ____ and I am studying ____
                                at ____ and I am graduating in ____. I have been
                                following ____ and I am excited about ____ (news
                                or release about the company that you are
                                excited about to demonstrate your interest and
                                research). I have applied to the ___ position
                                with Req. ID ____. Based on my experience in
                                ____ (1-2 reasons why YOU are a good fit for the
                                role), I am a strong candidate for this
                                position. I would like to discuss this
                                opportunity with you further if you have time
                                this week. Thank you and have a wonderful day.
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

export default Pitching;
