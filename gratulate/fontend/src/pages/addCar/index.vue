<template>
    <div>
        <div>
            <span>请输入车牌号：</span> <input type="text" v-model="LP">
       </div>
       <button @click="add()">添加</button>
    </div>
</template>
<script>
import store from '../store'
export default {
  data () {
    return {
      LP: '',
      id: ''
    }
  },
  methods: {
    add: function () {
      if (this.LP !== 0) {
        if (store.state.userInfo.id) this.id = store.state.userInfo.id
        var LP = store.state.userInfo.LP ? store.state.userInfo.LP.concat(this.LP):[].concat(this.LP)
        wx.request({
          url: 'http://localhost:3000/record',
          method: 'PUT',
          data: {
            id: this.id,
            LP: LP
          },
          success (response) {
            store.state.userInfo = response.data
          }
        })
        wx.navigateBack({
          delta: 1
        })
      }
    }
  }
}
</script>
<style scoped>

</style>
