import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";

const TechnicalQuestions = () => {
    const classes = styles();
    const [technical] = modules.filter(
        (module) => module.title === "Technical Questions"
    );
    return (
        <ModuleContent
            title={technical.title}
            description={technical.description}
            image={technical.image}
        />
    );
};

const styles = makeStyles((theme) => ({}));

export default TechnicalQuestions;
