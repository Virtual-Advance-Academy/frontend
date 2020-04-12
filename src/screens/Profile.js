import React, { useState, useGlobal } from "reactn";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeClient } from "utils/Client";
import { useEffect } from "react";
import UserAvatar from "shared/UserAvatar";

const Profile = () => {
    const classes = styles();

    const [jwt] = useGlobal("jwt");

    const [profile, setProfile] = useState({});

    const { fullName = "", email = "", username = "" } = profile;

    useEffect(() => {
        const fetch = async () => {
            const Client = makeClient(jwt);

            let res = await Client.getProfile();
            setProfile(res.data);
        };
        fetch();
    }, [jwt]);

    return (
        <>
            <Grid container justify="center" alignContent="center">
                <Grid item container xl={4} lg={5} md={8} sm={10} xs={11}>
                    <Grid item className={classes.profileTitle}>
                        <Typography
                            variant="h3"
                            component="h1"
                            align="center"
                            color="primary"
                        >
                            Account Information
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        container
                        spacing={1}
                        component={Paper}
                        variant="outlined"
                        className={classes.profileBox}
                    >
                        <Grid
                            item
                            container
                            xs={12}
                            alignItems="center"
                            className={classes.photoContainer}
                        >
                            <Grid item className={classes.photoArea}>
                                <Typography
                                    variant="overline"
                                    className={classes.itemTitle}
                                >
                                    Photo
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    A photo helps personalize your account.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <UserAvatar className={classes.UserAvatar} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="overline"
                                className={classes.itemTitle}
                            >
                                Name
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {fullName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="overline"
                                className={classes.itemTitle}
                            >
                                Username
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {username}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="overline"
                                className={classes.itemTitle}
                            >
                                Email
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {email}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="overline"
                                className={classes.itemTitle}
                            >
                                Password
                            </Typography>
                            <Typography variant="body1" paragraph>
                                ********
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

const styles = makeStyles((theme) => ({
    profileTitle: {
        width: "100%",
        padding: `${theme.spacing(4)}px 0`,
        "& h1": {
            fontWeight: theme.typography.fontWeightLight
        }
    },
    itemTitle: {
        color: theme.palette.grey[400]
    },
    profileBox: {
        padding: `${theme.spacing(4)}px ${theme.spacing(6)}px `
    },
    titleSpacing: {
        marginRight: "80px",
        [theme.breakpoints.down("xs")]: {
            marginRight: "unset"
        }
    },
    UserAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        fontSize: theme.spacing(3)
    },
    photoArea: {
        flex: "1 1 auto"
    },
    photoContainer: {
        flexWrap: "nowrap"
    }
}));

export default Profile;
