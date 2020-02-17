import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";

const errors = 3;

it(`<App/> should render component`, () => {
  const tree = renderer
    .create(
        <App errors={errors}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
