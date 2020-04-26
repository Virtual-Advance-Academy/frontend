import React from "react";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/moduleData";
import ModulePagination from "shared/modules/ModulePagination";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const WhatToWear = () => {
    const [clothing] = modules.filter(
        (module) => module.title === "What to Wear"
    );
    const classes = styles();

    return (
        <ModuleContent
            title={clothing.title}
            description={clothing.description}
            image={clothing.image}
        >
            <ModulePagination>
                <ModulePagination.Page>
                    <Grid container justify="center">
                        <Typography
                            className={classes.annoucement}
                            variant="h2"
                            color="primary"
                            gutterBottom
                        >
                            Coming Soon...
                        </Typography>
                    </Grid>
                </ModulePagination.Page>
            </ModulePagination>
        </ModuleContent>
    );
};

const styles = makeStyles((theme) => ({
    annoucement: {
        fontWeight: "700",
        padding: "10%"
    }
}));

export default WhatToWear;
