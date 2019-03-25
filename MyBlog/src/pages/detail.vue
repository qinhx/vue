<template>
    <div>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="8" offset="10">
                        <h3>Title</h3>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-row>
                    <el-col :span="18" offset="3">
                        <p>浏览器把HTML源代码解析，并且创建一个DOM树（DOM tree）-每个HTML标签在这个树上都有一个对应的节点，
                            标签中的文本也有一个相应的文本节点。DOM树上的根节点是documentElement（也就是）
                            浏览器解析CSS代码，通过一堆hack使得它变得有意义，
                            诸如-moz，-webkit和其它不能理解的拓展名，浏览器会大胆的把他们忽略。
                            CSS级联的优先级从低到高是：浏览器默认的基本规则，用户引用的样式表，优先级最高的的是外部引入的并且最终被加入到HTML标签的style属性中的行内样式。
                            接下来就是有趣的部分-创建一个渲染树（render tree）。渲染树类似DOM树，
                            但是并不是一一对应的。渲染树基于样式，所以如果你使用display:none属性来隐藏一个div，
                            那么它不会被呈现在渲染树中。其它像head标签和所有在其中不可见的元素也一样。另一方面，DOM元素可能在渲染树中存在多个节点，比如说每行在
                            中的文本都需要一个渲染节点。渲染树上的节点被称为一个frame或者一个box（跟CSS box类似，相关内容可查阅the box model）。每一个节点都有CSS box的属性-宽度、高度、边框、外边距等等。
                            一旦渲染树被创建成功，浏览器就可以在屏幕上绘制渲染树节点。
                        </p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="18" offset="3">
                        <div v-for="i in 4"> 
                            <el-card class="card_for_home">
                                <div slot="header">
                                    <h3>Titile</h3>
                                </div>
                                <p>
                                    一些简内容
                                </p>
                            </el-card>
                        </div>
                </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    
</script>
<style scoped>
    .card_for_home{
     width: 250px;
     float: left;   
     margin: 20px
    }
</style>
