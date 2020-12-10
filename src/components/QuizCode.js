import React from 'react';
/* import ReactDOM from 'react-dom'; */
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

class QuizCode extends React.Component {
  state = {
    code: this.props.match.params.quizCode,
    value: '',
    copied: false,
  };

  handleButton = () => {
    this.props.history.push(`/quiz-code/lobbygame/${this.state.code}`);
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="quizcode-wrapper">
          <div className="quizcode-pastebutton">
            <input
              className="primary-input"
              style={{ color: 'black' }}
              value={this.state.code}
              onChange={({ target: { code } }) =>
                this.setState({ code, copied: false })
              }
            />

            <CopyToClipboard
              text={this.state.code}
              onCopy={() => this.setState({ copied: true })}
            >
              <i className="far fa-copy"></i>
            </CopyToClipboard>

            {this.state.copied ? (
              <span style={{ color: 'red' }}>Copied.</span>
            ) : null}
          </div>
          <div>
            <button className="treat-button" onClick={this.handleButton}>
              Join Lobby
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(QuizCode);
