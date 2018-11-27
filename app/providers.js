import axios from 'axios';

let userProvider = {
    async fetch(params) {
        let response = await axios.post('/api/users/select', {params}); /*let response = await axios.get*/
        return response.data;
    },
    async search(params) {
        let response = await axios.post('http://localhost:3000/api/users/search', {params});
        return response.data;
    },
    async total() {
        let response = await axios.post('http://localhost:3000/api/users/total');
        return response.data;
    },

};

export {userProvider}