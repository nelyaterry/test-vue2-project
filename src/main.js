import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'

import App from './App.vue';
import store from './store/index';
import './assets/scss/index.scss';


import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuelidate)
Vue.use(Notifications)
Vue.use(VueRouter);



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
