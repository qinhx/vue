<template>
<div>
    <headcard></headcard>
    <span>Hello,这里是历史记录</span>
</div>
</template>
<script>
import headcard from '@/components/headcard'
export default {
  components: {
    headcard
  },
  methods: {
    goBack: function () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
}
</script>
<style scoped>
.navHead {
  padding: 10px;
  height: 80px;
  margin: 10px;
}
</style>
