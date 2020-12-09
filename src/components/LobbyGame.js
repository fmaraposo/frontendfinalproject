import React from 'react';
import Quiz from '../utils/api';

class LobbyGame extends React.Component {
  state = {
    users: [],
  };
  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval(() => {
      const quizService = new Quiz();
      const quizCode = this.props.match.params.quizCode;
      quizService.getQuizUsers(quizCode).then((response) => {
        const game = response.data[0];
        this.setState({
          users: game.users,
        });
      });
    }, 500);
  }

  handleButton = () => {
    clearInterval(this.intervalID)
    const quizCode = this.props.match.params.quizCode;
    this.props.history.push(`/quiz-code/game/${quizCode}`);
  }

  render() {
    return this.state.users ? (
      <div>
        <h1>Hello from Lobby</h1>
        <div>
          <div>
            <ul>
              {this.state.users.map((user, index) => {
                return <li key={index}>{user}</li>;
              })}
            </ul>
          </div>
        </div>
        <button onClick={this.handleButton}>Start Game</button>
      </div>
    ) : (
      <div>Loading</div>
    );
  }
}

export default LobbyGame;
