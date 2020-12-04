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
}
export default Quiz;