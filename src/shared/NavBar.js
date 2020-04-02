import React, { useGlobal, useDispatch } from "reactn";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import clsx from "clsx";
import logo from "../assets/AdvanceLogo.png";
import MenuDrawer, { drawerWidth } from "./MenuDrawer";

import { Avatar, Typography } from "@material-ui/core";
import UserDrawer from "./UserDrawer";
import UserAvatar from "./UserAvatar";

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

const NavBar = () => {
    const classes = useStyles();
    const [jwt] = useGlobal("jwt");

    const [menuOpen] = useGlobal("menuDrawer");
    const [userOpen] = useGlobal("userDrawer");
    const openDrawer = useDispatch("openDrawer");
    const closeDrawer = useDispatch("closeDrawer");

    const handleDrawerOpen = (drawer) => (e) => {
        openDrawer(drawer);
    };

    const handleDrawerClose = (drawer) => (e) => {
        closeDrawer(drawer);
    };

    return (
        <>
            <AppBar
                color="default"
                position="sticky"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: menuOpen
                })}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen("menu")}
                        className={clsx(
                            classes.menuButton,
                            menuOpen && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/" className={classes.linkFix}>
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Link>
                    {!jwt && <LoginButton />}
                    {jwt && (
                        <UserAvatar
                            className={classes.UserAvatar}
                            onClick={handleDrawerOpen("user")}
                        />
                    )}
                </Toolbar>
            </AppBar>
            <MenuDrawer open={menuOpen} onClose={handleDrawerClose("menu")} />
            <UserDrawer open={userOpen} onClose={handleDrawerClose("user")} />
        </>
    );
};

const useStyles = makeStyles((theme) => ({
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
    UserAvatar: {
        marginLeft: "auto",
        border: "4px solid " + theme.palette.primary.dark,
        cursor: "pointer"
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
    },
    linkFix: {
        fontSize: 0
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
