//Node Modules import global styles
import BootstrapVue from 'bootstrap-vue';
import Bootstrap from 'bootstrap';
import jQuery from 'jquery';

import 'bootstrap-vue/dist/bootstrap-vue.css'
//import './assets/css/bootstrap.css';//Local css
import './assets/css/custom.css'  //Local css
import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.use(BootstrapVue);

Vue.prototype.$http = axios;
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  Bootstrap,
  jQuery,
  axios,
  render: h => h(App),
}).$mount('#app')
