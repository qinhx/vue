<template>
  <div> 
	 <video controls autoplay="autoplay">
		 <source :src="playUrl" type="video/mp4"></source>
	 </video>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
import store from '../store/index.js'
  export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapState([
				'playUrl',
				'mainDetail'
			])
		},
		created() {
		}
	}
</script>

<style>

</style>
