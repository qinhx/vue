<template>
    <div class="homeApp">
        <div v-for="i in 10">
        <el-card class="card_for_home" shadow="hover"  >
            <div slot="header">
                <h5>标题</h5>
            </div>
                <p>内容简介</p>
                <router-link :to="{name:'detial'}" tag='a'>详细</router-link>
        </el-card>
        </div>
    </div>
</template>

<script>
</script>
<style>
    .card_for_home{
     width: 250px;
     float: left;   
     margin: 20px
    }
    .homeApp{
        margin: 0 auto;
        width: 80%;
        overflow: hidden;
        border: solid;
    }
</style>