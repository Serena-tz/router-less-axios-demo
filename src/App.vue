<template>
    <!-- 组件内容 -->
    <div class="father">
    <!-- 写3个链接，用来切换路由 -->
        <ul class="nav">
               <!-- 
        3个url地址
        需要对应3个文件
        访问任何一个url，都是会切换显示一个文件

        http://localhost:8080/#/home ---》home.vue
        http://localhost:8080/#/contact ---》contact.vue
        http://localhost:8080/#/about ---about.vue
                -->
           <!-- <li><a href="/home">首页</a></li>
           <li><a href="/contact" >联系我</a></li>
           <li><a href="/about">关于我</a></li> -->
           <!-- <li> -->
            <!-- router-link用来代替a链接的，官方的自定义标签
             配置4：exact  开启精确匹配模式

             -->
           <router-link tag="li" exact :to="{name:'home'}">
              <span class="iconfont icon-compass"></span>
              <!-- 直接写空连接即可 -->
              <a>首页</a>
            </router-link>
            <!-- </li> -->
            <li>
              <!-- 、
                to的配置
              :to="{name:'name值'}"
              :to="{path:'/path路径'}"
              :to="data中的属性名"

              2、高亮样式
              默认不写就是router-link-active
              假设要改：
              两种方式：
              1、局部：
              active-class="cur"
              2、全局
               -->
               <router-link :to="ccc" active-class="cur">
                <span class="iconfont icon-frown"></span>
                联系我
              </router-link>
                
            </li>
            <li>
              <!-- 
              配置5:將默認的点击效果改为鼠标悬浮切换
              event="click|mouseover" 
               -->
               <router-link :to="{path:'/about'}">
                <span class="iconfont icon-left-circle"></span>
               关于我
             </router-link>
           </li>
        </ul>
        <!-- 挖一个用来显示通过路由匹配到 的组件的口子-->
        <!-- 相当于是iframe  

            router-view  官方支持的自定义标签，
            作用：用来显示匹配到的组件

            一个router-view显示一个组件
         -->
        <router-view class="min-h-100"></router-view>
        <!-- 假设要显示再显示一个组件，就需要再写一个roter-view -->
        <!-- 即给该视图命名 -->
        <router-view name="sidebar" class="sidebar"></router-view>


    </div>
</template>

<script>
//常规JS代码
//var dom=

export default{
    // 这里写vue的那些兄弟
    data(){
        return{
           ccc:"/contact"
        }        
    }
}    
</script>
<!-- 使用less来写 -->
<style scoped="">
@red:red;
p{
  color:@red;
}
.father{
  background-color: #f2f2f2;
  min-height:400px;

}

.min-h-100{
  min-height: 200px;
}

.nav {
  display:flex;
  background-color: #A6DEFF;
  margin-bottom: 10px;
}
.nav li{
  height:40px;
  line-height:40px;
  
  margin: 0 10px;
}

.nav li a{
  font-size: 20px;
  text-decoration: none;
  color: #333;
}
/*路由默认的高亮样式 可以在router-link或touer.js中修改

.nav li .router-link-active,*/
.nav .cur,.nav .cur a{
  background-color:green;
  color: #fff;
}
</style>