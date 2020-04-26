import React from "react";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/moduleData";
import ModulePagination from "shared/modules/ModulePagination";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const InternshipTypes = () => {
    const [internships] = modules.filter(
        (module) => module.title === "Types of Internships"
    );
    const classes = styles();

    return (
        <ModuleContent
            title={internships.title}
            description={internships.description}
            image={internships.image}
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
export default InternshipTypes;
