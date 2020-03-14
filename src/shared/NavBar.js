import React, { useGlobal } from "reactn";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import logo from "../assets/AdvanceLogo.png";
import { Avatar } from "@material-ui/core";

const LoginButton = () => {
    const classes = useStyles();
    return (
        <Button
            variant="outlined"
            className={classes.loginButton}
            component={Link}
            to="/login"
        >
            Login
        </Button>
    );
};
const UserAvatar = () => {
    const classes = useStyles();
    const [user] = useGlobal("user");
    const firstLetter = user.name
        .toUpperCase()
        .split(" ")[0]
        .split("")[0];
    const lastLetter = user.name
        .toUpperCase()
        .split(" ")[1]
        .split("")[0];
    return (
        <Avatar className={classes.loginButton}>
            {firstLetter}
            {lastLetter}
        </Avatar>
    );
};

const NavBar = () => {
    const classes = useStyles();
    const [jwt] = useGlobal("jwt");
    return (
        <AppBar color="default" position="sticky">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt="logo" className={classes.logo} />
                {!jwt && <LoginButton />}
                {jwt && <UserAvatar />}
            </Toolbar>
        </AppBar>
    );
};

const useStyles = makeStyles(
    createStyles({
        logo: {
            maxWidth: 160,
            marginLeft: 10
        },
        root: {
            flexGrow: 1
        },
        loginButton: {
            marginLeft: "auto"
        }
    })
);

export default NavBar;
