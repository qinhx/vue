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
          <div style="padding-left: 30px">
            <router-link :to='{name:"detail"}' 
						tag="a" target="_blank" v-for="item in result"class="MyA" 
						@click.native="SendLink('www.baidu.com')">
						{{item.name}}</router-link>
          </div>
        </el-header>
        <el-main class="cm1" >
					<div v-for=" it in mainDetail" >
						<p>{{it[0]}}</p>
								<div style="position: relative;overflow: hidden;">
										<div v-for="w in it[1]" style="width: 200px; float: left;margin: 15px;">
											<div style="overflow: hidden;">
												<p>w.data.content.data.playUrl</p>
												<router-link :to="{name:'detail'}" tag="a" @click.native="getUrl(w.data.content.data.playUrl)" target="_self">
													<el-card :body-style="{ padding: '0px' }" shadow="hover"	>
														<img :src="w.data.header.icon" style="height: 200px;width: 200px;" />
														<div>
															<p style="height: 30px;">{{w.data.header.title}}</p>
														</div>
													</el-card>
											</router-link>
											</div>
											</div>
								</div>
								<div></div>
					</div>

        </el-main>
        <el-footer class="cf"></el-footer>
      </el-container>
			
	</div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
  import bus from '../assets/bus'
  export default {
	computed:{
		  ...mapState([
		    'result',
        'recommend',
				'mainDetail',
				'playUrl'
      ]),
      ...mapGetters([
        'getRecommend',
        'getterResult'
      ])
    },
    methods:{
		  ...mapActions([
		    'getResult',
				'getUrl'
      ]),
      SendLink(link){
				bus.$emit('A',link);
		    
      }
    },
    created(){
		  this.getResult();
    }
	}
</script>


//

<style>
  .MyA{
    text-decoration: none;
    padding-right: 20px
  }
</style>
