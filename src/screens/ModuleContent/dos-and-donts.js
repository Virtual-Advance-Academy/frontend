import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";

const DosAndDonts = () => {
    const classes = styles();
    const [dosanddonts] = modules.filter(
        (module) => module.title === "The Do's & Don'ts"
    );
    return (
        <ModuleContent
            title={dosanddonts.title}
            description={dosanddonts.description}
            image={dosanddonts.image}
        />
    );
};

const styles = makeStyles((theme) => ({}));

export default DosAndDonts;
