import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";

const AppProcess = () => {
    const classes = styles();
    const [applications] = modules.filter(
        (module) => module.title === "Application Process"
    );
    return (
        <ModuleContent
            title={applications.title}
            description={applications.description}
            image={applications.image}
        />
    );
};

const styles = makeStyles((theme) => ({}));

export default AppProcess;
