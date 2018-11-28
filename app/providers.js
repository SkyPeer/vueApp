import axios from 'axios';

let userProvider = {
    async fetch(params) {
       //  params.text='y';
        let response = await axios.post('/api/users/select', {params});
        return response.data;
    },
    async total() {
        let response = await axios.get('/api/users/total');
        return response.data;
    },
};

export {userProvider}