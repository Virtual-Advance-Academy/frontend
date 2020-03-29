import React from "react";
import Survey from "shared/Survey";
import { Radios, Checkboxes } from "mui-rff";
import survey from "shared/SurveyData";

const SurveyPage = () => {
    let pages = makePages(survey);
    console.log(pages)
    return (
        <Survey
            onSubmit={values => {
                alert(values);
            }}
        >
            {pages.map(page => {
                return (<Survey.Page>{page.children}</Survey.Page>);
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

        page = page.map(q => {
            switch (q.type) {
                case "radio":
                    return (
                        <Radios
                            data={q.data}
                            label={q.question}
                            name={`question-${q.number}`}
                            helperText={q.helperText}
                            radioGroupProps={{row: q.row}}
                        />
                    );

                case "checkbox":
                    return (
                        <Checkboxes
                            data={q.data}
                            label={q.question}
                            name={`question-${q.number}`}
                            helperText={q.helperText}
                            formGroupProps={{row: q.row}}
                        />
                    );
                default:
                    return null;
            }
        });

        return {
            validation: {},
            children: page
        };
    });

    return pages;
};

export default SurveyPage;
