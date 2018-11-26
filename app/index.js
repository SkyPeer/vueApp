import Vue from 'vue'
import { store } from './store'
import { router } from './router'
import App from './App.vue'

const app = new Vue({
    store,
    router,
    render: h => h(App)
});

app.$mount('#root');
