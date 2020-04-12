import React, { useGlobal, useDispatch } from "reactn";
import {
    Drawer,
    ListItemIcon,
    makeStyles,
    ListItemText,
    ListItem,
    Divider,
    List,
    Typography
} from "@material-ui/core";
import { ExitToApp, Person } from "@material-ui/icons";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const UserDrawer = ({ open, onClose }) => {
    const classes = useStyles();
    const [user] = useGlobal("user");
    const logout = useDispatch("logout");
    const name = (user && user.name) || "";

    function ListItemLink(props) {
        const clickChain = () => {
            onClose();
            props.onClick && props.onClick();
        };
        return (
            <ListItem button component="a" {...props} onClick={clickChain} />
        );
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="temporary"
            anchor="right"
            open={open}
            onClose={onClose}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerHeader}>
                <Typography variant="h4" component="h2">
                    {name}
                </Typography>
            </div>
            <Divider />
            <List>
                <ListItemLink component={Link} to="/profile">
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemLink>
                <ListItemLink onClick={logout}>
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemLink>
            </List>
        </Drawer>
    );
};

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        padding: theme.spacing(1, 1),
        ...theme.mixins.toolbar
    }
}));

export default UserDrawer;
export { drawerWidth };
