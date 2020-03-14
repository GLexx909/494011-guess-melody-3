import React, {PureComponent} from 'react';
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import QuestionArtist from "../question-artist/question-artist";
import GameScreen from "../game-screen/game-screen.js";
import QuestionGenre from "../question-genre/question-genre";
import {GameType} from "../../const";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player.js";

const QuestionArtistWrapped = withAudioPlayer(QuestionArtist);
const QuestionGenreWrapped = withAudioPlayer(QuestionGenre);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }

  _renderGameScreen() {
    const {errors, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errors={errors}
          onWelcomeButtonClick={() => {
            this.setState({
              step: 0,
            });
          }}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
            >
              <QuestionArtistWrapped
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type}
            >
              <QuestionGenreWrapped
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {

    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtistWrapped
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenreWrapped
              question={questions[0]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

App.propTypes = {
  errors: PropTypes.number,
  questions: PropTypes.array.isRequired
};

App.defaultProps = {
  errors: 0
};

export default App;
