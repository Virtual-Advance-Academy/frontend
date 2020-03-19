import React, { useGlobal } from "reactn";
import { Grid, Typography, Container, Grow, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleCard from "../shared/modules/ModuleCard";
import modules from "shared/modules/modules";
import { Redirect } from "react-router-dom";
import ScrollToTop from "shared/ScrollToTop";

const Main = () => {
    const classes = styles();
    const [user] = useGlobal("user");
    const [jwt] = useGlobal("jwt");
    const firstName = (user && user.name.split(" ")[0]) || "";
    return (
        <>
            {!jwt && <Redirect to="/login" />}
            <ScrollToTop />
            <Container className={classes.container}>
                <Grid item>
                    <Typography
                        className={classes.title}
                        variant="h2"
                        component="h1"
                        color="primary"
                    >
                        Welcome back, {firstName}!
                    </Typography>
                </Grid>
                <Grid item container spacing={0}>
                    {modules.map((module, i) => (
                        <Zoom
                            in
                            style={{
                                transitionDelay: `calc(.25s + ${i * 100}ms)`
                            }}
                        >
                            <Grid key={module.id} item className={classes.card}>
                                <ModuleCard
                                    image={module.image}
                                    title={module.title}
                                    description={module.description}
                                    completion={
                                        Math.floor(Math.random() * 11) * 10
                                    }
                                    slug={module.slug}
                                />
                            </Grid>
                        </Zoom>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

const styles = makeStyles(theme => ({
    title: {
        margin: "20px 0"
    },
    card: {
        display: "flex",
        flex: "1 1 290px"
    },
    container: {
        maxWidth: 1500
    }
}));

export default Main;
