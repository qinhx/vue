<template>
  <div id="app">
    <el-container>
      <el-header class="app-header">
        <el-row type="flex" >
            <el-col :span="3">
              <h4 style="margin-top:33px">Welcome to My Blog</h4>
            </el-col>
            <el-col :offset="10" :span="8">
            <el-menu mode="horizontal" background-color="grey" router="true" text-color="black">
              <el-menu-item index="home">
                <span>home</span>
              </el-menu-item>
              <el-menu-item index="note">
                <span>note</span>
              </el-menu-item>
              <el-menu-item index="categories">
                <span>categories</span>
              </el-menu-item>
              <el-menu-item index="archives">
                <span>archives</span>
              </el-menu-item>
            </el-menu>
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
  name: 'App',
  methods: {
    handleMenu(){

    }
  },
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
  span{
    font-size: 1.5em;
    font-family: 'Courier New', Courier, monospace
  }
</style>
