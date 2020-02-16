import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../assets/AdvanceLogo.png';

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar color="default" position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt='logo' className={classes.logo} />
                <Button variant="outlined" className={classes.loginButton}>Login</Button>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles(
    createStyles({
        logo: {
            maxWidth: 160,
            marginLeft: 10
        },
        root: {
            flexGrow: 1,
        },
        loginButton: {
            marginLeft: "auto"
        },
    })
);


export default NavBar;
