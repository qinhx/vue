<template>
    <div>
        <el-row>
            <el-col :span="3">
                <el-menu v-for="(it,index) in icon" :key="index" :default-active="cate[1]" background-color="#545c64"  active-text-color="#ffd04b"
                 text-color="#fff" @select="handleSelect">
                    <el-menu-item :index="cate[index]">
                        <template slot="title">
                            <div>
                                <p><i :class="it"></i>{{cate[index]}}</p>
                            </div>
                        </template>
                    </el-menu-item>
                </el-menu>
        </el-col>
        <el-col :span="18">
            <p>{{cateItem}}</p>
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
                this.getCategory(key)
                this.cateitem = store.state.cateItem//需要异步处理 promise 的用法
            }
        },
        created() {
            this.cate = store.state.category
        },
    }
</script>
<style scoped>
</style>
