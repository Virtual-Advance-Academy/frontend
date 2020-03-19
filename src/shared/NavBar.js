import React, { useGlobal, useState } from "reactn";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import clsx from "clsx";
import logo from "../assets/AdvanceLogo.png";
import MenuDrawer, { drawerWidth } from "./MenuDrawer";

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

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar
                color="default"
                position="sticky"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Link>
                    {!jwt && <LoginButton />}
                    {jwt && <UserAvatar />}
                </Toolbar>
            </AppBar>
            <MenuDrawer open={open} onClose={handleDrawerClose} />
        </>
    );
};

const useStyles = makeStyles(theme => ({
    logo: {
        maxWidth: 160,
        marginLeft: 10
    },
    root: {
        flexGrow: 1
    },
    loginButton: {
        marginLeft: "auto"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: "none"
    }
}));

// const NavBar = () => {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     return (
//         <div className={classes.root}>
//             <AppBar color="default" position="sticky" className={clsx(classes.appBar, {
//                 [classes.appBarShift]: open,
//             })}>
//                 <Toolbar>
//                     <IconButton edge="start" color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         className={clsx(classes.menuButton, open && classes.hide)}>
//                         <MenuIcon />
//                     </IconButton>
//                     <a href='/'>
//                         <img src={logo} alt='logo' className={classes.logo} />
//                     </a>
//                     <Button variant="outlined" className={classes.loginButton}>Login</Button>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     )
// }

export default NavBar;
