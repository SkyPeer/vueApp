import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
    let store = new Vuex.Store({
       state:{
           myCounter: 777,
       },
        mutations: {
            increment(state) {
                // изменяем состояние
                state.myCounter++;
            }
        }
    });

export default store

