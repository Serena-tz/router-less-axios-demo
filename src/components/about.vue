<template>
    <!-- 组件内容 -->
    <div class="child">
        <h4>这是关于我的页面</h4>
        <!-- 在这里要新建3级页面，需要新建3个导航，用来切换子路由 -->
        <ul class="subNav">
            <li>
                <!-- http://localhost:8080/about/life -->
                <router-link exact :to="{name:'about'}">生活</router-link>
            </li>
             <li>
                <router-link to="/about/work">工作</router-link>
            </li>
             <li>
                <router-link to="/about/study">学习</router-link>
            </li>
        </ul>

        <!-- 匹配到的路由显示到router-view -->
        <router-view></router-view>
    </div>

</template>

<script>

export default{
   
}    
</script>

<style scoped>
    .child{
        border: 1px solid green;
        padding: 10px;
        background-color: green;
        color: #fff
    }
    /*美化二级导航*/
    .subNav{
        display: flex;
        background-color: #fff;
        margin-top: 10px;
    }

    .subNav li{
        height:40px;
        line-height:40px;
        
        margin: 0 10px;
    }
    .subNav li a{
      font-size: 20px;
      text-decoration: none;
      color: blue;
    }

    .subNav .cur,.nav .cur a{
      color: red;
    }

</style>