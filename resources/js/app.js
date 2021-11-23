require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueRouter,VueAxios,axios);

const app = new Vue(Vue.util.extend(App)).$mount('#app');

