<template>
    <div>
      <headcard></headcard>
        <div v-if="TheCarLP">
          <p> {{TheCarLP}} </p> <button @click="deleteLP()">删除</button>
        </div>
      <button @click="geToAddCar()">添加车辆</button>
    </div>
</template>
<script>
import headcard from '@/components/headcard'
import store from '../store'
export default {
  data () {
    return {
      id: ''
    }
  },
  components: {
    headcard
  },
  computed: {
    TheCarLP: function () {
      return store.state.userInfo.LP
    }
  },
  methods: {
    geToAddCar: function () {
      console.log('goto addCar')
      wx.navigateTo({
        url: '/pages/addCar/main'
      })
    },
    deleteLP: function () {
      store.state.userInfo.LP = null
      if (store.state.userInfo.id) this.id = store.state.userInfo.id
      wx.request({
        url: 'http://localhost:3000/record',
        method: 'PUT',
        data: {
          id: this.id,
          LP: ''
        },
        success (response) {
          store.state.userInfo = response.data
        }
      })
    }
  }
}
</script>
<style scoped>

</style>
