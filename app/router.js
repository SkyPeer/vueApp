import VueRouter from "vue-router";
import MainPage from './main';
import TablePage from './table';
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