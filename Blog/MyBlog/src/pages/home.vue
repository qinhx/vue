<template>
    <div class="homeApp">
        <el-card  v-for="(i,key) in detail" shadow="hover" :body-style="{width:'250px',float:'left',padding:'0',height:'300px'}" :key="key">
            
            <h5 style="text-align:center">{{i.title[0]}}</h5>
            <p style="text-align:center"><small>{{i.readtimes[0]}}</small></p>
                <h4 style="text-align:center">类别： <i>{{i.categopry}}</i></h4>
                <br>
               <small>{{i.times[0]}}</small> <router-link :to="{name:'detial',params:{id:i._id}}" tag='a'>详细</router-link>
        </el-card>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapActions} from 'vuex'
    export default{
        computed: {
            ...mapState([
                'detail'
            ])
        },
        methods: {
            ...mapActions([
                'getDetail'
            ])
        },
        created() {
            this.getDetail();
        },
    }
</script>
<style scoped>
    .el-card{
     width: 250px;
     float: left;   
     margin: 20px
    }
    .homeApp{
        margin: 0 auto;
        width: 80%;
        overflow: hidden;
    }
    h5{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>