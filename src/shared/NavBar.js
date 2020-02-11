import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles';

import logo from '../assets/AdvanceLogo.png';

const NavBar = () => {
    const classes = useStyles();
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <img src={logo} alt='logo' className={classes.logo} />
            </Toolbar>
        </AppBar>
        </div>
    )
}

const useStyles = makeStyles(
    createStyles({
    logo: {
        maxWidth: 160,
    },
  })
);


export default NavBar;
