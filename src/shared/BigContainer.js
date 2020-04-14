import React from "react";
import { makeStyles, Container } from "@material-ui/core";

const BigContainer = ({ children }) => {
    const classes = styles();
    return <Container className={classes.container}>{children}</Container>;
};

const styles = makeStyles((theme) => ({
    container: {
        maxWidth: 1500,
        minHeight: "100vh"
    }
}));

const withBigContainer = (ComponentToWrap) => {
    return () => (
        <BigContainer>
            <ComponentToWrap />
        </BigContainer>
    );
};

export default BigContainer;
export { withBigContainer };
