import React from 'react';
import Quiz from '../utils/api';

class QuizCreation extends React.Component {
  state = {
    questions: {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
    },
    code: 0,
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState((prevState) => ({
      questions: {
        // object that we want to update
        ...prevState.questions, // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const quizService = new Quiz();
    const questions = this.state.questions;
    const myQuestions = Object.values(questions);
    quizService.addQuestionsAndQuizCode(myQuestions).then((myQuestions) => {
      console.log(questions);
      this.setState({
        code: myQuestions.data.quizCode,
      });
      console.log(this.state.code);
      this.props.history.push(`/quiz-code/${this.state.code}`);
    });
  };

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
                value={this.state.questions.question1}
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
                value={this.state.questions.question2}
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
                value={this.state.questions.question3}
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
                value={this.state.questions.question4}
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
                value={this.state.questions.question5}
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
