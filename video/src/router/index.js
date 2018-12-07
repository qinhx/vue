import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home.vue'
import detail from '../pages/detail.vue'
Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    {name:'home',path:'/',component:home,
		children:[
			
		]},
		{name:'detail',path:'/detail',component:detail}
  ]
})
