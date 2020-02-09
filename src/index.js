import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const errors = getRandomInt(10);

ReactDOM.render(
    <App errors={errors}/>,
    document.getElementById(`root`)
);
