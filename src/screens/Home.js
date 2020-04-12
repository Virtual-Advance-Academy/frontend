import React, { useGlobal } from "reactn";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import HomeRegister from "shared/HomeRegister";
import { Redirect } from "react-router-dom";

const Home = () => {
    const classes = styles();
    const [jwt] = useGlobal("jwt");

    return (
        <>
            {jwt && <Redirect to="/modules" />}
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
            <Grid item className={classes.section1}>
                <Divider variant="middle" />
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
    }
}));

export default Home;
