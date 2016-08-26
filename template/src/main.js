import Vue from 'vue/dist/vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		a: 'happy'
	}
})

const Home = Vue.component('home', {
	template: `
		<span>home</span>
	`
})

const Test = Vue.component('test', {
	template: `
		<span>test</span>
	`
})

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{path: '/', component: Home},
		{path: '/test', component: Test}
	]
})

new Vue({
  el: '#app',
  template: `
  	<router-view></router-view>
	`,
	store,
	router
})
