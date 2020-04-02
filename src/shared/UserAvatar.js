import React, { useGlobal } from "reactn";
import clsx from "clsx";
import { makeStyles, Avatar, Typography } from "@material-ui/core";

const UserAvatar = ({ className, ...props }) => {
    const classes = useStyles();

    const [user] = useGlobal("user");
    const firstLetter = user.name.toUpperCase().split(" ")[0].split("")[0];
    const lastLetter = user.name.toUpperCase().split(" ")[1].split("")[0];
    return (
        <Avatar {...props} className={clsx(classes.UserAvatar, className)}>
            <Typography variant="inherit">
                {firstLetter}
                {lastLetter}
            </Typography>
        </Avatar>
    );
};

const useStyles = makeStyles((theme) => ({
    UserAvatar: {
        boxSizing: "content-box",
        background: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold
    }
}));

export default UserAvatar;
