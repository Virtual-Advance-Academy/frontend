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
import { FolderIcon, CodeIcon } from "@material-ui/icons";
import BallotIcon from "@material-ui/icons/BallotIcon";
import GroupIcon from "@material-ui/icons/Group";
import WatchIcon from "@material-ui/icons/Watch";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import DescriptionIcon from "@material-ui/icons/Description";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { ReactComponent as AdvanceHome } from "../assets/home.svg";

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
                <Typography
                    className={classes.description}
                    variant="h5"
                    color="#D8D8D8"
                >
                    Prepare for a career in technology through Upsilon Pi
                    Epsilon's virtual Advance Academy program. Check out an
                    overview of the modules offerred below!
                </Typography>
            </Grid>
            <Grid container spacing={10} alignItems="center" justify="center">
                <Grid item className={classes.demo}>
                    {/* <div className={classes.demo}> */}
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <BallotIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Types of Internships" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <DescriptionIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Resume Building" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <EmojiPeopleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Pitching Yourself" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <GroupIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Networking" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Application Process" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <WatchIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="What to Wear" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <LiveHelpIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Behaviorial Questions" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <CodeIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Technical Questions" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <DoneAllIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="The Do's and Don'ts" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <EmojiObjectsIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Tips from the Pros" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <MoreHorizIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Additional Content" />
                        </ListItem>
                    </List>
                    {/* </div> */}
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
        maxWidth: 400
    }
}));

export default Home;
