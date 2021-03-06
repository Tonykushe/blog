// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from  'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);


Vue.config.productionTip = false

const router = new VueRouter({
	routes: Routes,
	mode: 'history'

});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
