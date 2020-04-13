import React, { useGlobal, useState, useEffect } from "reactn";
import { Grid, Typography, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleCard from "../shared/modules/ModuleCard";
import modules from "shared/modules/moduleData";
import ScrollToTop from "shared/ScrollToTop";

const Contributors = () => {
    const classes = styles();

    return (
        <>
            <ScrollToTop />
            <Grid item>
                <Typography
                    className={classes.title}
                    variant="h2"
                    component="h1"
                    color="primary"
                >
                    Contributors
                </Typography>
            </Grid>
            <Grid item container spacing={0} className={classes.moduleGrid}>
                {modules.map((module, i) => {
                    return (
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
                                    slug={module.slug}
                                    icon={module.icon}
                                />
                            </Grid>
                        </Zoom>
                    );
                })}
            </Grid>
        </>
    );
};

const styles = makeStyles((theme) => ({
    title: {
        margin: "20px 0"
    },
    card: {
        display: "flex",
        flex: "1 1 290px"
    },
    moduleGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))"
    }
}));

export default Contributors;
