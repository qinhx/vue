import Vue from 'vue'
import Vuex from 'vuex'
import promisify from '../utils/promisify'
const getLogin = promisify(wx.login)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    code: '',
    userInfo: {},
    avatarUrl: '',
    nickName: ''
  },
  mutations: {
    getCode (state) {
      getLogin().then(res => {
        state.code = res.code
        wx.request({
          url: 'http://localhost:3000/record',
          method: 'POST',
          data: {
            code: state.code
          },
          success (respones) {
            state.userInfo = respones.data
          }
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
})
export default store
