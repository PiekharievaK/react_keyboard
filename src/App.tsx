import React from 'react';

type Props = {};

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: null,
  };

  keyUp = (keyboardEvent: KeyboardEvent) => {
    this.setState({ pressedKey: keyboardEvent.key });
  };

  componentDidMount = () => {
    document.addEventListener('keyup', this.keyUp);

    return () => {
      document.removeEventListener('keyup', this.keyUp);
    };
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
