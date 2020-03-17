// <<<<<<< HEAD
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
// =======
// import React from 'react'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ClassIcon from '@material-ui/icons/Class'; import clsx from 'clsx';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import logo from '../assets/AdvanceLogo.png';
// import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

// const drawerWidth = 240;

// const NavBar = () => {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     function ListItemLink(props) {
//         return <ListItem button component="a" {...props} />;
//     }

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
//             <Drawer className={classes.drawer}
//                 variant="persistent"
//                 anchor="left"
//                 open={open}
//                 classes={{
//                     paper: classes.drawerPaper,
//                 }}
//             >
//                 <div className={classes.drawerHeader}>
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                     </IconButton>
//                 </div>
//                 <Divider />
//                 <List>
//                     <ListItemLink href="/modules">
//                         <ListItemIcon><ClassIcon /></ListItemIcon>
//                         <ListItemText primary="Modules" />
//                     </ListItemLink>
//                     <ListItemLink href="https://upe.cs.fiu.edu">
//                         <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
//                         <ListItemText primary="UPE" />
//                     </ListItemLink>
//                 </List>
//             </Drawer>
//         </div>
//     )
// }

// const useStyles = makeStyles(theme => ({
//     logo: {
//         maxWidth: 160,
//         marginLeft: 10
//     },
//     root: {
//         flexGrow: 1,
//     },
//     loginButton: {
//         marginLeft: "auto"
//     },
//     appBar: {
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     hide: {
//         display: 'none',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: theme.spacing(0, 1),
//         ...theme.mixins.toolbar,
//         justifyContent: 'flex-end',
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: -drawerWidth,
//     },
//     contentShift: {
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//     },
// })
// >>>>>>> development
);

export default NavBar;
