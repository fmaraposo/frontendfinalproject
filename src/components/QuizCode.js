import React from 'react';
/* import ReactDOM from 'react-dom'; */
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withRouter } from 'react-router-dom';

class QuizCode extends React.Component {
  state = {
    code: this.props.match.params.quizCode,
    value: '',
    copied: false,
  };

  handleButton = () => {
    this.props.history.push(`/quiz-code/lobbygame/${this.state.code}`);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.code}
          onChange={({ target: { code } }) =>
            this.setState({ code, copied: false })
          }
        />

        <CopyToClipboard
          text={this.state.code}
          onCopy={() => this.setState({ copied: true })}
        >
          <i className='far fa-copy'></i>
        </CopyToClipboard>

        {this.state.copied ? (
          <span style={{ color: 'red' }}>Copied.</span>
        ) : null}
        <div>
          <button onClick={this.handleButton}>Join Lobby Game</button>
        </div>
      </div>
    );
  }
}

export default withRouter(QuizCode);
