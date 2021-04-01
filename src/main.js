// 是vue的项目，首先要导入vue.js

// let Vue=require('vue');//nodejs
import Vuee from 'vue';//ES6
// 
// 需要将组件导入进来，填充到#app那个口子上
import App from './App.vue'
//////////////////
// 导入rouer.js文件 //
//////////////////
///import router from './router/index.js' //如果文件夹有index.js可以省略不写
 
import router from './router' //index.js

// CSS文件
require('./assets/css/style.css')
// 图标样式
require('./assets/font/iconfont.css')
 
// 使用它
// console.log(Vuee);//vue的构造函数
// 生成一个vue的实例
new Vuee({
    router,
    el:"#app",
    // 要在#app中显示内容,需要将app.vue显示到index.html中的div#app处
    render:function(ce){
        return ce(App);
    }
});