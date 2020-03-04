import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ModuleContent from '../../shared/modules/ModuleContent';
import modules from '../../shared/modules/modules'

const Networking = () => {
    const classes = styles()
    const networking = modules.filter(module => module.title === "Networking & Pitching");
    return (
        <ModuleContent
            title={module.title}
         //   description={module.description}
        />

        // <Container className={classes.container}>
        //     <Grid item container spacing={0}>
        //         {modules.map((module) =>
        //             (
        //                 <Grid key={modules.id} item>
        //                     <ModuleContent
        //                         title={modules.title}
        //                         description={module.description}
        //                     />
        //                 </Grid>
        //             )
        //         )}
        //     </Grid>
        // </Container>
    );
}

const styles = makeStyles(theme => ({
    title: {
        margin: '20px 0'
    },
    container: {
        maxWidth: 1500
    }
}))

export default Networking