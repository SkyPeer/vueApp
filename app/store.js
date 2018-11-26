import Vuex from 'vuex';
import Vue from 'vue';
import {userProvider} from './providers/users';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        users: [],
        currentPage: 1,
        total: 0,
        progress:false
    },
    mutations: {
        changeUsers(state, users) {
            state.users = users;
        },
        changeTotal(state, total) {
            state.total = total;
        },
        changeCurrentPage(state, currentPage) {
            state.currentPage = currentPage;
        },
        changeProgress(state, progress){
            state.progress=progress;
        }
    },
    actions: {
        async getUsers({commit, state}, params) {
            commit('changeProgress', true);
            let users = await userProvider.fetch(params);
            commit('changeUsers', users);
            commit('changeProgress', false);
        },

        async searchUsers({commit, state}, params){
            commit('changeProgress', true);
            let users = await userProvider.search(params);
            commit('changeUsers', users);
            commit('changeProgress', false);
        },

        async totalUsers({commit, state}){
            let total = await userProvider.total();
            commit('changeTotal', total);
        },

    }

});
export {store};