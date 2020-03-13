import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import HomeRegister from "shared/HomeRegister";

const Home = () => {
    const classes = styles();

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.page}
        >
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

export default Home;
