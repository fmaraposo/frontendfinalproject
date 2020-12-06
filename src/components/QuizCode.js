import React from 'react';
import Quiz from '../utils/api';

class QuizCode extends React.Component {
    state = {
        quizCode: ""
    }

   /*  componentDidMount() {
        const quizService = new Quiz();

    } */

    render () {
        return (
            <div>
                <h1>Hello from QuizCode Page</h1>
            </div>
        )
    }
}

export default QuizCode;