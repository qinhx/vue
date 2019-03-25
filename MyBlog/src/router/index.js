import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import note from '../pages/note'
import categories from '../pages/categories'
import archives from '../pages/archives'
import detial from '../pages/detial'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {name:"home",path:'/',component:home},
    {name:'note',path:'/note',component:note},
    {name:'categories',path:'/categories',component:categories},
    {name:'archives',path:'.archives',component:archives},
    {name:'detial',path:'/detial',component:detial}
  ]
})
