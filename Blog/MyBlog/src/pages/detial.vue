<template>
    <div class="detial">
        <el-container>
            <el-main>
                <div v-html="article"></div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import store from '../state/index'
    export default{
        data() {
            return {
                article: ""
            }
        },
        created() {
            let _this = this
            var da = store.state.detail.find((value,index)=>{
                return value._id == _this.$route.params.id
            })
            this.article = da.article[0]
            console.log(this.article)
        },
    }
</script>
<style>
    .author-info-block{
        display:none;
    }
</style>
