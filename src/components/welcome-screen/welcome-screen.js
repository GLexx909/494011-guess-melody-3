import React from 'react';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <div>
        {/*eslint-disable-next-line react/prop-types        */}
        { this.props.errors }
      </div>
    );
  }
}
