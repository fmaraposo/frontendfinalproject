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

  handleChange = (event) => {
    let {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const quizService = new Quiz();
    const questions = this.state;
    quizService.addQuestionsAndQuizCode(questions)
    .then((response) => {
      console.log(`These questions were added: ${response}`)
    })
  }

/* handleFormSubmit=(event) => {
    event.preventDefault();
    const quizService = new Quiz();
    let addedUser = this.state.displayName;
    quizService.addUsers(this.state.quizCode, addedUser)
    .then (console.log(`user ${addedUser} added`));
}  */

  render() {
    return (
      <div className="quizzCreation">
        <h1>Hello from Quiz Creation</h1>
        <form onSubmit={this.handleFormSubmit}>
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
              <label>Question 2</label>
            </div>
            <div className="inputQuestion">
              <input
                type="text"
                name="question2"
                onChange={this.handleChange}
                value={this.state.question2}
                placeholder="What's your favorite song?"
              />
            </div>
          </div>
          <div className="question">
            <div className="labelQuestion">
              <label>Question 3</label>
            </div>
            <div className="inputQuestion">
              <input
                type="text"
                name="question3"
                onChange={this.handleChange}
                value={this.state.question3}
                placeholder="What's your favorite song?"
              />
            </div>
          </div>
          <div className="question">
            <div className="labelQuestion">
              <label>Question 4</label>
            </div>
            <div className="inputQuestion">
              <input
                type="text"
                name="question4"
                onChange={this.handleChange}
                value={this.state.question4}
                placeholder="What's your favorite song?"
              />
            </div>
          </div>
          <div className="question">
            <div className="labelQuestion">
              <label>Question 5</label>
            </div>
            <div className="inputQuestion">
              <input
                type="text"
                name="question5"
                onChange={this.handleChange}
                value={this.state.question5}
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
