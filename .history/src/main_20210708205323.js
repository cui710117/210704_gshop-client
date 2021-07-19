/*
 * 入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from "./components/Header/Header"
import store from './store';

//注册全局组件
Vue.component("Header",Header)

new Vue({
    el:'#app',
    /* components:{
        App
    },
    template:'<App/>' */
    /* render:function(createElement){
        return createElement(App)
    } */

    render: h =>h(App),
    router,
})
