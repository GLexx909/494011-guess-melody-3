import React from 'react';

{ /* eslint-disable-next-line react/prop-types        */ }
const WelcomeScreen = ({errors}) => {
  return (
    <div>
      {/* eslint-disable-next-line react/prop-types        */}
      <li>Нужно ответить на все вопросы.</li>
      <li>Можно допустить { errors } ошибки.</li>
    </div>
  );
};

export default WelcomeScreen;
