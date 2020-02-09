import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const errors = `Some errors. I don't know where I was supposed to get them from...`;

ReactDOM.render(
    <App errors={errors}/>,
    document.getElementById(`root`)
);
