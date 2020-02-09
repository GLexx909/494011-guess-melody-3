import React from 'react';
import WelcomeScreen from "../welcome-screen/welcome-screen";

{/* eslint-disable-next-line react/prop-types        */}
const App = ({errors}) => {
  return (
    <div>
      {/* eslint-disable-next-line react/prop-types        */}
      <WelcomeScreen errors={errors}/>
    </div>
  );
};

export default App;
