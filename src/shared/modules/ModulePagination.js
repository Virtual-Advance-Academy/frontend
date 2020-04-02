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

const ModulePagination = ({ onSubmit, initialValues, children, ...props }) => {
    const [page, setPage] = useState(0);

    const next = () => setPage(Math.min(page + 1, children.length - 1));

    const previous = () => setPage(Math.max(page - 1, 0));

    const pages = React.Children.toArray(children);
    const activePage = pages[page];
    const isLastPage = page === pages.length - 1;
    const currentPage = page + 1;
    const completed = (currentPage / pages.length) * 100;

    const classes = styles();

    return (
        <>
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
                            {page > 0 && (
                                <Button variant="contained" onClick={previous}>
                                    « Previous
                                </Button>
                            )}
                            {!isLastPage && (
                                <Button variant="contained" onClick={next}>
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

const styles = makeStyles(theme => ({
    paginationFooter: {
        position: "sticky",
        bottom: 0,
        width: "100%",
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
