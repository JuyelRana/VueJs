// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// For making http request
import VueResource from 'vue-resource'
//For creating routes
import VueRouter from 'vue-router'
//Import specific routes
import Routes from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes,
  mode:'history'
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h =>h(App),
  router:router
})
