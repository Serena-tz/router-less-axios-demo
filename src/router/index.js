import Vuee from 'vue';//ES6
//
//导入3个路由组件
import Home from '../components/home.vue'
import Contact from '../components/contact.vue'
import about from '../components/about.vue'
// 404组件
import notfound from '../components/notfound.vue'
// 
//about下的组件导入进来
import study from '../components/about/study.vue'
// 导入侧边栏
import sidebar from '../components/sidebar.vue'
//  

// 在这里导入router组件（插件）
// let vueRouter=require('vue-router');
import vueRouter from 'vue-router';
// 路由是一个插件，需要启用才会生效
Vuee.use(vueRouter);

//激活后就可以使用了
//写配置，如何实现url和组件的对应关系
let router=new vueRouter({
    // 默认是hash模式，特点是在url中会有#，可以将其改为正常的url地址
    mode:"history",
    // 全局修改默认的高亮样式
    linkActiveClass:"cur",
    // 配置路由，需要配置很多个url地址，所以用数组
    routes:[
        //一个对象包含一个url地址和一个组件
        {
            // path表示url的访问路径
            // component表示url对应的那个组件
            // http://localhost:8080/
            path:'/',
            // 命名路由：
            // 用法：1、可以代替path
            //       2、在重定向时，直接使用name更方便
            name:'home',
            // component:Home,//原来是一个url显示到一个router-veiw中，现在想一个url对应显示两个组件
            components:{
                default:Home,
                sidebar:sidebar
            },
            alias:'/index' //不会有高亮了
        },
        // {
        //     // path表示url的访问路径
        //     // component表示url对应的那个组件
        //     path:'/home',
        //     name:'home',
        //     component:Home
        // },
        {
            path:'/contact',
            name:'contact',
            component:Contact
        },
        {
            path:'/about',
            name:'about',
            component:about,
            // 在这里配置子路由
            // 使用children写配置对象，跟上面的写法一样
            children:[{
                // 假设希望设置一个默认子路由，直接吧path留空
                // 回到router-link处，修正地址
                path:'',
                name:'about',
                // 使用这种函数直接导入组件和使用该组件
                // 好处：不像上面那样要先导入再使用
                component:() => import('../components/about/life.vue')

            },
            {
                // 自动拼接为：http://localhost:8080/about/work
                path:'/about/work',
                name:'work',
                component:() => import(/* webpackChunkName: "about" */ '../components/about/work.vue')

            },
            {
                path:'/about/study',
                name:'study',
                component:study

            }
            ]
        },

        // 重定向和404页面
        // 假设用户点击、输入了一个尚不存在的url，需要给用户正确的反馈：
        // 1.直接出现404页面
        // 2.跳转到一个正常的指定的页面
        // 该对象要写在最后一个
        {
            path:'/notfound',
            component:notfound, 
        },
        {
           path:'*',
           component:notfound, //404页面
           // 2、重定向到一个正常的页面
           // redirect:'/home'
           // redirect:{name:'home'}
           // redirect:{path:'/home'}
           redirect(to){
             console.log(to);
             // to就是包含了url信息的一个对象，通过对该对象进行判断，再跳转到指定的组件
             if(to.path=="/123"){
                return '/home';
             }
             else if(to.path=="/456"){
                return '/contact';
             }else{
                return {path:'/notfound'};
             }
           }
        }
    ]
});
// 将router.js导出去给main.js使用
export default router;