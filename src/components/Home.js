import React from 'react';
import Quiz from '../utils/api'

class Home extends React.Component {
    state = {
        displayName: '',
        quizCode: ''
    }

    handleChange=(event) => {
        let { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit=(event) => {
        event.preventDefault();
        const quizService = new Quiz();
        let addedUser = this.state.displayName;
        quizService.addUsers(this.state.quizCode, addedUser)
        .then (console.log(`user ${addedUser} added`));
    }

    render() {
        return (
            <div>
            <h1 id = "title">Join a Game</h1>
            <form onSubmit={this.handleFormSubmit}>
                    <div class="form-field">
                        <label id = "label">Display Name</label>
                        <input id = "name" type = "text" name="displayName" onChange={this.handleChange} value={this.state.displayName} autoFocus/>
                    </div>
                    <br/>
                    <div class="form-field">
                        <label id = "label">Game Pin</label>
                        <input id = "pin" type="number" name="quizCode" onChange={this.handleChange} value={this.state.quizCode}/>
                    </div>
                    <br/>
                    <div class="form-field">
                        <button id = "joinButton">Join</button>
                    </div>
            </form>
            <br/>
            
            <center>Be and host and create a game! Log in <a href = "/login-spotify" id = "host">here</a></center>

            </div>

        )
    }

}

export default Home;
//