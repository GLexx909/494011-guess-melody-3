import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

const errors = 3;

it(`<WelcomeScreen/> should render component`, () => {
  const tree = renderer
    .create(
        <WelcomeScreen errors={errors}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
