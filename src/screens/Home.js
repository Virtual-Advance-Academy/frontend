import React, { useGlobal } from "reactn";
import {
    Typography,
    Grid,
    Divider,
    makeStyles,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar
} from "@material-ui/core";
import HomeRegister from "shared/HomeRegister";
import { Redirect } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { ReactComponent as AdvanceHome } from "../assets/home.svg";
import modules from "shared/modules/modules";

const Home = () => {
    const classes = styles();
    const [jwt] = useGlobal("jwt");

    return (
        <>
            {jwt && <Redirect to="/modules" />}
            <Grid container className={classes.homeContainer}>
                <Grid container justify="center" alignItems="center">
                    <Grid item className={classes.titleSpacing}>
                        <Typography
                            className={classes.mainTitle}
                            variant="h2"
                            color="primary"
                            component="p"
                        >
                            <span>Ready to </span>
                            <span>land your </span>
                            <span>dream </span>
                            <span>internship?</span>
                        </Typography>
                    </Grid>
                    <HomeRegister />
                </Grid>
            </Grid>
            <Grid item className={classes.section1}>
                <Divider variant="middle" />
            </Grid>
            <Grid container spacing={0} alignItems="center" justify="center">
                <Typography className={classes.description} variant="h5">
                    Prepare for a career in technology through Upsilon Pi
                    Epsilon's virtual Advance Academy program. Check out an
                    overview of the modules offerred below!
                </Typography>
            </Grid>
            <Grid
                container
                spacing={0}
                alignItems="center"
                justify="center"
                className={classes.demoContainer}
            >
                <Grid item className={classes.demo}>
                    <List>
                        {modules.slice(0, 10).map((m) => (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <m.icon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={m.title} />
                            </ListItem>
                        ))}
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <MoreHorizIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Additional Content" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item>
                    <AdvanceHome className={classes.media} />
                </Grid>
            </Grid>
        </>
    );
};

const styles = makeStyles((theme) => ({
    mainTitle: {
        display: "inline-block",
        "& span": {
            display: "block"
        }
    },
    titleSpacing: {
        marginRight: "80px",
        [theme.breakpoints.down("xs")]: {
            marginRight: "unset"
        }
    },
    section1: {
        margin: theme.spacing(10, 2)
    },
    homeContainer: {
        minHeight: "90vh"
    },
    description: {
        maxWidth: 1000,
        textAlign: "center",
        fontWeight: "300",
        padding: theme.spacing(3)
    },
    media: {
        maxWidth: 400,
        margin: theme.spacing(5),
        height: "auto",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            margin: "unset",
            padding: theme.spacing(5)
        }
    },
    demo: {
        margin: theme.spacing(5)
    },
    demoContainer: {
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse"
        }
    }
}));

export default Home;
