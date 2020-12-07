import React from 'react';
import Quiz from '../utils/api.js'

class Game extends React.Component {
    state = {
        questions: [],
        songs: [],
    }

   componentDidMount() {
        const quizService = new Quiz();
        const quizCode = this.props.match.params.quizCode
        quizService.getQuizQuestions(quizCode)
            .then((response) => {
                const gameQuestions = response.data[0];
                this.setState({
                    questions: gameQuestions.questions
                })
            })

    } 

    render () {
        return(
            <div>
                <h1>Game</h1>
                <div className="gameQuestions">
                    <ul>
                        {this.state.questions.map((question, index) => {
                            return <li key={index}>{question}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Game;