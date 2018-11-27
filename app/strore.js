import Vuex from 'vuex';
import Vue from 'vue';
import {userProvider} from "./providers";

Vue.use(Vuex);
    let store = new Vuex.Store({
       /*state:{
           myCounter: 777,
       },
        mutations: {
            increment(state) {
                // изменяем состояние
                state.myCounter++;
            }
        },
        actions: {
           setMyCounter({commit, state}){
               commit('increment', true)
           },
            testAction(){
               console.log('testActioninStore', arguments)
            }
        }*/
            state: {
                notes: [],
                users: [],
                total: '',
                stateCounter: 777,
            },
            actions: {
                addNote({commit}, note) {
                    console.log('actions.note = ', note);
                    commit('ADD_NOTE', note)
                },
                increaseCounter({commit}){
                  commit('INCREASE_COUNTER')
                },
                async getUsers({commit, state}, params) {
                    let users = await userProvider.fetch(params);
                    commit('CHANGE_USERS', users);
                },


            },
            mutations: {
                ADD_NOTE(state, note) {
                    state.notes.push(note)
                },
                INCREASE_COUNTER(state){
                  state.stateCounter ++
                },
                CHANGE_USERS(state, users) {
                    state.users = users;
                },
            },
            getters: {
                notes(state) {
                    return state.notes
                },

                stateCounter(state){
                    return state.stateCounter
                }
            },

            modules: {}


    });

export {store}

