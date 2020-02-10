import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const ERRORS_COUNT = 3;

ReactDOM.render(
    <App errors={ERRORS_COUNT}/>,
    document.getElementById(`root`)
);
