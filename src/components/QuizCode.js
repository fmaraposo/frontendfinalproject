import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {withRouter} from 'react-router-dom'
 
class QuizCode extends React.Component {
    state = {
        code: this.props.match.params.quizCode,
     
    value: '',
    copied: false
  };
 
 
  render() {
    return (
      <div>
        <input value={this.state.code}
          onChange={({target: {code}}) => this.setState({code, copied: false})} />
 
        <CopyToClipboard text={this.state.code}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>
 
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
  }
}
 /*
const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<QuizCode />, appRoot); */

export default withRouter(QuizCode);