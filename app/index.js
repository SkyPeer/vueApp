import Vue from 'vue'
import App from './App.vue'
import { store } from './strore'

const app = new Vue({
    el: root,
    store,
    render: h => h(App)
});

//App.$mount('#root');