import React from "react";
import {
    makeStyles,
    Typography,
    Container,
    Grid,
    Divider
} from "@material-ui/core";

const ModuleContent = ({ title, description, image, children }) => {
    const classes = styles();
    return (
        <>
            <Container className={classes.container}>
                <Grid item>
                    <Typography
                        className={classes.title}
                        variant="h3"
                        component="h1"
                        color="primary"
                    >
                        {title}
                    </Typography>
                </Grid>
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                >
                    <Typography
                        className={classes.description}
                        variant="h5"
                        color="#D8D8D8"
                    >
                        {description}
                    </Typography>
                </Grid>
                <Grid>
                    <Divider variant="middle" />
                </Grid>
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                >
                    <img
                        src={require(`assets/modules/${image}.svg`)}
                        alt={title}
                        className={classes.mainImg}
                    />
                </Grid>
            </Container>
            {children}
        </>
    );
};

const styles = makeStyles((theme) => ({
    title: {
        margin: "20px 0",
        fontWeight: "300"
    },
    description: {
        maxWidth: 1000,
        textAlign: "center",
        fontWeight: "300",
        padding: theme.spacing(3)
    },
    mainImg: {
        maxWidth: 300,
        margin: "20px 0"
    }
}));

export default ModuleContent;
