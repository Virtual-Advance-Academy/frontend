import React from "react";
import Survey from "shared/Survey";
import { Radios, Checkboxes } from "mui-rff";
import survey from "shared/SurveyData";
import { InputLabel, makeStyles } from "@material-ui/core";

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
                return <Survey.Page>{page.children}</Survey.Page>;
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

        page = page.map(makeInput);

        return {
            validation: {},
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
                />
            );
        case "matrix":
            q.data = q.data.map((subQ, i) => ({
                ...subQ,
                number: `${q.number}-${i}`
            }));
            return (
                <div>
                    <InputLabel>{q.question}</InputLabel>
                    <header className={classes.matrixHeader}>
                        <div></div>
                        <div className={classes.matrixHeadings}>
                            {q.header.map(h => <InputLabel>{h}</InputLabel>)}
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

const styles = makeStyles(theme => ({
    matrix: {
        display: "grid",
        "& > *": {
            display: "grid",
            gridTemplateColumns: "repeat(1, 25% 1fr)",
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
        gridTemplateColumns: "repeat(1, 25% 1fr)"
    },
    matrixHeadings: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        textAlign: "center"
    }
}));

export default SurveyPage;
