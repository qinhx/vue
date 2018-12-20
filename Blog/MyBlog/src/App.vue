<template>
  <div id="app">
    <el-container>
      <el-header class="app-header">
        <el-row type="flex" >
            <el-col :span="3">
              <h4 style="margin-top:33px">Welcome to My Blog</h4>
            </el-col>
            <el-col :span="2" :offset="4">
               <router-link :to="{name:'home'}" tag="a" >home </router-link>
            </el-col>
            <el-col :span="3">
              <router-link :to="{name:'note'}" tag="a" >note </router-link>
            </el-col>
            <el-col :span="3">
              <router-link :to="{name:'categories'}" tag="a" >categories </router-link>
            </el-col>
            <el-col :span="3">
              <router-link :to="{name:'archives'}" tag="a" >archives </router-link>
            </el-col>
            <el-col :span="3">
              <a href="https://github.com/qinhx/">github</a>
            </el-col>
        </el-row>
      </el-header>
      <el-main>
          <router-view/>
      </el-main>
      <el-footer>
          <div>
            <p>copyright&copy if you think it will be useful for you,you can find the resource code in my<a href="https://github.com/qinhx/">github</a></p>
          </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .app-header{
    background-color: gray;
    overflow: hidden;
  }
  a{
    text-decoration: none;
    line-height: 80px;
    margin-left: 40px;
  }
</style>
