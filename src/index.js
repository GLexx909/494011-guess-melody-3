import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const ERRORS = 3;

ReactDOM.render(
    <App errors={ERRORS}/>,
    document.getElementById(`root`)
);
