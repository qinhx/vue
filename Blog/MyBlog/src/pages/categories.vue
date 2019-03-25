<template>
    <div>
        <el-row>
            <el-col :span="3" class="fixedCol">
                <el-menu  :default-active="cate[0]" background-color="#545c64"  active-text-color="#ffd04b"  @select="handleSelect"
                 text-color="#fff" >
                    <el-menu-item :index="cate[index]" v-for="(it,index) in icon" :key="index">
                        <template slot="title">
                            <div>
                                <p><i :class="it"></i>{{cate[index]}}</p>
                            </div>
                        </template>
                    </el-menu-item>
                </el-menu>
        </el-col>
        <el-col :span="18" :offset="4">
            <div v-for="(it,key) in cateitem" :key="key">
                <p>{{it.title[0]}}<small><router-link :to="{name:'detial',params:{id:it._id}}" tag='a'>详细</router-link></small></p>
                <hr>
            </div>
        </el-col>
        </el-row>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import store from '../state/index'
    export default{
        data() {
            return {
                cate:[],
                icon:['el-icon-mobile-phone','el-icon-location','el-icon-menu','el-icon-tickets','el-icon-document','el-icon-service','el-icon-rank'],
                cateitem:[]
            }
        },
        methods:{
            ...mapActions([
                'getDetail',
                'getCategory'
            ]),
             handleSelect(key,keyindex){
                let _this = this;
                function getItem(resolve,reject) {
                    _this.getCategory(key);
                     setTimeout(()=>{
                         resolve();
                     },100)
                }
                var p1 = new Promise(getItem);
                p1.then(()=>{
                    _this.cateitem = store.state.cateItem
                }).catch(()=>{
                    console.log("promise has err")
                })
            }
        },
        created() {

                let _this = this;
                function getItem(resolve,reject) {
                    _this.getCategory("frontend");
                     setTimeout(()=>{
                         resolve();
                     },100)
                }
                var p1 = new Promise(getItem);
                p1.then(()=>{
                    _this.cateitem = store.state.cateItem
                }).catch(()=>{
                    console.log("promise has err")
                })
            this.cate = store.state.category
        },
    }
</script>
<style scoped>
    .fixedCol{
        position: fixed;
        top: 100px;
        left: 0px;
    }
</style>
