<template>
    <div>
        <headcard></headcard>
        <span>月卡充值：</span><input type="number" v-model="number" id="number"> <button @click="charge()">提交</button>
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
      number: '',
      id: ''
    }
  },
  methods: {
    charge () {
      if (this.number !== 0) {
        if (store.state.userInfo.id) this.id = store.state.userInfo.id
        var smoney = store.state.userInfo.days ? Number(store.state.userInfo.days) : 0
        var money = smoney + this.number * 30
        console.log(money)
        wx.request({
          url: 'http://localhost:3000/record',
          method: 'PUT',
          data: {
            id: this.id,
            days: money
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
