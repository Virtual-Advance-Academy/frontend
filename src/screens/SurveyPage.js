import React from 'react'
import Survey from 'shared/Survey';

const SurveyPage = () => {
    return <Survey onSubmit={(values) => {alert(values)}}>
        <Survey.Page>
            Test 1
        </Survey.Page>
        <Survey.Page>
            Test 2
        </Survey.Page>
        <Survey.Page>
            Test 3
        </Survey.Page>
    </Survey>
}

export default SurveyPage;