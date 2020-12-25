import React from 'react';
import Quiz from '../utils/api';
import { withRouter } from 'react-router-dom';
import video from '../video/movie/party_playlist_video.mp4';

class Home extends React.Component {
  state = {
    displayName: '',
    quizCode: '',
  };

  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const quizService = new Quiz();
    let addedUser = this.state.displayName;
    console.log(addedUser);
    quizService.addUsers(this.state.quizCode, addedUser).then((response) => {
      console.log(`user ${addedUser} added`, response);
      this.props.history.push(`/quiz-code/lobbygame/${this.state.quizCode}`);
    });
  };

  render() {
    return (
      <div className="home-wrapper">
        <video src={video} id="video-home" autoPlay loop muted
            style= {{
            position:"absolute",
            width:"100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}
        >
        </video>
        <div className="home-form-wrapper">
          <h1 className="primary-title">Join a Game</h1>
          <form className="form-home" onSubmit={this.handleFormSubmit}>
            <div className="form-field">
              <label id="label"></label>
              <input
                className="primary-input"
                type="text"
                name="displayName"
                onChange={this.handleChange}
                value={this.state.displayName}
                placeholder="Display Name"
                autoFocus
                required
              />
            </div>
            <br />
            <div className="form-field">
              <label id="label"></label>
              <input
                className="primary-input"
                type="text"
                name="quizCode"
                onChange={this.handleChange}
                value={this.state.quizCode}
                placeholder="Game Pin"
                required
              />
            </div>
            <br />
            <div className="form-field">
              <button className="treat-button-home">Join!</button>
            </div>
          </form>
          <br />
          <br />
          <center className="p-home">
            Be a host and create a game! Log in{' '}
            <a href="/login-spotify" id="host">
              here
            </a>
          </center>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
