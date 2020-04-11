import React from "react";
import { Grid, Typography, Container, makeStyles } from "@material-ui/core";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";

const WhatToWear = () => {
    const classes = styles();
    const [clothing] = modules.filter(
        (module) => module.title === "What to Wear"
    );
    return (
        <ModuleContent
            title={clothing.title}
            description={clothing.description}
            image={clothing.image}
        />
    );
};

const styles = makeStyles((theme) => ({}));

export default WhatToWear;
