import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import AuthorizedRoute from "shared/AuthorizedRoute";

const Profile = () => {
    const classes = styles();

    return (
        <>
            <AuthorizedRoute />
            <Typography>Test</Typography>
        </>
    );
};

const styles = makeStyles(theme => ({
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
    page: {
        minHeight: "100vh"
    }
}));

export default Profile;
