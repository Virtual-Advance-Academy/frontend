import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { makeStyles, Container } from "@material-ui/core";

const Page = ({ children }) => {
    const classes = styles();
    return (
        <>
            <NavBar />
            <Container className={classes.container}>{children}</Container>
            <Footer />
        </>
    );
};

const styles = makeStyles((theme) => ({
    container: {
        maxWidth: 1500,
        minHeight: "100vh"
    }
}));

export default Page;
