<template>
    <div class="total">
        <headcard></headcard>
        <div class="blue">
            <p>可用余额</p>
            <div class="itemNode"><span> {{money}} </span> <button @click="goTocharge()">充值</button></div>
            <div><span>月卡剩余天数</span> {{days}} <button @click="geToChargeDays()">购买</button></div>
        </div>
    </div>
</template>
<script>
import headcard from '@/components/headcard'
import store from '../store'
export default {
  components: {
    headcard
  },
  computed: {
    money () {
      if (store.state.userInfo.money) return store.state.userInfo.money
      else return 0
    },
    days () {
      if (store.state.userInfo.days) return store.state.userInfo.days
      else return 0
    }
  },
  methods: {
    goTocharge () {
      console.log('goto charge')
      wx.navigateTo({
        url: '/pages/charge/main'
      })
    },
    geToChargeDays () {
      wx.navigateTo({
        url: '/pages/chargedays/main'
      })
    }
  }
}
</script>
<style scoped>
.itemNode{
  widows: 60%;
  height: 70px;
  text-align: center;
  margin: auto;
}
button{
  display: block;
  width:100px;
  height: 30px;
  float: right;
}
.total{
    background-color: ghostwhite;
    height: 100vh;
    width: 100vw;
}
.blue{
    background: linear-gradient(45deg,blue,green);
    width: 80vw;
    height: 40vh;
    margin: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-aroud;
    align-content: space-around;
    align-items: center;
}
</style>
