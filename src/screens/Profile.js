import React, { useState, useGlobal } from "reactn";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper, TextField } from "@material-ui/core";
import AuthorizedRoute from "shared/AuthorizedRoute";
import { makeClient } from "utils/Client";
import { useEffect } from "react";

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
            <AuthorizedRoute />
            <Grid
                container
                className={classes.page}
                justify="center"
                alignContent="center"
            >
                <Grid item container lg={4}>
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
                        <Grid item container xs={12}>
                            <Grid item>
                                <Typography variant="button">Photo</Typography>
                                <Typography variant="body1" paragraph>
                                    A photo helps personalize your account.
                                </Typography>
                            </Grid>
                            <Grid item></Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="button">Name</Typography>
                            <Typography variant="body1" paragraph>
                                {fullName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="button">Username</Typography>
                            <Typography variant="body1" paragraph>
                                {username}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="button">Email</Typography>
                            <Typography variant="body1" paragraph>
                                {email}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="button">Password</Typography>
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

const styles = makeStyles(theme => ({
    profileTitle: {
        width: "100%",
        padding: `${theme.spacing(4)}px 0`,
        "& h1": {
            fontWeight: theme.typography.fontWeightLight
        }
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
    page: {
        minHeight: "100vh"
    }
}));

export default Profile;
