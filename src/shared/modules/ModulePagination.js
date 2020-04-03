import React from "react";
import { useState } from "react";
import {
    Button,
    Grid,
    makeStyles,
    LinearProgress,
    Typography
} from "@material-ui/core";
import ScrollToTop from "shared/ScrollToTop";
import {
    Link,
    Switch,
    useRouteMatch,
    useParams,
    generatePath,
    Redirect
} from "react-router-dom";

const ModulePagination = ({ onSubmit, initialValues, children, ...props }) => {
    const match = useRouteMatch();
    const { page = 1 } = useParams();

    const currentPage = parseInt(page);
    const pages = React.Children.toArray(children);
    const activePage = pages[currentPage - 1];
    const isLastPage = currentPage === pages.length;
    const completed = (currentPage / pages.length) * 100;

    const classes = styles();

    return (
        <>
            {(page < 1 || page > pages.length) && <Redirect to="/404" />}
            <ScrollToTop />
            {activePage}
            {pages.length > 0 && (
                <Grid
                    item
                    container
                    spacing={2}
                    className={classes.paginationFooter}
                    direction="column"
                >
                    <Grid item>
                        <LinearProgress
                            variant="determinate"
                            value={completed}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        className={classes.buttons}
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography>
                                Page {currentPage} of {pages.length}
                            </Typography>
                        </Grid>
                        <Grid item>
                            {currentPage > 1 && (
                                <Button
                                    variant="contained"
                                    component={Link}
                                    to={generatePath(match.path, {
                                        page: currentPage - 1
                                    })}
                                >
                                    « Previous
                                </Button>
                            )}
                            {!isLastPage && (
                                <Button
                                    variant="contained"
                                    component={Link}
                                    to={generatePath(match.path, {
                                        page: currentPage + 1
                                    })}
                                >
                                    Next »
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

const styles = makeStyles((theme) => ({
    paginationFooter: {
        position: "sticky",
        bottom: 0,
        width: "auto",
        marginTop: 25,
        paddingBottom: 10,
        alignSelf: "center",
        background: theme.palette.background.default
    },
    buttons: {
        "& .MuiButton-root": {
            marginLeft: 4
        }
    }
}));

ModulePagination.Page = ({ children }) => children;

export default ModulePagination;
