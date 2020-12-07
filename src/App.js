import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import QuizCreation from './components/QuizCreation';
import QuizCode from './components/QuizCode';
import AuthService from './utils/auth'

class App extends React.Component {
  state = {
    loggedInUser: null
  }

  setCurrentUser = (user) => {
    this.setState({
      loggedInUser: user  
    })
  }

  componentDidMount() {
    if(this.state.loggedInUser === null) {
      const authService = new AuthService();
      authService.loggedin()
      .then(response => {
        if(response.data._id) {
          this.setCurrentUser(response.data)
        }
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quiz-creation" render={() => { if(this.state.loggedInUser) { return <QuizCreation loggedInUser={this.state.loggedInUser} />} }} />
          <Route path="/quiz-code/:quizCode" component= {QuizCode} />
          <Route
            path="/login-spotify"
            render={() => {
              window.location.href = `${process.env.REACT_APP_PARTYPLAYLIST_API}/api/auth/spotify`;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
