import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import questions from './mocks/questions';

const ERRORS_COUNT = 3;

ReactDOM.render(
    <App errors={ERRORS_COUNT} questions={questions}/>,
    document.getElementById(`root`)
);
