import React from "react";
import { useState } from "react";
import { Form } from "react-final-form";
import { Button } from "@material-ui/core";

const Survey = ({ onSubmit, initialValues, children }) => {
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

    return (
        <Form
            initialValues={values}
            validate={validate}
            onSubmit={handleSubmit}
            render={({ handleSubmit, submitting, values }) => (
                <form onSubmit={handleSubmit} noValidate>
                    {activePage}
                    <div className="buttons">
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

                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    );
};

Survey.Page = ({ children }) => children;

export default Survey;
