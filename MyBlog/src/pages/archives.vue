<template>
   <div>
       <el-carousel type="card" :interval="4000" height="200px">
           <el-carousel-item v-for="item in 6" :key="item">
            <h2>Project</h2>
            <p>summary</p>
           </el-carousel-item>
       </el-carousel>
       <div class="MyCSs">
           <h3>Css</h3>
           <el-row :gutter="10">
               <el-col :span="6">
                   <el-card :body-style="{width:'100%',height:'400px',background:'grey',margin:'0'}">
                       <h3>Project Title</h3>
                       <p>Project summary</p>
                   </el-card>
               </el-col>
                <el-col :span="18" class="c18">
                    <div v-for="i in 4" class="smallCar">
                    <el-card :body-style="{height:'160px',background:'grey',padding:'10px',margin:'3px'}">
                        <h4>Title</h4>
                        <p>summary</p>
                    </el-card>
                    </div>
                </el-col>
           </el-row>
       </div>

        <div class="Myjs">
           <h3>javaScript</h3>
           <el-row :gutter="10">
               <el-col :span="6">
                   <el-card :body-style="{width:'100%',height:'400px',background:'grey',margin:'0'}">
                       <h3>Project Title</h3>
                       <p>Project summary</p>
                   </el-card>
               </el-col>
                <el-col :span="18" class="c18">
                    <div v-for="i in 4" class="smallCar">
                    <el-card :body-style="{height:'160px',background:'grey',padding:'10px',margin:'3px'}">
                        <h4>Title</h4>
                        <p>summary</p>
                    </el-card>
                    </div>
                </el-col>
           </el-row>
       </div>


   </div>
</template>
<script>
    
</script>
<style scoped>
    .smallCar{
        width: 40%;
        height: 200px;
        float: left;
        margin: 10px;
        margin-left: 30px;
    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .c18{
      overflow: hidden;
      padding: 0;
  }
</style>