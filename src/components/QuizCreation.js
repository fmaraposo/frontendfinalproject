import React from 'react';
import Quiz from '../utils/api';
import { Redirect, withRouter } from 'react-router-dom';

class QuizCreation extends React.Component {
  state = {
    title: '',
    description: '',
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

  handleChangeTitleDescription = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const quizService = new Quiz();
    const questions = this.state.questions;
    const myQuestions = Object.values(questions);
    const playlistTitle = this.state.title;
    const playlistDescription = this.state.description;
    quizService
      .addQuestionsAndQuizCode(
        localStorage.getItem('loggedInUser'),
        myQuestions,
        playlistTitle,
        playlistDescription
      )
      .then((myQuestions) => {
        console.log(questions);
        this.setState({
          code: myQuestions.data.quizCode,
        });
        console.log(this.state.code);
        this.props.history.push(`/quiz-code/${this.state.code}`);
      });
  };

  render() {
    return localStorage.getItem('loggedInUser') ? (
      <div className="quizzCreation">
        <h1>Hello from Quiz Creation</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="question">
            <div className="labelQuestion">
              <label>Playlist Title</label>
            </div>
            <div className="inputQuestion">
              <input
                type="text"
                name="title"
                onChange={this.handleChangeTitleDescription}
                value={this.state.title}
                placeholder="Give a name to your playlist"
                required
              />
            </div>
          </div>
          <div className="question">
            <div className="labelQuestion">
              <label>Description</label>
            </div>
            <div className="inputQuestion">
              <input
                type="textarea"
                name="description"
                onChange={this.handleChangeTitleDescription}
                value={this.state.description}
                placeholder="Give a description to your playlist"
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
                value={this.state.questions.question1}
                placeholder="What's your favorite song?"
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
          </div>
          <button>Submit!</button>
        </form>
      </div>
    ) : (
      <Redirect path="/" />
    );
  }
}

export default withRouter(QuizCreation);
