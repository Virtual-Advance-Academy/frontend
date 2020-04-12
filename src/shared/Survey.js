import React from "react";
import { useState } from "react";
import { Form } from "react-final-form";
import {
    Button,
    Grid,
    makeStyles,
    LinearProgress,
    Typography
} from "@material-ui/core";
import ScrollToTop from "./ScrollToTop";

const Survey = ({ onSubmit, initialValues, children, ...props }) => {
    const [formState, setFormState] = useState({
        page: 0,
        values: initialValues || {}
    });

    const next = values =>
        setFormState(state => ({
            page: Math.min(state.page + 1, children.length - 1),
            values
        }));

    const previous = () =>
        setFormState(state => ({
            ...state,
            page: Math.max(state.page - 1, 0)
        }));

    const handleSubmit = values => {
        const { page } = formState;
        const isLastPage = page === React.Children.count(children) - 1;
        if (isLastPage) {
            return onSubmit(values);
        } else {
            next(values);
        }
    };

    const validate = values => {
        const { page } = formState;
        const activePage = React.Children.toArray(children)[page];
        return activePage.props.validate
            ? activePage.props.validate(values)
            : {};
    };

    const { page, values } = formState;
    const pages = React.Children.toArray(children);
    const activePage = pages[page];
    const isLastPage = page === pages.length - 1;
    const currentPage = page + 1;
    const completed = (currentPage / pages.length) * 100;

    const classes = styles();

    return (
        <Form
            initialValues={values}
            validate={validate}
            onSubmit={handleSubmit}
            subscription={{ submitting: true, pristine: true }}
            render={({ handleSubmit, submitting, values }) => (
                <Grid
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    {...props}
                >
                    <ScrollToTop />
                    {activePage}
                    <Grid
                        item
                        container
                        spacing={2}
                        className={classes.surveyFooter}
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
                        >
                            <Grid item>
                                <Typography>
                                    Page {currentPage} of {pages.length}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {page > 0 && (
                                    <Button
                                        variant="contained"
                                        onClick={previous}
                                    >
                                        « Previous
                                    </Button>
                                )}
                                {!isLastPage && (
                                    <Button variant="contained" type="submit">
                                        Next »
                                    </Button>
                                )}
                                {isLastPage && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        Submit
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>

                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </Grid>
            )}
        />
    );
};

const styles = makeStyles(theme => ({
    surveyFooter: {
        position: "sticky",
        bottom: 0,
        width: "100%",
        alignSelf: "center",
        background: theme.palette.background.default
    },
    buttons: {
        "& .MuiButton-root": {
            marginLeft: 4
        }
    }
}));

Survey.Page = ({ children }) => children;

export default Survey;
