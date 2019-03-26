<template>
  <div class="navHead">
    <p @click="goBack()">返回</p>
  </div>
</template>

<script>
export default {
  methods: {
    goBack: function () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style>
.navHead {
  padding: 10px;
  height: 50px;
}
</style>
