import React from "react";
import {
    Button,
    Grid,
    makeStyles,
    LinearProgress,
    Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import ScrollToTop from "shared/ScrollToTop";
import {
    Link,
    useRouteMatch,
    useParams,
    generatePath,
    Redirect
} from "react-router-dom";

const ModulePagination = ({ onSubmit, initialValues, children, ...props }) => {
    const match = useRouteMatch();
    const { page = 1 } = useParams();

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("xs"));

    const currentPage = parseInt(page);
    const pages = React.Children.toArray(children);
    const activePage = pages[currentPage - 1];
    const isLastPage = currentPage === pages.length;
    const completed = (currentPage / pages.length) * 100;
    const multiPaged = pages.length > 1;

    const classes = styles();

    return (
        <>
            {(page < 1 || page > pages.length) && <Redirect to="/404" />}
            <ScrollToTop />
            {activePage}
            <Grid
                item
                container
                spacing={2}
                className={classes.paginationFooter}
                direction="column"
            >
                {multiPaged && (
                    <Grid item>
                        <LinearProgress
                            variant="determinate"
                            value={completed}
                        />
                    </Grid>
                )}
                <Grid
                    item
                    container
                    className={classes.buttons}
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        {multiPaged && (
                            <Typography>
                                Page {currentPage} of {pages.length}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item>
                        {currentPage > 1 && (
                            <Button
                                variant="contained"
                                size={isXs ? "small" : "medium"}
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
                                size={isXs ? "small" : "medium"}
                                component={Link}
                                to={generatePath(match.path, {
                                    page: currentPage + 1
                                })}
                            >
                                Next »
                            </Button>
                        )}
                        {isLastPage && (
                            <Button
                                variant="contained"
                                size={isXs ? "small" : "medium"}
                                color="primary"
                                component={Link}
                                to="/modules"
                            >
                                Modules
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

const styles = makeStyles((theme) => ({
    paginationFooter: {
        position: "sticky",
        bottom: 0,
        width: "auto",
        marginTop: 25,
        padding: "8px 0 10px 0",
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
