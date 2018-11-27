import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: MainPage},
        {path: '/table', component: TablePage},
    ]
});

export {router}