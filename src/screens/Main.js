import React, { useGlobal, useState, useEffect } from "reactn";
import { Grid, Typography, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleCard from "../shared/modules/ModuleCard";
import modules from "shared/modules/moduleData";
import { Redirect } from "react-router-dom";
import ScrollToTop from "shared/ScrollToTop";
import { makeClient } from "utils/Client";

const Main = () => {
    const classes = styles();
    const [user] = useGlobal("user");
    const [jwt] = useGlobal("jwt");
    const firstName = (user && user.name.split(" ")[0]) || "";

    const [loading, setLoading] = useState(true);

    let comps = modules
        .map((module) => ({ [module.id]: {} }))
        .reduce((a, c) => ({ ...a, ...c }));
    const [completions, setCompletions] = useState(comps);

    useEffect(() => {
        const fetch = async () => {
            const Client = makeClient(jwt);

            let res = await Client.getCompletion();
            const { completion } = res.data;
            setCompletions(completion);
            setLoading(false);
        };
        fetch();
    }, [jwt]);

    return (
        <>
            {user && !user.completedSurvey && <Redirect to="/survey" />}
            <ScrollToTop />
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
            <Grid item container spacing={0} className={classes.moduleGrid}>
                {modules.map((module, i) => {
                    const { currentCompletion } = completions[module.id];
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
                                    completion={currentCompletion}
                                    loading={loading}
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

export default Main;
