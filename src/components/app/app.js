import React from 'react';
import WelcomeScreen from "../welcome-screen/welcome-screen";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/*eslint-disable-next-line react/prop-types        */}
        <WelcomeScreen errors={this.props.errors}/>
      </div>
    );
  }
}
