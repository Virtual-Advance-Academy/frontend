import React from "react";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/moduleData";
import ModulePagination from "shared/modules/ModulePagination";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const DosAndDonts = () => {
    const [dosanddonts] = modules.filter(
        (module) => module.title === "The Do's & Don'ts"
    );
    const classes = styles();

    return (
        <ModuleContent
            title={dosanddonts.title}
            description={dosanddonts.description}
            image={dosanddonts.image}
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

export default DosAndDonts;
