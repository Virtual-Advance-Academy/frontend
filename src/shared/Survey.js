import React from "react";
import { useState } from "react";
import { Form } from "react-final-form";
import { Button, Grid, makeStyles } from "@material-ui/core";
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
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    const classes = styles();

    return (
        <Form
            initialValues={values}
            validate={validate}
            onSubmit={handleSubmit}
            subscription={{submitting: true, pristine: true}}
            render={({ handleSubmit, submitting, values }) => (
                <Grid
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    {...props}
                >
                    <ScrollToTop />
                    {activePage}
                    <Grid item container className={classes.buttons}>
                        <div>
                            {page > 0 && (
                                <Button variant="contained" onClick={previous}>
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
                        </div>
                    </Grid>

                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </Grid>
            )}
        />
    );
};

const styles = makeStyles(theme => ({
    buttons: {
        position: "sticky",
        bottom: 0,
        background: theme.palette.background.default,
        "& > div": {
            marginLeft: "auto",
            "& > *:last-of-type": {
                marginLeft: "4px"
            }
        }
    }
}));

Survey.Page = ({ children }) => children;

export default Survey;
