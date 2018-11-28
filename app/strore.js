import Vuex from 'vuex';
import Vue from 'vue';
import {userProvider} from "./providers";

Vue.use(Vuex);
    let store = new Vuex.Store({

            state: {
                notes: [],
                users: [],
                total: 0,
            },
            actions: {
                async getUsers({commit, state}, params) {
                    let users = await userProvider.fetch(params);
                    commit('CHANGE_USERS', users);
                },
                async getTotal({commit, state}){
                    let total = await userProvider.total();
                    console.log('total raws:', total.total);
                    commit('CHANGE_TOTAL', total);
                }


            },
            mutations: {
                ADD_NOTE(state, note) {
                    state.notes.push(note)
                },
                CHANGE_USERS(state, users) {
                    state.users = users;
                },
                CHANGE_TOTAL(state, total){
                    state.total = total.total;
                }
            },
            getters: {
                notes(state) {
                    return state.notes
                },
                stateCounter(state){
                    return state.stateCounter
                },
                getTotal(state){
                    return state.total
                }


            },

            modules: {}


    });

export {store}

