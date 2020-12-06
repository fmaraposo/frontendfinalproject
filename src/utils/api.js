import axios from 'axios';

class Quiz {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_PARTYPLAYLIST_API}/api`
        });
        this.service = service;
    }
    
    addUsers(code, users) {
        return this.service.put(`/quiz/${code}/users`, {users})
    }

    addQuestionsAndQuizCode(questions) {
        return this.service.post('/quiz', {questions})
    }
}
export default Quiz;