import Vue from 'vue'
import  Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
      result:[],
      recommend:[],
			mainDetail:[],
			playUrl:""
  },
  getters:{
    getRecommend:state =>{
      return state.recommend
    },
    getterResult:state => {
      return state.result
    }
  },
  mutations,
  actions
})
