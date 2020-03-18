import React from "react";
import { Drawer, ListItemIcon, makeStyles, ListItemText, ListItem, IconButton, Divider, List } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ClassIcon from '@material-ui/icons/Class';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const MenuDrawer = ({ open, onClose }) => {
    const classes = useStyles();

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} onClick={onClose} />;
    }    

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            onClose={onClose}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={onClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItemLink component={Link} to="/modules">
                    <ListItemIcon>
                        <ClassIcon />
                    </ListItemIcon>
                    <ListItemText primary="Modules" />
                </ListItemLink>
                <ListItemLink href="https://upe.cs.fiu.edu">
                    <ListItemIcon>
                        <AccountBalanceIcon />
                    </ListItemIcon>
                    <ListItemText primary="UPE" />
                </ListItemLink>
            </List>
        </Drawer>
    );
};

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
}));

export default MenuDrawer;
export { drawerWidth };
