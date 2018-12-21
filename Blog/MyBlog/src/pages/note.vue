<template>
<div>
    <div v-for="i in 10">
        <el-row>
            <el-col :span="18" :offset="3">
                <el-card shadow="hover" :body-style="{width:'300px',margin:'0 auto'}">
                    <div slot="header" ><h2 style="text-align:center;">note Title</h2></div>
                    <span>13年夏天,跟X总在武汉找工作，俩人窝在老S不足20平米的出租房里打地铺。房子在华科对面的汽发社区，现在的德国风情街当时还是横亘在老旧社区跟蓄势待发的光谷之间一片巨大的渣土地，光谷的大拆大建也正是从那个时候开始刚刚起步。在我们这种外地人看来，大武汉应该是从那时起才正式拉开了「每天都不一样」的序幕吧。</span>
                </el-card>

            </el-col>
        </el-row>
    </div>
</div>
</template>
<script>
    
</script>
<style scoped>
</style>
