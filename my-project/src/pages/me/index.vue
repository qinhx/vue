<template>
    <div class="total">
        <head>
        <div class="head">
            <headcard></headcard>
            <div class="info">
                <div class="picNick"> 
                <image class="picture" :src="picUrl"/> <span > {{nickName}} </span> </div>
                <div class="wco">  
                    <div class="mywallet" @click="walletClick()"> <image class="mini" src="/static/images/wlt.png"/> 我的钱包</div>
                    <div class ="mycar" @click="carClick()"> <image class="mini" src="/static/images/car.png"/> 我的车辆</div>
                    <div class="myorder" @click="orderClick()"> <image class="mini" src="/static/images/bill.png"/> 我的订单</div>
                </div>
            </div>
        </div>
        </head>
        <div class="main">
            <div class="item"> <image class="meinfo" src="/static/tabs/me-active.png"/> <span>停车记录</span> </div>
            <div class="item"> <image class="meinfo" src="/static/tabs/me-active.png"/> <span>常见问题</span> </div>
            <div class="item"> <image class="meinfo" src="/static/tabs/me-active.png"/> <span>意见反馈</span> </div>
            <div class="item"> <image class="meinfo" src="/static/tabs/me-active.png"/> <span>绑定手机</span> </div>
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
    canIUse: function () {
      return wx.canIUse('button.open-type.getUserInfo')
    },
    picUrl: function () {
      return store.state.avatarUrl
    },
    nickName: function () {
      return store.state.nickName
    }
  },
  methods: {
    bindGetUserInfo: function (e) {
      console.log(e.detail.userInfo)
    },
    getablity: function () {
      wx.getSetting({
        success (res) {
          if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success (res) {
                store.state.avatarUrl = res.userInfo.avatarUrl
                store.state.nickName = res.userInfo.nickName
              }
            })
          }
        }
      })
    },
    walletClick: function () {
      wx.navigateTo({
        url: '/pages/wallet/main'
      })
    },
    carClick: function () {
      wx.navigateTo({
        url: '/pages/mycar/main'
      })
    },
    orderClick: function () {
      wx.navigateTo({
        url: '/pages/myorder/main'
      })
    }
  },
  created () {
    this.getablity()
  }
}
</script>
<style scoped>
.picNick{
    position: relative;
    top: -20px;
    left: 20px;
}
.mini{
    width: 40px;
    height: 40px;
    display: block;
    margin: 2px auto;
}
span{
    position: relative;
    top: -20px;
}
.total{
    background-color: ghostwhite;
    height: 100vh;
}
.info{
    width: 90vw;
    height: 150px;
    position: relative;
    top: 50px;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 2px blue;
}
.wco{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-content: space-around;
    position: relative;
}
.mycar,.mywallet,.myorder{
    flex: 0 0 auto;
    width: 25%;
    height: 60px;
}
.head{
    width: 100vw;
    background-color: blue;
}
.main{
    width: 100vw;
    padding-top: 45px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: flex-start;
    background-color: ghostwhite;
}
.item{
    flex: 0 0 auto;
    width: 80vw;
    height: 70px;
    border-radius: 15px;
    background-color: white;
    margin: 15px auto;
    border: 1px solid;
}
.picture{
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.meinfo{
    width: 40px;
    height: 40px;
    border-radius: 5px 2px;
    border-radius: 10px; 
    margin: 10px;
}
</style>
