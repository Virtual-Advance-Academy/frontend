import React from "react";
import Survey from "shared/Survey";
import { Radios, Checkboxes, makeValidate } from "mui-rff";
import survey from "shared/SurveyData";
import { InputLabel, makeStyles, FormLabel } from "@material-ui/core";
import * as Yup from "yup";

const SurveyPage = () => {
    let pages = makePages(survey);
    console.log(pages);
    return (
        <Survey
            onSubmit={values => {
                alert(values);
            }}
        >
            {pages.map(page => {
                return <Survey.Page {...page}></Survey.Page>;
            })}
        </Survey>
    );
};

const makePages = questions => {
    let pages = [];
    questions.forEach(q => {
        if (!pages[q.page]) pages[q.page] = [];
        pages[q.page].push(q);
    });

    pages = pages.map(page => {
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

const makeInput = q => {
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
                />
            );
        case "matrix":
            q.data = q.data.map((subQ, i) => ({
                ...subQ,
                number: `${q.number}-${i}`,
                required: q.required
            }));
            return (
                <div>
                    <FormLabel>{q.question}</FormLabel>
                    <header className={classes.matrixHeader}>
                        <div></div>
                        <div className={classes.matrixHeadings}>
                            {q.header.map(h => (
                                <InputLabel>{h}</InputLabel>
                            ))}
                        </div>
                    </header>
                    <div className={classes.matrix}>
                        {q.data.map(makeInput)}
                    </div>
                </div>
            );
        default:
            return null;
    }
};

const makeSchema = q => {
    switch (q.type) {
        case "radio":
            return {
                [`question-${q.number}`]: Yup.mixed()
                    .required()
                    .label("This")
            };
        case "checkbox":
            return {
                [`question-${q.number}`]: Yup.array()
                    .required()
                    .label("This")
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

const styles = makeStyles(theme => ({
    matrix: {
        display: "grid",
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
    }
}));

export default SurveyPage;
