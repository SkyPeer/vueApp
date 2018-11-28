import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './strore'

const app = new Vue({
    el: root,
    store,
    router,
    render: h => h(App)
});

//App.$mount('#root');