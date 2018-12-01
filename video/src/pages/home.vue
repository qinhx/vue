<template>
	<div>
		  <el-container class="c1">
        <el-header class="ch1" style=" height: 300px;">
					<el-carousel :interval="4000" type="card" height="200px">
						<div v-for="item in recommend">
									<el-carousel-item>
										<img :src="item.cover.detail" />
									</el-carousel-item>
						 </div>
						</el-carousel>
          <div style="padding-left: 50px">
            <a href="#" v-for="item in result" style="text-decoration: none;padding-right: 20px">{{item.name}}</a>
          </div>
        </el-header>
        <el-main class="cm1" >
					<div v-for=" it in mainDetail" style="overflow: hidden;">
						<p>{{it[0]}}</p>
								<div style="position: relative;overflow: hidden;">
										<div v-for="w in it[1]" style="width: 200px; float: left;margin: 15px;">
											<el-card :body-style="{ padding: '0px' }" shadow="hover"	>
												<img :src="w.data.header.icon" style="height: 200px;width: 200px;" />
												<div>
													<p style="height: 30px;">{{w.data.header.title}}</p>
												</div>
											</el-card>
											</div>
								</div>
					</div>
					
        </el-main>
        <el-footer class="cf"></el-footer>
      </el-container>
	</div>
</template>

<script>
	function getItOfDat(data){
		let item = data.data;
		console.log(item)
	}
  import {mapState,mapGetters,mapActions} from 'vuex'
	import store from '../store/index.js'
	export default {
	computed:{
		  ...mapState([
		    'result',
        'recommend',
				'mainDetail'
      ]),
      ...mapGetters([
        'getRecommend',
        'getterResult'
      ])
    },
    methods:{
		  ...mapActions([
		    'getResult'
      ])
    },
    created(){
		  this.getResult();
    }
	}
</script>

<style>
 
</style>
