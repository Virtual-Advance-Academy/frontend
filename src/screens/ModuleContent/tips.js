import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";

const Tips = () => {
    const classes = styles();
    const [tips] = modules.filter(
        (module) => module.title === "Tips from the Pros"
    );
    return (
        <ModuleContent
            title={tips.title}
            description={tips.description}
            image={tips.image}
        />
    );
};

const styles = makeStyles((theme) => ({}));

export default Tips;
