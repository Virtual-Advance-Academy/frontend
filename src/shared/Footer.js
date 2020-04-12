import React from "react";
import { Grid, Container, makeStyles, Typography } from "@material-ui/core";
import logo from "assets/AdvanceLogo.png";

const Footer = () => {
    const classes = styles();

    return (
        <Grid className={classes.footer}>
            <Container className={classes.container}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <img src={logo} className={classes.logo} />
                    </Grid>
                    <Grid item>
                        <Typography variant="inherit">
                            Engineered with 💖 and ☕ by UPE
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

const styles = makeStyles((theme) => ({
    footer: {
        background: theme.palette.grey[900],
        marginTop: 30,
        padding: "10px 0"
    },
    container: {
        maxWidth: 1500
    },
    logo: {
        height: ".75em"
    }
}));

export default Footer;
