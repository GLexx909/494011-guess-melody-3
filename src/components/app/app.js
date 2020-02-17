import React from 'react';
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";

const App = ({errors}) => <WelcomeScreen errors={errors} onWelcomeButtonClick={() => `true`}/>;

App.propTypes = {
  errors: PropTypes.number
};

App.defaultProps = {
  errors: 0
};

export default App;
