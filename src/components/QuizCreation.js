import React from 'react';
import Quiz from '../utils/api';

class QuizCreation extends React.Component {
  state = {
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  };

  render() {
    return (
      <div className="quizzCreation">
        <h1>Hello from Quiz Creation</h1>
        <form>
          <div className="question">
            <div className="labelQuestion">
              <label>Question 1</label>
            </div>
            <div className="inputQuestion">
              <input
                type="text"
                name="question1"
                onChange={this.handleChange}
                value={this.state.question1}
                placeholder="What's your favorite song?"
              />
            </div>
          </div>
          <div className="question">
            <div className="labelQuestion">
              <label>Question 1</label>
            </div>
            <div className="inputQuestion">
              <input
                type="text"
                name="question1"
                onChange={this.handleChange}
                value={this.state.question1}
                placeholder="What's your favorite song?"
              />
            </div>
          </div>
          <div className="question">
            <div className="labelQuestion">
              <label>Question 1</label>
            </div>
            <div className="inputQuestion">
              <input
                type="text"
                name="question1"
                onChange={this.handleChange}
                value={this.state.question1}
                placeholder="What's your favorite song?"
              />
            </div>
          </div>
          <div className="question">
            <div className="labelQuestion">
              <label>Question 1</label>
            </div>
            <div className="inputQuestion">
              <input
                type="text"
                name="question1"
                onChange={this.handleChange}
                value={this.state.question1}
                placeholder="What's your favorite song?"
              />
            </div>
          </div>
          <div className="question">
            <div className="labelQuestion">
              <label>Question 1</label>
            </div>
            <div className="inputQuestion">
              <input
                type="text"
                name="question1"
                onChange={this.handleChange}
                value={this.state.question1}
                placeholder="What's your favorite song?"
              />
            </div>
          </div>
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default QuizCreation;
