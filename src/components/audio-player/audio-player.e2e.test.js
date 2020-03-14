import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";

Enzyme.configure({
  adapter: new Adapter(),
});

HTMLMediaElement.prototype.play = () => {};
HTMLMediaElement.prototype.pause = () => {};

it(`Click on play button should be pressed and change state`, () => {
  const onPlayButtonClick = jest.fn();

  const screen = mount(
      <AudioPlayer
        src={`https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`}
        isPlaying={false}
        onPlayButtonClick={onPlayButtonClick}
      />);

  const playButton = screen.find(`button`);

  playButton.props().onClick();

  expect(playButton.hasClass(`track__button--play`)).toBe(true);
});
