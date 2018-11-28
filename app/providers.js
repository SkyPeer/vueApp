import axios from 'axios';

let userProvider = {
    async fetch(params) {
       //  params.text='y';
        let response = await axios.post('/api/users/select', {params});
        //console.log(response.data.users)
        return response.data.users;
    },
    /*async total() {
        let response = await axios.get('/api/users/total');
        return response.data;
    },*/
};

export {userProvider}