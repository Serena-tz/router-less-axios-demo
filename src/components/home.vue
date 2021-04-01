<template>
    <!-- 组件内容 -->
    <div class="home" style="background: url(img/bd_logo.png);">
        <!-- <button @click='getJson'>点击加载数据</button> -->
        <!-- 数据显示的地方 -->
        <!-- <img src="img/bd_logo.png"> -->
        <ul >
            <li v-for="(item,index) in searchList" :key="index">
                <img :src="item.cover">
            </li>
        </ul>
        <P @click="ck">
            {{msg}}
        </P>
       
       home组件
       <!-- 1、点击了某个按钮再加载数据
                写在vue的methods中
            2、一上来就加载jsons数据
                写在类似于window.onload入口函数中。写在vue的生命周期的钩子函数中
         -->
    </div>
</template>

<script>
//将axios导入进来使用（哪个组件要使用就在哪个组件导入）
import axios from 'axios';    
export default{
    data(){
        return{
            // 空數組
            searchList:[],
            msg:'啊哈哈哈'
        }
    }, 
    methods:{
        getJson(){
            //只要是在public中，public目录可以不写
            // json/search.json
            // /json/search.json
            // ./json/search.json
            // 点击了方法后再加载json数据
            // axios.get("json/search.json")
            // // 成功
            // .then(res=>{
            //     console.log(res);
            //     this.searchList=res.data.data.rows;

            // })
            // // 失败
            // .catch(err=>{
            //     console.log(err);
            // });
        },
        ck(){
            // setTimeout(function(){
                this.msg="123"
            // },1000);
        }
    }
    ,
    // created在DOM创建之前就会执行
    // 一般写JSON就在该钩子函数中写
    // 也就是先拿到数据再渲染数据，则要把数据写在该钩子函数中
    created(){
        // 在DOM加载前就需要先去获取数据
        axios.get("json/search.json")
        // 成功
        .then(res=>{
            console.log(res);
            this.searchList=res.data.data.rows;

        })
        // 失败
        .catch(err=>{
            console.log(err);
        });
        console.log(2)
    },
    beforeCreate(){
        console.log(1)
    },
    // 只要数据更新了就会自动触发该钩子函数
    // hook function
    // 
    // 回调函数
    // callback function
    updated(){
        console.log('数据被更新了');
    }

}    



</script>

<style scoped="">
/*@pink:pink;*/
.home{
    color: purple;
    background-color: pink;
    border:4px soild orange;
    padding: 10px;
    float: right;
    width: 78%
}    
</style>