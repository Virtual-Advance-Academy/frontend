import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";

const Pitching = () => {
    const classes = styles();
    const [pitching] = modules.filter(
        (module) => module.title === "Pitching Yourself"
    );
    return (
        <ModuleContent
            title={pitching.title}
            description={pitching.description}
            image={pitching.image}
        />
    );
};

const styles = makeStyles((theme) => ({}));

export default Pitching;
