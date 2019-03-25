<template>
    <div>
        <headcard></headcard>
        <span>余额充值：</span><input type="number" v-model="number" id="number"> <button @click="charge()">提交</button>
    </div>
</template>
<script>
import headcard from '@/components/headcard'
import store from '../store'
export default {
  components: {
    headcard
  },
  data () {
    return {
      number: 0,
      days: 0,
      id: ''
    }
  },
  methods: {
    charge () {
      if (this.number !== 0) {
        if (store.state.userInfo.id) this.id = store.state.userInfo.id
        var smoney = store.state.userInfo.money ? Number(store.state.userInfo.money) : 0
        var money = parseInt(smoney + Number(this.number), 10)

        wx.request({
          url: 'http://localhost:3000/record',
          method: 'PUT',
          data: {
            id: this.id,
            money: money
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
