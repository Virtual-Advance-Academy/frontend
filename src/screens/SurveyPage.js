import React, { useGlobal, useDispatch } from "reactn";
import Survey from "shared/Survey";
import { Radios, Checkboxes, makeValidate } from "mui-rff";
import survey from "shared/SurveyData";
import {
    InputLabel,
    makeStyles,
    FormLabel,
    Grid,
    Typography,
    FormControl
} from "@material-ui/core";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { makeClient } from "utils/Client";
import { Redirect, useHistory } from "react-router-dom";

const SurveyPage = () => {
    const pages = makePages(survey);
    const classes = styles();

    const [jwt] = useGlobal("jwt");
    const [user] = useGlobal("user");
    const Client = makeClient(jwt);
    const login = useDispatch("login");
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const submitSurvey = async (values) => {
        try {
            const res = await Client.submitSurvey(values);
            //Response returns a new JWT denoting that the survey was completed
            login(res.data.token);
        } catch (e) {
            console.log(e);
            console.log(e.response);
            let errorMsg =
                e.response && e.response.data
                    ? e.response.data.message
                    : e.toString();
            enqueueSnackbar(errorMsg);
        }
    };

    return (
        <>
            {user && user.completedSurvey && <Redirect to="/modules" />}
            <Grid
                container
                justify="center"
                alignItems="center"
                className={classes.page}
            >
                <Grid
                    item
                    container
                    xs={11}
                    lg={7}
                    xl={5}
                    className={classes.surveyContainer}
                >
                    <Grid item xs={10} lg={3}>
                        <Typography
                            className={classes.mainTitle}
                            variant="h2"
                            color="primary"
                            component="p"
                        >
                            <span>Survey </span>
                        </Typography>
                    </Grid>
                    <Grid
                        component={Survey}
                        item
                        container
                        direction="column"
                        lg={8}
                        spacing={3}
                        onSubmit={submitSurvey}
                    >
                        {pages.map((page) => {
                            return (
                                <Survey.Page {...page}>
                                    {page.children.map((child) => {
                                        return (
                                            <Grid
                                                item
                                                className={classes.question}
                                            >
                                                {child}
                                            </Grid>
                                        );
                                    })}
                                </Survey.Page>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

const makePages = (questions) => {
    let pages = [];
    questions.forEach((q) => {
        if (!pages[q.page]) pages[q.page] = [];
        pages[q.page].push(q);
    });

    pages = pages.map((page) => {
        page.sort((a, b) => a.number - b.number);

        const schema = Yup.object().shape(
            page.map(makeSchema).reduce((a, c) => ({ ...a, ...c }))
        );

        page = page.map(makeInput);

        const validate = makeValidate(schema);

        return {
            validate,
            children: page
        };
    });

    return pages;
};

const makeInput = (q) => {
    const classes = styles();
    switch (q.type) {
        case "radio":
            return (
                <Radios
                    data={q.data}
                    label={q.question}
                    name={`question-${q.number}`}
                    helperText={q.helperText}
                    radioGroupProps={{ row: q.row }}
                    formControlLabelProps={q.row && { labelPlacement: "top" }}
                    required={q.required}
                />
            );

        case "checkbox":
            return (
                <Checkboxes
                    data={q.data}
                    label={q.question}
                    name={`question-${q.number}`}
                    helperText={q.helperText}
                    formGroupProps={{ row: q.row }}
                    required={q.required}
                    formControlProps={q.grid && { className: classes.grid }}
                />
            );
        case "matrix":
            q.data = q.data.map((subQ, i) => ({
                ...subQ,
                number: `${q.number}-${i}`,
                required: q.required
            }));
            return (
                <FormControl>
                    <FormLabel>{q.question}</FormLabel>
                    <header className={classes.matrixHeader}>
                        <div></div>
                        <div className={classes.matrixHeadings}>
                            {q.header.map((h) => (
                                <FormLabel>{h}</FormLabel>
                            ))}
                        </div>
                    </header>
                    <div className={classes.matrix}>
                        {q.data.map(makeInput)}
                    </div>
                </FormControl>
            );
        default:
            return null;
    }
};

const makeSchema = (q) => {
    switch (q.type) {
        case "radio":
            return {
                [`question-${q.number}`]: Yup.mixed().required().label("This")
            };
        case "checkbox":
            return {
                [`question-${q.number}`]: Yup.array().required().label("This")
            };
        case "matrix":
            return q.data
                .map((subQ, i) => ({ ...subQ, number: `${q.number}-${i}` }))
                .map(makeSchema)
                .reduce((a, c) => ({ ...a, ...c }));
        default:
            return {};
    }
};

const styles = makeStyles((theme) => ({
    matrix: {
        display: "grid",
        gridRowGap: "10px",
        "& > *": {
            display: "grid",
            gridTemplateColumns: "repeat(1, 35% 1fr)",
            alignItems: "center",
            "& > .MuiFormGroup-root": {
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                "& .MuiFormControlLabel-root": {
                    justifyContent: "center",
                    margin: "unset"
                }
            }
        }
    },
    matrixHeader: {
        display: "grid",
        gridTemplateColumns: "repeat(1, 35% 1fr)"
    },
    matrixHeadings: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        textAlign: "center"
    },
    grid: {
        "& > .MuiFormGroup-root": {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)"
        }
    },
    mainTitle: {
        display: "inline-block",
        "& span": {
            display: "block"
        }
    },
    titleSpacing: {
        marginRight: "80px",
        [theme.breakpoints.down("xs")]: {
            marginRight: "unset"
        }
    },
    page: {
        minHeight: "100vh"
    },
    surveyContainer: {
        [theme.breakpoints.up("lg")]: {
            padding: "60px 0"
        },
        padding: "30px 0"
    },
    question: {
        "& > .MuiFormControl-root": {
            width: "100%",
            "& .MuiFormGroup-root.MuiFormGroup-row": {
                justifyContent: "space-around"
            },
            "& > .MuiFormLabel-root": {
                fontSize: "1.1rem",
                marginBottom: "10px",
                lineHeight: "1.5rem"
            }
        }
    }
}));

export default SurveyPage;
