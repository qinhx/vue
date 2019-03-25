<template>
  <div class="ht">
    <headcard></headcard>
      <div class="head">欢迎来到Parking</div>
      
      <div>
        <div class="infoHead">
          <span class="chrgeCar">计费车辆 :<image src="/static/tabs/home.png"/></span>
          <span class="history" @click="goHistory()" >历史记录</span>
        </div>
      </div>
      <div class=" flexItem">
          <div class="item ">
            <div class="findCar"></div>
            <p>找车位</p>
            <p class="p2">停车无忧</p>
          </div>
          <div class="item ">
            <div class="toBeVip"></div>
            <p>月卡</p>
            <p class="p2">停车更方便</p>
          </div>
          <div class="item ">
            <div class="money"></div>
            <p>去充值</p>
            <p class="p2">钱包鼓起来</p>
          </div>
          <div class="item ">
             <div class="Charging"></div>
            <p>充电桩</p>
            <p class="p2">轻松充电</p>
          </div>
      </div>
    <div class="matrix">

      </div>
        <image class="meinfo" src="/static/tabs/me-active.png" @click="goMe()"/>
  </div>
</template>

<script>
import headcard from '@/components/headcard'
import store from '../store'
export default {
  components: {
    headcard
  },
  methods: {
    // getUserInfo () {
    //   store.commit('getUserInfo')
    // },
    getCode () {
      store.commit('getCode')
    },
    goHistory: function () {
      wx.navigateTo({
        url: '/pages/logs/main'
      })
    },
    goMe: function () {
      wx.navigateTo({
        url: '/pages/me/main'
      })
    }
  },

  created () {
    this.getCode()
  }
}
</script>

<style scoped>
span{
  margin: 10px;
}
.meinfo{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  top: -40px;
  left: 300px;
  border: 1px solid gainsboro;
}
.matrix{
  width: 90vw;
  height: 80px;
  background-color: white;
  margin: 10px auto;
}
.Charging,.money,.toBeVip,.findCar{
  width: 30%;
  height: 70%;
  background-image: url("/static/tabs/home.png");
  float: left;
}
.p2{
  
  font-size: 0.7em;
}
  .head{
    height: 80px;
    width:90%;
    background-color: black;
    line-height: 80px;
    text-align: center;
    margin: 10px auto;
    border-radius: 20px;
    color:white;
  }
  .infoHead{
    width: 90%;
    overflow: hidden;
    height: 200px;
    background-color: white;
    margin: 10px auto;
    border-radius: 10px;
  }
  .chrgeCar{
    float: left;
  }
  .history{
    float: right;
  }
  .flexItem{
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    margin: 10px auto;
  }
  .item{
    flex: 0 1 auto;
    width: 40%;
    height: 50px;
    margin: 10px;
    background-color: white;
    border-radius: 10px;
  }
  image{
    width: 20px;
    height: 20px;
  }
  .ht{
    width: 100%;
    height: 100%;
    background-color: ghostwhite;
  }
</style>
